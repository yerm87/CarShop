import React, { Component } from 'react';
import classes from './SignupComponent.css';
import Button from '../UIElements/button/Button';
import Input from '../UIElements/inputs/Inputs';
import axios from 'axios';
import $ from 'jquery';
import { withRouter } from 'react-router-dom';

class SignupComponent extends Component {
    state={
        elements: {
            email: {
                type: 'email',
                value: '',
                valid: false,
                touched: false,
                errorMessage: '',
                rules: {
                    required: true,
                    minLength: 9
                }
            },
            password: {
                type: 'password',
                value: '',
                valid: false,
                touched: false,
                errorMessage: '',
                rules: {
                    required: true,
                    minLength: 9
                }
            },
            confirmPassword: {
                type: 'confirmPassword',
                value: '',
                valid: false,
                touched: false,
                errorMessage: '',
                rules: {
                    required: true,
                    minLength: 9
                }
            }
        }
    }

    onChangeHandler = (event, current) => {
        const copyElements = {
            ...this.state.elements
        }

        copyElements[current].value = event.target.value;

        this.setState({
            elements: copyElements
        })
    }

    onBlurHandler = (current) => {
       this.validateData(current);        
    }

    validateData = (element) => {
        const copyElements = {
            ...this.state.elements
        }
        
        const isValidRequired = element.value.trim() !== '' && element.rules.required;

        const isValidMinLength = element.value.trim().length > element.rules.minLength && isValidRequired;

        if(!isValidRequired){
            copyElements[element.type].errorMessage = 'field cannot be empty';
        } else if(!isValidMinLength){
            copyElements[element.type].errorMessage = 'minimum 9 characters required';
        } else {
            copyElements[element.type].errorMessage = '';
        }

        copyElements[element.type].valid = isValidMinLength ? true : false;

        copyElements[element.type].touched = true;

        this.setState({
            elements: copyElements
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
/*
        var instance = axios.create({
            baseURL: 'http://localhost/shopping/backend/public',
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
          });
*/
        axios.post('/create_user', 
        {
            email: this.state.elements.email.value,
            password: this.state.elements.password.value
        }).then(response => {
            console.log(response);
        });
        
    }

    render() {
        let inputs = [];
        for(let prop in this.state.elements){
            inputs.push(this.state.elements[prop]);
        }
        const renderedInputs = inputs.map(current => {
            return <Input element={current.type}
                          value={current.value}
                          valid={current.valid}
                          touched={current.touched}
                          error={current.errorMessage}
                          onChangeHandler={(event) => this.onChangeHandler(event, current.type)}
                          onBlurHandler={() => this.onBlurHandler(current)} />
        });
        //
        return (
            <form className={classes.form}
                  onSubmit={(event) => this.onSubmitHandler(event)}>
                <input type="hidden" name="_token" id="csrf-token" value="{{ Session::token() }}" />
                  {renderedInputs}
                <Input element="submit" />
            </form>
        )
    }
}

export default SignupComponent;