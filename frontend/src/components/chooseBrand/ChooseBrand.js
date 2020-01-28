import React, { useState, useEffect } from 'react';
import classes from './ChooseBrand.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { onChangeHandler } from '../../reduxStore/searching/Actions';
import { withRouter } from 'react-router-dom';

const ChooseBrand = props => {
    const [listings, setListings] = useState(
        [
            {
                make: 'Toyota'
            }
        ]
    );

    useEffect(() => {
        axios.get('/all_listings').then(response => {
            setListings(response.data);
        });
    }, [])

    const searchBrand = value => {
        props.onChangeHandler(value, 'make');
        props.history.push('/search_results');
    }

    let makes = listings.map(listing => listing.make);
    
    const makesSet = new Set([...makes]);
    makes = [...makesSet];

    const elements = new Map();

    makes.forEach(make => {
        const arrayOfElements = [];
        listings.forEach(listing => {
            if(listing.make === make){
                arrayOfElements.push(listing);
            }
        });
        elements.set(make, arrayOfElements.length);
    });

    const elementsForRender = [];
    for(let [key, value] of elements.entries()){
        elementsForRender.push(<p onClick={() => searchBrand(key)}>{key} <span> ({value})</span></p>);
    }

    return (
        <div className={classes.container}>
            <h1>Choose Your Brand</h1>
            <div className={classes.content}>
                {elementsForRender}
            </div>
        </div>
    )
}

export const mapDispatchToProps = dispatch => {
    return {
        onChangeHandler: (value, name) => dispatch(onChangeHandler(value, name))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(ChooseBrand));