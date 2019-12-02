import React, { Component } from 'react';
import classes from './LoginComponent.css';
import { connect } from 'react-redux';
import * as actions from '../../reduxStore/authentication/Actions';
import Input from '../UIElements/inputs/Inputs';

class LoginComponent extends Component {
    state={
        elements: {
            email: {
                type: 'email',
                value: '',
                valid: true,
                touched: false
            },
            password: {
                type: 'password',
                value: '',
                valid: true,
                touched: false
            }
        }
    }

    onChangeHandler = (event, current) => {
        
        const copyElements = {
            ... this.state.elements
        }

        copyElements[current.type].value = event.target.value;
        copyElements[current.type].touched = true;

        this.setState({
            elements: copyElements
        });
    }

    //login = (event) => {
        //event.preventDefault();
        //this.props.loginProcess(this.state.elements.email.value, this.state.elements.password.value);
/*
        const copyElements = {
            ...this.state.elements
        }

        if(this.props.failedToLogIn){
            copyElements[email].valid = false;
            copyElements[password].valid = false;

            console.log(copyElements[email].valid)

            this.setState({
                elements: copyElements
            })
        }*/
       // console.log('proceeded')
    //}

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
                       onChangeHandler={(event) => this.onChangeHandler(event, current)} />);

        return (
            <form className={classes.form}>
                {inputElements}
                
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        failedToLogIn: state.authReducer.failedToLogIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginProcess: (email, password) => dispatch(actions.loginUser(email, password))
    }
}

export default LoginComponent;