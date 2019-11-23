import React from 'react';
import classes from './Button.css';

const Button = props => {
    const classList = [classes.button];
    if(props.menuButton){
        classList.push(classes.menuButton);
    } else if(props.loginInListings){
        classList.push(classes.loginInListings);
    }

    return (
        <button className={classList.join(' ')}>{props.children}</button>
    )
}

export default Button;