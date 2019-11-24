import React, { Component } from 'react';
import classes from './LoginOrSignup.css';
import { connect } from 'react-redux';
import * as actions from '../../reduxStore/authentication/Actions';

class LoginOrSignup extends Component {

    setActiveClassOnClick = event => {
        if(event.target === document.querySelector('#signup')){
            document.querySelector('#login').classList.remove(classes.activeClass);
            document.querySelector('#login').dataset.clicked = false;
        } else if(event.target === document.querySelector('#login')){
            document.querySelector('#signup').classList.remove(classes.activeClass);
            document.querySelector('#signup').dataset.clicked = false;
        }
        event.target.classList.add(classes.activeClass);
        event.target.dataset.clicked = true;
    }

    setActiveClassOnMouseEnter = event => {
        if(event.target === document.querySelector('#signup') || 
           event.target === document.querySelector('#login')){
            event.target.classList.add(classes.activeClass);
        }
    }

    setActiveClassOnMouseLeave = event => {
        if((event.target === document.querySelector('#signup') || 
            event.target === document.querySelector('#login')) && event.target.dataset.clicked === 'false'){
            event.target.classList.remove(classes.activeClass);
            console.log('left');
        }
    }

    render() {
        return (
            <div className={classes.wrapper}
                 onClick={(event) => this.setActiveClassOnClick(event)}
                 onMouseOver={(event) => this.setActiveClassOnMouseEnter(event)}
                 onMouseOut={(event) => this.setActiveClassOnMouseLeave(event)}>
                <p id="signup"
                   className={classes.activeClass} 
                   data-clicked="true"
                   data-mode="signup"
                   onClick={() => this.props.changeMode(document.querySelector('#signup').dataset.mode)}>
                       Sign Up</p>
                <p id="login" 
                   data-clicked="false"
                   data-mode="login"
                   onClick={() => this.props.changeMode(document.querySelector('#login').dataset.mode)}>
                       Log In</p>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeMode: (value) => dispatch(actions.setSignupOrLoginMode(value)) 
    }
}

export default connect(null, mapDispatchToProps)(LoginOrSignup);