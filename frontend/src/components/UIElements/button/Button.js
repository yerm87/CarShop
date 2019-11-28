import React from 'react';
import classes from './Button.css';

const Button = props => {
    const classList = [classes.button];
    if(props.menuButton){
        classList.push(classes.menuButton);
    } else if(props.loginInListings){
        classList.push(classes.loginInListings);
    } else if(props.signupOrLoginButton){
        classList.push(classes.signupOrLoginButton);
    } else if(props.createListingButton){
        classList.push(classes.createListingButton);
    }

    return (
        <button className={classList.join(' ')}
                onClick={props.onClickHandler}>{props.children}</button>
    )
}

export default Button;