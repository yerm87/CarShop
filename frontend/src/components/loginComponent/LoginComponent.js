import React, { Component } from 'react';
import classes from './LoginComponent.css';
import { connect } from 'react-redux';
import * as actions from '../../reduxStore/authentication/Actions';
import Input from '../UIElements/inputs/Inputs';
import axios from 'axios';

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

    login = (event) => {
        event.preventDefault();
        
        axios.post('/auth_user', {
            email: this.state.elements.email.value,
            password: this.state.elements.password.value
        }).then(response => {
            console.log(response.data);
            if(response.data === 0){
                const copyElements = {
                    ...this.state.elements
                }
                copyElements['email'].valid = false;
                copyElements['password'].valid = false;
                copyElements['email'].touched = true;
                copyElements['password'].touched = true;

                this.setState({
                    elements: copyElements
                });
            } else if(response.data !== 0){
                this.props.userWasLoggedIn();
            }
        })
    }

    render() {
        const arrayOfInputs = [];

        for(let prop in this.state.elements){
            arrayOfInputs.push(this.state.elements[prop]);
        }

        console.log(arrayOfInputs);

        const inputElements = arrayOfInputs.map(current => 
                <Input element={current.type}
                       value={current.value}
                       valid={current.valid}
                       touched={current.touched}
                       onChangeHandler={(event) => this.onChangeHandler(event, current)} />);

        return (
            <form className={classes.form}
                  onSubmit={(event) => this.login(event)}>
                {inputElements}
                <Input element='login' />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userIsLoggedIn: state.authReducer.userIsLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userWasLoggedIn: () => dispatch(actions.userWasLoggedIn())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);