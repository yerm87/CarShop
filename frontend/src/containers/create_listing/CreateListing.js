import React, { Component } from 'react';
import classes from './CreateListing.css';
import axios from 'axios';
import Input from '../../components/UIElements/inputs/Inputs';

class CreateListing extends Component {
    state={
        elements: {
            year: {
                type: 'year',
                value: [],
                option: '',
                active: true,
                selected: false
            },
            make: {
                type: 'make',
                value: [],
                option: '',
                active: false,
                selected: false
            }
        }
    }

    componentWillMount(){
        const copyElements = {
            ...this.state.elements
        };

        axios.post('/get_param', {
            type: this.state.elements.year.type
        }).then(response => {
            copyElements['year'].value = response.data;

            this.setState({
                elements: copyElements
            });
        });
    }

    onChangeHandler = (event, current) => {
        const value = event.target.value;
/*
        const arrayOfValues = [];
        for(let prop in this.state.elements){
            arrayOfValues.push(prop);
        }

        const index = arrayOfValues.findIndex((element) => element === current.type);
        const nextElement = arrayOfValues[index+1];

        if(nextElement === null){
            console.log('last element');
        }

        const copyElements = {
            ...this.state.elements
        }

        axios.post(`/get_${nextElement}`, {
            type: nextElement,
            params: value
        }).then(response => {
            copyElements[nextElement].value = response.data;
            copyElements[nextElement].active = true;

            this.setState({
                elements: copyElements
            })
        })*/
        console.log(value);
    }

    getOptionsForRender = (element) => {

        const options = element.value.map(current => {
            return <option value={current}>{current}</option>
        });

        return options;
    }

    render(){
        const arrayOfElements = [];

        for(let element in this.state.elements){
            arrayOfElements.push(this.state.elements[element]);
        }

        const selects = arrayOfElements.map(element => (
            <Input element={element.type}
                   invalid={!element.active}
                   onChangeHandler={(event) => this.onChangeHandler(event, element)}>
                   {this.getOptionsForRender(element)}</Input>
            )
        );

        return (
            <div className={classes.wrapper}>
                <h1>Vehicle Information</h1>
                {selects}
            </div>
        )
    }
}

export default CreateListing;