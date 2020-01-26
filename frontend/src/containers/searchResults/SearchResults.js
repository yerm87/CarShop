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
        zipCodes: []
    }

    componentDidMount(){
        this.init();
    }

    pagination = () => {
        const shortArray = this.props.searchResults.slice(0, this.props.resultsPerPage);
        const pagesArray = [];

        for(let i=1; i<=this.props.pages; i++){
            pagesArray.push(i);
        }
        
        const activePages = [];

        activePages[0] = true;

        for(let i=1; i<pagesArray.length; i++){
            activePages.push(false);
        }

        return {
            shortArray: shortArray,
            pagesArray: pagesArray,
            activePages: activePages
        }
    }

    setValues = () => {
        const elements = document.querySelectorAll('.FilterComponent__conditionButtons__1bxUx input');
    
        if(this.props.params.condition === 'select'){
            elements[0].checked = true;
        } else if(this.props.params.condition === 'New Car') {
            elements[1].checked = true;
        } else if(this.props.params.condition === 'Used Car'){
            elements[2].checked = true;
        }
    
        const makesRender = document.querySelectorAll('.FilterComponent__makes__ffLru input');
        makesRender.forEach(make => {
            if(this.props.params.makes.includes(make.value)){
                make.checked = true;
            }
        });
    
        const modelsRender = document.querySelectorAll('.FilterComponent__models__1egS_ input');
        modelsRender.forEach(model => {
            if(this.props.params.models.includes(model.value)){
                model.checked = true;
            }
        });
    }

    init = () => {
        this.props.loadingActive();

        if(this.props.searchResults.length === 0){
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
    
                            if(this.props.params['make'] !== 'select'){
                                this.props.addMake(this.props.params['make']);
                            }
    
                            if(this.props.params['model'] !== 'select'){
                                this.props.addModel(this.props.params['model']);
                            }

                            this.props.setSearchResults(response.data);

                            this.props.loadingNotActive();

                            const data = this.pagination();

                            this.props.setActiveItems(data.shortArray);
                            this.props.setPagesArray(data.pagesArray);
                            this.props.setActivePages(data.activePages);

                            this.setValues();
                            
                            const radius = document
                            .querySelector(`.FilterComponent__radius__1actv select option[value="${this.props.params.radius}"]`);
                            radius.selected = true;
                                    
                            const zip = document
                            .querySelector('.FilterComponent__selectLocation__13ILr input');
                            zip.value = this.props.params.zip;
                        });
                    });
                });
            } else {
                const fd = new FormData();
    
                for(let param in this.props.params){
                    if(this.props.params[param] !== 'select' && this.props.params[param] !== []){
                        fd.append(param, this.props.params[param])
                    }
                }
                axios.post('/get_all_items', fd).then(response => {
    
                    if(this.props.params['make'] !== 'select'){
                        this.props.addMake(this.props.params['make'])
                    }
    
                    if(this.props.params['model'] !== 'select'){
                        this.props.addModel(this.props.params['model']);
                    }

                    this.props.setSearchResults(response.data);

                    this.props.loadingNotActive();

                    const data = this.pagination();

                    this.props.setActiveItems(data.shortArray);
                    this.props.setPagesArray(data.pagesArray);
                    this.props.setActivePages(data.activePages);

                    this.setValues();
                });
            }
        } else {
            this.props.loadingNotActive();
            this.setValues();

            if(this.props.params.zip !== ''){
                const radius = document
                .querySelector(`.FilterComponent__radius__1actv select option[value="${this.props.params.radius}"]`);
                radius.selected = true;
                                    
                const zip = document
                .querySelector('.FilterComponent__selectLocation__13ILr input');
                zip.value = this.props.params.zip;
            }
        }
    }

    changeHandler = event => {
    
        if(event.target.type === 'checkbox'){
            if(event.target.checked && event.target.name === 'makes'){

                this.props.addMake(event.target.value);

                axios.post('/get_model', {
                    type: 'model',
                    params: event.target.value
                }).then(response => {
                    this.props.addItemsToModels(response.data);
                });

            } else if(!event.target.checked && event.target.name === 'makes') {

                this.props.removeMake(event.target.value);

                axios.post('/get_model', {
                    type: 'model',
                    params: event.target.value
                }).then(response => {
                    const elementsDOM = document.querySelectorAll('.FilterComponent__models__1egS_ input');
                    elementsDOM.forEach(param => {
                        param.checked = false;
                    });

                    response.data.forEach(element => {
                        if(this.props.params.models.includes(element)){
                            this.props.removeModel(element);
                        }
                    });

                    this.props.removeItemsFromModels(response.data);

                    const models = document.querySelectorAll('.FilterComponent__models__1egS_ input');
                    models.forEach(model => {
                        if(this.props.params.models.includes(model.value)){
                            model.checked = true;
                        }
                    });
                });

            } else if(event.target.checked && event.target.name === 'models'){
                this.props.addModel(event.target.value);

            } else if(!event.target.checked && event.target.name === 'models'){
                this.props.removeModel(event.target.value)
            }
        } else if(event.target.type === 'number') {
            if(event.target.value.length !== 5 && event.target.value.length !== 0){
                this.props.zipIsNotValid();
            } else if(event.target.value.length === 5 || event.target.value.length === 0) {
                this.props.zipIsValid();
            }

            this.props.onChangeHandler(event.target.value, event.target.name);
        } else {
            this.props.onChangeHandler(event.target.value, event.target.name);
        }

        setTimeout(() => {
            const fd = new FormData;

            for(let filter in this.props.params){
                if(filter === 'makes'){
                    this.props.params.makes.forEach(current => {
                        fd.append('makes[]', current)
                    });
                } else if(filter === 'models'){
                    this.props.params.models.forEach(current => {
                        fd.append('models[]', current)
                    });
                } else {
                    if(this.props.params[filter] !== 'select'){
                        fd.append(filter, this.props.params[filter]);
                    }
                }
            }

            if(this.props.params.zip === ''){
                this.props.loadingActive();
                axios.post('/filter_items', fd).then(response => {
                    const data = response.data
                    data.forEach(current => {
                        current.year = current.year.toString();
                        current.price = current.price.toString();
                        current.mileage = current.mileage.toString();
                    });

                    this.props.setSearchResults(data);

                    this.props.loadingNotActive();

                    const dataPagination = this.pagination();

                    this.props.setActiveItems(dataPagination.shortArray);
                    this.props.setPagesArray(dataPagination.pagesArray);
                    this.props.setActivePages(dataPagination.activePages);
                });
            } else if(this.props.params.zip !== '' && this.props.zipValid) {
                this.props.loadingActive();
                axios.get(`${proxy}https://www.zipcodeapi.com/rest/${zipAPIKey}/radius.json/${this.props.params.zip}/${this.props.params.radius}/mile`)
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

                        this.props.setSearchResults(data);

                        this.props.loadingNotActive();

                        const dataPagination = this.pagination();

                        this.props.setActiveItems(dataPagination.shortArray);
                        this.props.setPagesArray(dataPagination.pagesArray);
                        this.props.setActivePages(dataPagination.activePages);
                    });
                });
            }
        }, 1000);
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

    switchPageHandler = (page) => {
        this.props.switchPage(page);
    }

    render(){
        const activePages = this.props.activePages;
        const pages = this.props.pagesArray.map((page, index) => {
            const classList = [classes.page];
            if(activePages[index]){
                classList.push(classes.activeElement);
            }
            return (
                <p className={classList.join(' ')}
                   onClick={() => this.switchPageHandler(page)}>{page}</p>
            )
        });
        const items = this.props.activeItems.map(element => {
            return <ListingItem item={element}
                                searchItem />
        });

        let component;

        if(this.props.activeItems.length > 0){
            component = (
                <div className={classes.items}>
                    {items}
                    <div className={classes.pages}>
                        {this.props.pages > 1 ? pages : null}
                    </div>
                </div>
            )
        } else {
            component = (
                <p style={{textAlign: 'center',
                   fontWeight: 'bold'}}>There are no results with this parameters</p>
            )
        }
        return (
            <div className={classes.mainContainer}>
                <div className={classes.title}>
                    <h1>Search Results</h1>
                    <div className={classes.contentContainer}>
                        <div>
                            <SideBar resultsNumber={`${this.props.searchResults.length} results`}
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
    }
}

