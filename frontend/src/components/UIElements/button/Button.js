import React from 'react';
import classes from './Button.css';

const Button = props => {
    const classList = [classes.button];
    if(props.menuButton){
        classList.push(classes.menuButton);
    }

    return (
        <button className={classList.join(' ')}>{props.children}</button>
    )
}

export default Button;