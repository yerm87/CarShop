import React, { Component } from 'react';
import { proxy, zipAPIKey } from '../../urlsAPI/urlsAPI';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../reduxStore/searching/Actions';
import classes from './SearchResults.css';
import ListingItem from '../../components/listingItem/ListingItem';
import SideBar from '../../components/sideBar/SideBar';
import Spinner from '../../components/UIElements/spinner/Spinner';

class SearchResults extends Component {
    state={
        zipCodes: [],
        searchResults: [],
        filters: null,
        zipCodes: []
    }

    componentWillMount(){
        this.init();
    }

    init = () => {
        this.props.loadingActive();

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
                        const makes = [];
                        const models = [];

                        if(this.props.params['make'] !== 'select'){
                            makes.push(this.props.params['make']);
                        }

                        if(this.props.params['model'] !== 'select'){
                            models.push(this.props.params['model']);
                        }
                        
                        this.setState({
                            searchResults: response.data,
                            filters: {
                                ...this.props.params,
                                minYear: 'select',
                                maxYear: 'select',
                                makes: makes,
                                models: models,
                                minPrice: 'select',
                                mileage: 'select'
                            }
                        }, () => {
                            this.props.resetParameters();
                            this.props.loadingNotActive();
                            
                            const filters = [];
                            const params = {};
                    
                            for(let filter in this.state.filters){
                                if(filter !== 'make' && filter !== 'model'){
                                    filters.push(filter);
                                }
                            }

                            filters.forEach(element => {
                                params[element] = this.state.filters[element];
                            });

                            this.setState({
                                filters: params
                            }, () => {
                                const elements = document.querySelectorAll('.FilterComponent__conditionButtons__1bxUx input');

                                if(this.state.filters.condition === 'select'){
                                    elements[0].checked = true;
                                } else if(this.state.filters.condition === 'New Car') {
                                    elements[1].checked = true;
                                } else if(this.state.filters.condition === 'Used Car'){
                                    elements[2].checked = true;
                                }

                                const radius = document
                                .querySelector(`.FilterComponent__radius__1actv select option[value="${this.state.filters.radius}"]`);
                                radius.selected = true;
                                
                                const zip = document
                                .querySelector('.FilterComponent__selectLocation__13ILr input');
                                zip.value = this.state.filters.zip;

                                const makes = document.querySelectorAll('.FilterComponent__makes__ffLru input');
                                makes.forEach(make => {
                                    if(this.state.filters.makes.includes(make.value)){
                                        make.checked = true;
                                    }
                                });

                                const models = document.querySelectorAll('.FilterComponent__models__1egS_ input');
                                models.forEach(model => {
                                    if(this.state.filters.models.includes(model.value)){
                                        model.checked = true;
                                    }
                                });
                            });
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
                const makes = [];
                const models = [];

                if(this.props.params['make'] !== 'select'){
                    makes.push(this.props.params['make']);
                }

                if(this.props.params['model'] !== 'select'){
                    models.push(this.props.params['model']);
                }

                this.setState({
                    searchResults: response.data,
                    filters: {
                        ...this.props.params,
                        minYear: 'select',
                        maxYear: 'select',
                        makes: makes,
                        models: models,
                        minPrice: 'select',
                        mileage: 'select'
                    }
                }, () => {
                    this.props.resetParameters();
                    this.props.loadingNotActive();

                    const filters = [];
                    const params = {};

                    for(let filter in this.state.filters){
                        if(filter !== 'make' && filter !== 'model'){
                            filters.push(filter);
                        }
                    }

                    filters.forEach(element => {
                        params[element] = this.state.filters[element];
                    })

                    this.setState({
                        filters: params
                    }, () => {
                        const elements = document.querySelectorAll('.FilterComponent__conditionButtons__1bxUx input');

                        if(this.state.filters.condition === 'select'){
                            elements[0].checked = true;
                        } else if(this.state.filters.condition === 'New Car') {
                            elements[1].checked = true;
                        } else if(this.state.filters.condition === 'Used Car'){
                            elements[2].checked = true;
                        }

                        const makes = document.querySelectorAll('.FilterComponent__makes__ffLru input');
                        makes.forEach(make => {
                            if(this.state.filters.makes.includes(make.value)){
                                make.checked = true;
                            }
                        });

                        const models = document.querySelectorAll('.FilterComponent__models__1egS_ input');
                        models.forEach(model => {
                            if(this.state.filters.models.includes(model.value)){
                                model.checked = true;
                            }
                        });
                    });
                });
            });
        }
    }

    changeHandler = event => {
        let filters;
    
        if(event.target.type === 'checkbox'){
            filters = {
                ...this.state.filters
            }
            const arrayOfMakes = filters.makes;

            const arrayOfModels = filters.models;

            if(event.target.checked && event.target.name === 'makes'){
                arrayOfMakes.push(event.target.value);

                axios.post('/get_model', {
                    type: 'model',
                    params: event.target.value
                }).then(response => {
                    this.props.addItemsToModels(response.data);
                })

            } else if(!event.target.checked && event.target.name === 'makes') {
                const index = arrayOfMakes.findIndex(element => element === event.target.value);
                arrayOfMakes.splice(index, 1);

                axios.post('/get_model', {
                    type: 'model',
                    params: event.target.value
                }).then(response => {
                    response.data.forEach(element => {
                        const elementsDOM = document
                        .querySelectorAll('.FilterComponent__models__1egS_ input');
                        elementsDOM.forEach(element => {
                            element.checked = false;
                        })

                        if(arrayOfModels.includes(element)){
                            const index = arrayOfModels.findIndex(current => current === element)
                            arrayOfModels.splice(index, 1);
                        }
                    })
                    this.props.removeItemsFromModels(response.data);

                    const models = document.querySelectorAll('.FilterComponent__models__1egS_ input');
                    models.forEach(model => {
                        if(this.state.filters.models.includes(model.value)){
                            model.checked = true;
                        }
                    });
                });

            } else if(event.target.checked && event.target.name === 'models'){
                arrayOfModels.push(event.target.value);

            } else if(!event.target.checked && event.target.name === 'models'){
                const index = arrayOfModels.findIndex(element => element === event.target.value);
                arrayOfModels.splice(index, 1);
            }
        } else if(event.target.type === 'number') {
            if(event.target.value.length !== 5 && event.target.value.length !== 0){
                this.props.zipIsNotValid();
            } else if(event.target.value.length === 5 || event.target.value.length === 0) {
                this.props.zipIsValid();
            }
            filters = {
                ...this.state.filters,
                [event.target.name]: event.target.value
            }
        } else {
            filters = {
                ...this.state.filters,
                [event.target.name]: event.target.value
            }
        }

        this.setState({
            filters: filters
        }, () => {
            setTimeout(() => {
                const fd = new FormData;

                for(let filter in this.state.filters){
                    if(filter === 'makes'){
                        this.state.filters.makes.forEach(current => {
                            fd.append('makes[]', current)
                        });
                    } else if(filter === 'models'){
                        this.state.filters.models.forEach(current => {
                            fd.append('models[]', current)
                        });
                    } else {
                        if(this.state.filters[filter] !== 'select'){
                            fd.append(filter, this.state.filters[filter]);
                        }
                    }
                }

                if(this.state.filters.zip === ''){
                    this.props.loadingActive();
                    axios.post('/filter_items', fd).then(response => {
                        const data = response.data
                        data.forEach(current => {
                            current.year = current.year.toString();
                            current.price = current.price.toString();
                            current.mileage = current.mileage.toString();
                        });

                        this.setState({
                            searchResults: data
                        }, () => {
                            this.props.loadingNotActive();
                        });
                    });
                } else if(this.state.filters.zip !== '' && this.props.zipValid) {
                    this.props.loadingActive();
                    axios.get(`${proxy}https://www.zipcodeapi.com/rest/${zipAPIKey}/radius.json/${this.state.filters.zip}/${this.state.filters.radius}/mile`)
                    .then(response => {
                        const zipCodes = response.data.zip_codes.map(current => {
                            return current.zip_code;
                        });
                        
                        zipCodes.forEach(element => {
                            fd.append('zipCodes[]', element);
                        })
                        axios.post('/filter_items_withZipCodes', fd).then(response => {
                            const data = response.data
                            data.forEach(current => {
                                current.year = current.year.toString();
                                current.price = current.price.toString();
                                current.mileage = current.mileage.toString();
                            });
                        
                            this.setState({
                                searchResults: data
                            }, () => {
                                this.props.loadingNotActive();
                            });
                        })
                    })
                }
            }, 1000);
        });
    }

    onChangeInputNumber = (event) => {
        if(event.target.value.length === 6){
            event.target.value = event.target.value.slice(0, event.target.value.length-1);
        }
    }

    searchItems = () => {
        this.props.filterComponentActive();
        this.init();
    }

    render(){
        const items = this.state.searchResults.map(element => {
            return <ListingItem item={element}
                                searchItem />
        });

        let component;

        if(this.state.searchResults.length > 0){
            component = (
                <div className={classes.items}>
                    {items}
                </div>
            )
        } else {
            component = (
                <p style={{textAlign: 'center',
                   fontWeight: 'bold'}}>There are no resultss with this parameters</p>
            )
        }
        return (
            <div className={classes.mainContainer}>
                <div className={classes.title}>
                    <h1>Search Results</h1>
                    <div className={classes.contentContainer}>
                        <div>
                            <SideBar resultsNumber={`${this.state.searchResults.length} results`}
                                     changeHandler={(event) => this.changeHandler(event)}
                                     makesItems={this.props.allMakes}
                                     modelsItems={this.props.selectedModels}
                                     onChangeInputNumber={(event) => this.onChangeInputNumber(event)}
                                     zipValid={this.props.zipValid}
                                     searchItems={() => this.searchItems()} />
                        </div>
                        {this.props.loading ? <Spinner /> : component}
                    </div>
                </div>
            </div>
        )
        
        /*return (
            <div className={classes.mainContainer}>
            <div className={classes.contentContainer}>
                <SideBar resultsNumber={`${this.state.searchResults.length} results`}
                         changeHandler={(event) => this.changeHandler(event)}
                         makesItems={this.props.allMakes}
                         modelsItems={this.props.selectedModels}
                         onChangeInputNumber={(event) => this.onChangeInputNumber(event)}
                         zipValid={this.props.zipValid} />
                <p style={{ textAlign: 'center',
                            fontWeight: 'bold' }}>There are no listings in this area</p>
            </div>
            </div>
        )*/
    }
}

const mapStateToProps = state => {
    return {
        params: state.searchReducer.searchParams,
        allMakes: state.searchReducer.allMakes,
        selectedModels: state.searchReducer.selectedModels,
        zipValid: state.searchReducer.zipIsValid,
        loading: state.searchReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetParameters: () => dispatch(actions.resetParameters()),
        addItemsToModels: (data) => dispatch(actions.addItemsToModels(data)),
        removeItemsFromModels: (data) => dispatch(actions.removeItemsFromModels(data)) ,
        zipIsValid: () => dispatch(actions.zipIsValid()),
        zipIsNotValid: () => dispatch(actions.zipIsNotValid()),
        loadingActive: () => dispatch(actions.loadingActive()),
        loadingNotActive: () => dispatch(actions.loadingNotActive()),
        filterComponentActive: () => dispatch(actions.filterComponentActive())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);