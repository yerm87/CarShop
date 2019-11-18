import React from 'react';
import classes from './NavigationItem.css';

const NavigationItem = props =>{
    return (
        <div className={classes.wrapping}>
            <div className={classes.item}>{props.name}</div>
        </div>
    )
}

export default NavigationItem;