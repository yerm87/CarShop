import React, { Component } from 'react';
import classes from './SignupComponent.css';
import Input from '../UIElements/inputs/Inputs';
import axios from 'axios';
import { withRouter, Redirect } from 'react-router-dom';
import * as actions from '../../reduxStore/authentication/Actions';
import { connect } from 'react-redux';
import Spinner from '../UIElements/spinner/Spinner';

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
                    minLength: 9,
                    passwordMatch: false
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
                    minLength: 9,
                    passwordMatch: true
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
                    minLength: 9,
                    passwordMatch: true
                }
            }
        },
        emailExistsInDatabase: false,
        formWasDelivered: false
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
        
        let isValidMatch = false;

        if(element.rules.passwordMatch){
            if(element.type === 'password' && copyElements.confirmPassword.value === ''){
                isValidMatch = true;
            } else if(element.type === 'password' && copyElements.confirmPassword.value !== '' &&
            copyElements.confirmPassword.valid){
                isValidMatch = element.value === copyElements.confirmPassword.value && isValidMinLength;
            } else if(element.type === 'confirmPassword' && copyElements.password.value === '') {
                isValidMatch = true;
            } else if(element.type === 'confirmPassword' && copyElements.password.value !== '' &&
            copyElements.password.valid){
                isValidMatch = element.value === copyElements.password.value && isValidMinLength;
            } else if(element.type === 'password' && !copyElements.confirmPassword.valid &&
            copyElements.confirmPassword.value > copyElements.confirmPassword.rules.minLength) {
                isValidMatch = element.value === copyElements.confirmPassword.value && isValidMinLength;
                if(isValidMatch){
                    copyElements.confirmPassword.valid = true;
                }
            } else if(element.type === 'confirmPassword' && !copyElements.password.valid &&
            copyElements.password.value > copyElements.password.rules.minLength) {
                isValidMatch = element.value === copyElements.password.value && isValidMinLength;
                if(isValidMatch){
                    copyElements.password.valid = true;
                }
            }
        } else {
            isValidMatch = true;
        }


        if(!isValidRequired){
            copyElements[element.type].errorMessage = 'field cannot be empty';
        } else if(!isValidMinLength){
            copyElements[element.type].errorMessage = 'minimum 9 characters required';
        } else if(element.rules.passwordMatch && !isValidMatch){
            copyElements[element.type].errorMessage = "password dont't match";
        } else if(element.rules.passwordMatch && isValidMatch){
            copyElements.password.errorMessage = '';
            copyElements.confirmPassword.errorMessage = '';
        } else {
            copyElements[element.type].errorMessage = '';
        }

        copyElements[element.type].valid = (isValidMinLength && isValidMatch) ? true : false;

        copyElements[element.type].touched = true;

        console.log(copyElements);

        this.setState({
            elements: copyElements
        })
    }

    validateForm = () => {
        const arrayOfValids = [];

        for(let prop in this.state.elements){
            arrayOfValids.push(this.state.elements[prop].valid);
        }

        if(!arrayOfValids.includes(false)){
            return true;
        }
        
        return false;
    }

    onSubmitHandler = (event) => {
        event.preventDefault();

        const valid =this.validateForm();

        if(valid){
            axios.post('/checkEmails', {
                emailAddress: this.state.elements.email.value
            }).then(response => {
                if(response.data > 0){
                    this.setState({
                        emailExistsInDatabase: true
                    })
                } else if(response.data === 0) {
                    this.setState({
                        emailExistsInDatabase: false
                    }, () => {
                        this.props.signupDispatch(this.state.elements.email.value, 
                                                  this.state.elements.password.value);
                    });
                }
            })       
        }
    }

    render() {
        let inputs = [];
        for(let prop in this.state.elements){
            inputs.push(this.state.elements[prop]);
        }
        const renderedInputs = inputs.map(current => {
            return <Input key={current.type}
                          element={current.type}
                          value={current.value}
                          valid={current.valid}
                          touched={current.touched}
                          error={current.errorMessage}
                          onChangeHandler={(event) => this.onChangeHandler(event, current.type)}
                          onBlurHandler={() => this.onBlurHandler(current)} />
        });

        let element = (
            <form className={classes.form}
                  onSubmit={(event) => this.onSubmitHandler(event)}>
                <input type="hidden" name="_token" id="csrf-token" value="{{ Session::token() }}" />
                {this.state.emailExistsInDatabase ? <p>This email already exists</p> : null}
                {renderedInputs}
                <Input element="submit" />
            </form>
        );

        if(this.props.loading){
            element = <Spinner />;
        }

        if(this.props.isLoggedIn){
            element = <Redirect />;
        }
        
        return element;
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.authReducer.loading,
        isLoggedIn: state.authReducer.userIsLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signupDispatch: (email, password) => dispatch(actions.signupRequest(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignupComponent));