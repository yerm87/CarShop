import React from 'react';
import LoginComponent from '../../components/loginComponent/LoginComponent';
import classes from './LoginPage.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className={classes.wrapper}>
            <LoginComponent />
            <p><Link to="/signup"><span>Sign Up</span></Link> if you are not registered yet</p>
        </div>
    )
}

export default LoginPage;