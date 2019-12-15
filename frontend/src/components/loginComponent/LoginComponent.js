import React, { Component } from 'react';
import classes from './LoginComponent.css';
import { connect } from 'react-redux';
import * as actions from '../../reduxStore/authentication/Actions';
import Input from '../UIElements/inputs/Inputs';
import axios from 'axios';
import Spinner from '../UIElements/spinner/Spinner';
import { Redirect } from 'react-router-dom';

class LoginComponent extends Component {
    state={
        elements: {
            email: {
                type: 'email',
                value: '',
                valid: true,
                touched: false,
                errorMessage: ''
            },
            password: {
                type: 'password',
                value: '',
                valid: true,
                touched: false,
                errorMessage: ''
            }
        },
        formIsValid: true
    }

    onChangeHandler = (event, current) => {
        
        const copyElements = {
            ... this.state.elements
        }

        copyElements[current.type].touched = true;
        copyElements[current.type].value = event.target.value;

        this.setState({
            elements: copyElements
        });
    }

    validationData = (element) => {
        const copyElements = {
            ...this.state.elements
        }
        if(copyElements[element.type].value === ''){
            copyElements[element.type].valid = false;
            copyElements[element.type].errorMessage = 'Field cannot be empty';
        } else {
            copyElements[element.type].valid = true;
            copyElements[element.type].errorMessage = '';
            
        }

        this.setState({
            elements: copyElements
        })
    }

    login = (event) => {
        event.preventDefault();

        if(this.state.elements.email.value !== '' && this.state.elements.password.value !== ''){
            this.props.init();
            axios.post('/auth_user', {
                email: this.state.elements.email.value,
                password: this.state.elements.password.value
            }).then(response => {
                console.log(response.data);
                const copyElements = {
                    ...this.state.elements
                }

                if(response.data === 0){
                    this.props.removeSpinner();
                    copyElements['email'].valid = false;
                    copyElements['password'].valid = false;
    
                    this.setState({
                        elements: copyElements,
                        formIsValid: false
                    });
                } else if(response.data !== 0){
                    this.props.userWasLoggedIn();

                    copyElements['email'].valid = true;
                    copyElements['password'].valid = true;
                    copyElements['email'].errorMessage = '';
                    copyElements['password'].errorMessage = '';

                    this.setState({
                        elements: copyElements,
                        formIsValid: true
                    })
                }
                this.props.getEmail();
            })
        } else {
            const copyElements = {
                ...this.state.elements
            }
            copyElements['email'].valid = false;
            copyElements['password'].valid = false;
            copyElements['email'].touched = true;
            copyElements['password'].touched = true;
            copyElements['email'].errorMessage = 'Field cannot be empty';
            copyElements['password'].errorMessage = 'Field cannot be empty';

            this.setState({
                elements: copyElements
            });
        }
    }

    render() {
        const arrayOfInputs = [];

        for(let prop in this.state.elements){
            arrayOfInputs.push(this.state.elements[prop]);
        }

        const inputElements = arrayOfInputs.map(current => 
                <Input element={current.type}
                       value={current.value}
                       valid={current.valid}
                       touched={current.touched}
                       error={current.errorMessage}
                       onChangeHandler={(event) => this.onChangeHandler(event, current)}
                       onBlurHandler={() => this.validationData(current)} />);

        let component = (
            <form className={classes.form}
                  onSubmit={(event) => this.login(event)}>
                {!this.state.formIsValid ? <p>Login or password are not correct</p> : null}
                {inputElements}
                <Input element='login' />
            </form>
        )

        if(this.props.loading){
            component = <Spinner />;
        }

        if(this.props.userIsLoggedIn){
            component = <Redirect to='sell_car' />;
        }

        return component
    }
}

const mapStateToProps = (state) => {
    return {
        userIsLoggedIn: state.authReducer.userIsLoggedIn,
        loading: state.authReducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userWasLoggedIn: () => dispatch(actions.userWasLoggedIn()),
        init: () => dispatch(actions.init()),
        removeSpinner: () => dispatch(actions.removeSpinner()),
        getEmail: () => dispatch(actions.getEmail())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);