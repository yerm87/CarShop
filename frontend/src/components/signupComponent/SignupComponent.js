import React from 'react';
import classes from './SignupComponent.css';
import Button from '../UIElements/button/Button';

const SignupComponent = () => {
    return (
        <form className={classes.form}>
            <label for="email">Email</label>
            <input type="email" name="email" />
            <label for="password">Password</label>
            <input type="password" name="password" />
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword"
                   style={{marginBottom: '20px'}} />
            <Button signupOrLoginButton>Sign Up</Button>
        </form>
    )
}

export default SignupComponent;