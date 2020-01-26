import React, { Component } from 'react';
import classes from './SearchComponent.css';
import { connect } from 'react-redux';
import * as actions from '../../reduxStore/searching/Actions';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SearchComponent extends Component {
    state={
        errorMessage: ''
    }

    componentWillMount(){
        this.props.resetModels();
        this.props.resetParameters();
        this.props.zipIsValid();
        this.props.resetSearchResults();
        
        axios.post('/get_make', {
            type: 'make',
            params: ''
        }).then(response => {
            this.props.setMakes(response.data);
        })
    }

    changeValue = (event) => {

        if(event.target === document.querySelector('#zip')){
            if(event.target.value.length === 6){
                event.target.value = event.target.value.slice(0, event.target.value.length-1);
            }
        }

        this.props.onChangeHandler(event.target.value, event.target.name);

        if(event.target === document.querySelector('#makes')){
            setTimeout(() => {
                axios.post('/get_model', {
                    type: 'model',
                    params: this.props.searchParams.make
                }).then(response => {
                    if(response.data !== ''){
                        this.props.setModels(response.data);
                    } else {
                        this.props.resetModels();
                    }
                })
            }, 500)
        }
    }

    searchButtonHandler = () => {
        if(this.props.zipValid){
            this.props.history.push('/search_results');
        } else if(!this.props.zipValid){
            this.setState({
                errorMessage: 'zip code should have 5 digits'
            })
        }
    }

    onBlurHandler = () => {
        if(this.props.searchParams.zip.length !== 5 && this.props.searchParams.zip.length !== 0){
            this.props.zipIsNotValid();
        } else if(this.props.searchParams.zip.length === 5 || this.props.searchParams.zip.length === 0) {
            this.props.zipIsValid();
        }
    }
    
    render(){
        const zipCodeClasses = [classes.input];
        if(!this.props.zipValid){
            zipCodeClasses.push(classes.activeZipCode);
        }

        const allMakesOptions = this.props.allMakes.map(element => {
            return <option value={element}>{element}</option>
        })

        const selectedModels = this.props.selectedModels.map(element => {
            return <option value={element}>{element}</option>
        })

        return (
            <div className={classes.mainContainer}>
                <p>{this.state.errorMessage}</p>
                <div className={classes.searchContainer}>
                    <select style={{borderTopLeftRadius: '10px'}} 
                            name="condition"
                            onChange={(event) => this.changeValue(event)}>
                        <option value="select">New & Used</option>
                        <option value="New Car">New</option>
                        <option value="Used Car">Used</option>
                    </select>
                    <select id="makes"
                            name="make"
                            onChange={(event) => this.changeValue(event)}>
                        <option value="select">All Makes</option>
                        {allMakesOptions}
                    </select>
                    <select style={{borderTopRightRadius: '10px'}} 
                            name="model"
                            onChange={(event) => this.changeValue(event)}>
                        <option value="select">All Models</option>
                        {selectedModels}
                    </select>
                    <select style={{borderBottomLeftRadius: '10px'}} 
                            name="maxPrice"
                            onChange={(event) => this.changeValue(event)}>
                        <option value="select">No Max Price</option>
                        <option value="6000">$6,000</option>
                        <option value="8000">$8,000</option>
                        <option value="10000">$10,000</option>
                        <option value="15000">$15,000</option>
                    </select>
                    <div className={classes.zip}>
                        <select style={{width: '70%'}} 
                                name="radius"
                                onChange={(event) => this.changeValue(event)}>
                            <option value="10">10 miles from</option>
                            <option value="50">50</option>
                        </select>
                        <input id="zip"
                               className={zipCodeClasses.join(' ')}
                               type="number" 
                               name="zip" 
                               placeholder="zip code"
                               onChange={(event) => this.changeValue(event)}
                               onBlur={() => this.onBlurHandler()} />
                    </div>
                    <button onClick={() => this.searchButtonHandler()}>Search</button>           
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchParams: state.searchReducer.searchParams,
        zipValid: state.searchReducer.zipIsValid,
        allMakes: state.searchReducer.allMakes,
        selectedModels: state.searchReducer.selectedModels
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeHandler: (value, name) => dispatch(actions.onChangeHandler(value, name)),
        zipIsValid: () => dispatch(actions.zipIsValid()),
        zipIsNotValid: () => dispatch(actions.zipIsNotValid()),
        setMakes: (data) => dispatch(actions.setMakes(data)),
        setModels: (data) => dispatch(actions.setModels(data)),
        resetModels: () => dispatch(actions.resetModels()),
        resetParameters: () => dispatch(actions.resetParameters()),
        zipIsValid: () => dispatch(actions.zipIsValid()),
        resetSearchResults: () => dispatch(actions.resetSearchResults())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchComponent));