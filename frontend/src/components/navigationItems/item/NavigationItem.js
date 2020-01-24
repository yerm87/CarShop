import React from 'react';
import classes from './NavigationItem.css';
import { Link } from 'react-router-dom';

const NavigationItem = props =>{
    return (
        <Link to={props.path}>
            <div className={classes.wrapping}>
                <div className={classes.item}>{props.name}</div>
            </div>
        </Link>
    )
}

export default NavigationItem;