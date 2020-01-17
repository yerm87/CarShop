import React from 'react';
import classes from './Term.css';

const Term = props => {
    const classesTerms = [classes.term];
    
    if(props.isActive){
        classesTerms.push(classes.active);
    }

    return (
        <p className={classesTerms.join(' ')}
           onClick={props.termOnClick}>{props.value}</p>
    )
}

export default Term;