const mapStateToProps = state => {
    return {
        params: state.searchReducer.searchParams,
        allMakes: state.searchReducer.allMakes,
        selectedModels: state.searchReducer.selectedModels,
        zipValid: state.searchReducer.zipIsValid,
        loading: state.searchReducer.loading,
        searchResults: state.searchReducer.searchResults,
        resultsPerPage: state.searchReducer.resultsPerPage,
        pages: state.searchReducer.pages,
        activePages: state.searchReducer.activePages,
        pagesArray: state.searchReducer.pagesArray,
        activeItems: state.searchReducer.activeItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItemsToModels: (data) => dispatch(actions.addItemsToModels(data)),
        removeItemsFromModels: (data) => dispatch(actions.removeItemsFromModels(data)) ,
        zipIsValid: () => dispatch(actions.zipIsValid()),
        zipIsNotValid: () => dispatch(actions.zipIsNotValid()),
        loadingActive: () => dispatch(actions.loadingActive()),
        loadingNotActive: () => dispatch(actions.loadingNotActive()),
        filterComponentActive: () => dispatch(actions.filterComponentActive()),
        setSearchResults: (results) => dispatch(actions.setSearchResults(results)),
        addMake: (make) => dispatch(actions.addMake(make)),
        addModel: (model) => dispatch(actions.addModel(model)),
        setActiveItems: (activeItems) => dispatch(actions.setActiveItems(activeItems)),
        setPagesArray: (pagesArray) => dispatch(actions.setPagesArray(pagesArray)),
        setActivePages: (activePages) => dispatch(actions.setActivePages(activePages)),
        removeMake: (make) => dispatch(actions.removeMake(make)),
        removeModel: (model) => dispatch(actions.removeModel(model)),
        onChangeHandler: (value, name) => dispatch(actions.onChangeHandler(value, name)),
        switchPage: (page) => dispatch(actions.switchPage(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);