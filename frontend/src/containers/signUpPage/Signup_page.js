import React, { Component } from 'react';
import LoginOrSignup from '../../components/loginOrSignupMode/LoginOrSignup';
import SignupForm from '../../components/signupForm/SignupForm';
import classes from './Signup_page.css';

class SignupPage extends Component {
    render() {
        return (
            <div className={classes.wrapper}>
                <LoginOrSignup />
                <SignupForm />
            </div>
        )
    }
}

export default SignupPage;