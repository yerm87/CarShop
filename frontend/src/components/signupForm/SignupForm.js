import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupComponent from '../signupComponent/SignupComponent';
import LoginComponent from '../loginComponent/LoginComponent';

class SignupForm extends Component {

    render() {
        
        return (
            this.props.authMode === 'signup' ? <SignupComponent /> : 
            this.props.authMode === 'login' ? <LoginComponent /> : null
        )
    }
}

const mapStateToProps = state => {
    return {
        authMode: state.authReducer.signupOrLoginMode
    }
}

export default connect(mapStateToProps)(SignupForm);