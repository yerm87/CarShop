import React from 'react';
import classes from './Title.css';

const Title = props => {
    return (
        <div className={classes.title}>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default Title;