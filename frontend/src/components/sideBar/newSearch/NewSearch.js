import React, { Component } from 'react';
import classes from './NewSearch.css';
import { connect } from 'react-redux';
import * as actions from '../../../reduxStore/searching/Actions';
import axios from 'axios';

class NewSearch extends Component {

    changeValue = (event) => {

        this.props.onChangeHandler(event.target.value, event.target.name);

        if(event.target === document.querySelector('#makesNewSearch')){
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

    render(){
        const makes = this.props.allMakes.map(element => {
            return <option value={element}>{element}</option>
        });

        const selectedModelsRender = this.props.selectedModels.map(element => {
            return <option value={element}>{element}</option>
        })

        return (
            <div className={classes.container}>
                <div>
                    <select name="condition"
                            onChange={(event) => this.changeValue(event)}>
                        <option value="select">New & Used Cars</option>
                        <option value="New Car">New</option>
                        <option value="Used Car">Used</option>
                    </select>
                </div>
                <div>
                    <select id="makesNewSearch"
                            name="make"
                            onChange={(event) => this.changeValue(event)}>
                        <option value="select">All Makes</option>
                        {makes}
                    </select>
                </div>
                <div>
                    <select name="model"
                            onChange={(event) => this.changeValue(event)}>
                        <option value="select">All Models</option>
                        {selectedModelsRender}
                    </select>
                </div>
                <div>
                    <select name="maxPrice"
                            style={{ borderBottom: '1px solid rgb(169, 169, 169)' }}
                            onChange={(event) => this.changeValue(event)}>
                        <option value="select">Max Price</option>
                        <option value="2000">$2,000</option>
                        <option value="4000">$4,000</option>
                        <option value="6000">$6,000</option>
                        <option value="8000">$8,000</option>
                        <option value="10000">$10,000</option>
                        <option value="15000">$15,000</option>
                        <option value="20000">$20,000</option>
                        <option value="25000">$25,000</option>
                        <option value="30000">$30,000</option>
                        <option value="35000">$35,000</option>
                        <option value="40000">$40,000</option>
                        <option value="45000">$45,000</option>
                        <option value="50000">$50,000</option>
                        <option value="60000">$60,000</option>
                        <option value="70000">$70,000</option>
                        <option value="80000">$80,000</option>
                        <option value="90000">$90,000</option>
                        <option value="100000">$100,000</option>
                    </select>
                </div>
                <div>
                    <button onClick={this.props.searchItems}>Search</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        allMakes: state.searchReducer.allMakes,
        selectedModels: state.searchReducer.selectedModels,
        searchParams: state.searchReducer.searchParams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeHandler: (value, name) => dispatch(actions.onChangeHandler(value, name)),
        setModels: (data) => dispatch(actions.setModels(data)),
        resetModels: () => dispatch(actions.resetModels())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSearch);