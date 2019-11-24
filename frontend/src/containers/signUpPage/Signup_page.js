import React, { Component } from 'react';
import LoginOrSignup from '../../components/loginOrSignupMode/LoginOrSignup';
import SignupForm from '../../components/signupForm/SignupForm';

class SignupPage extends Component {
    render() {
        return (
            <React.Fragment>
                <LoginOrSignup />
                <SignupForm />
            </React.Fragment>
        )
    }
}

export default SignupPage;