import React from 'react';
import classes from './LoginComponent.css';
import Button from '../UIElements/button/Button';

const LoginComponent = () => {
    return (
        <form className={classes.form}>
            <label for="email">Email</label>
            <input type="email" name="email" />
            <label for="password">Password</label>
            <input type="password" name="password"
                   style={{marginBottom: '20px'}} />
            <Button signupOrLoginButton>Log In</Button>
        </form>
    )
}

export default LoginComponent;