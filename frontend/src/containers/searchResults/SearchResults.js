import React, { Component } from 'react';
import { proxy, zipAPIKey } from '../../urlsAPI/urlsAPI';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../reduxStore/searching/Actions';
import classes from './SearchResults.css';
import ListingItem from '../../components/listingItem/ListingItem';

class SearchResults extends Component {
    state={
        zipCodes: [],
        searchResults: []
    }

    componentWillMount(){
        if(this.props.params.zip !== ''){
            axios.get(`${proxy}https://www.zipcodeapi.com/rest/${zipAPIKey}/radius.json/${this.props.params.zip}/${this.props.params.radius}/mile`)
            .then(response => {
                const zipCodes = response.data.zip_codes.map(current => {
                    return current.zip_code
                })

                this.setState({
                    zipCodes: zipCodes
                }, () => {
                    const fd = new FormData();

                    for(let param in this.props.params){
                        if(this.props.params[param] !== 'select' && param !== 'radius' && param !== 'zip'){
                            fd.append(param, this.props.params[param])
                        }
                    }
                    this.state.zipCodes.forEach(zip => {
                        fd.append('zipCodes[]', zip);
                    })
                    axios.post('/get_items_by_zipCode', fd).then(response => {
                        this.props.resetParameters();
                        this.setState({
                            searchResults: response.data
                        }, () => {
                            console.log(this.state.searchResults);
                        });
                    })
                });
            });
        } else {
            const fd = new FormData();

            for(let param in this.props.params){
                if(this.props.params[param] !== 'select'){
                    fd.append(param, this.props.params[param])
                }
            }
            axios.post('/get_all_items', fd).then(response => {
                this.props.resetParameters();
                this.setState({
                    searchResults: response.data
                }, () => {
                    console.log(this.state.searchResults);
                });
            });
        }
    }

    render(){
        const items = this.state.searchResults.map(element => {
            return <ListingItem item={element}
                                searchItem />
        })
        return(
            <div className={classes.mainContainer}>
                <div className={classes.title}>
                    <h1>Search Results</h1>
                    {this.state.searchResults.length > 0 ? (
                        <div className={classes.contentContainer}>
                            <div>
                                filters
                            </div>
                            <div className={classes.items}>
                                {items}
                            </div>
                        </div>
                    ) : (
                        <p style={{textAlign: 'center'}}>There are no listings in this area</p>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        params: state.searchReducer.searchParams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetParameters: () => dispatch(actions.resetParameters())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);