import React from 'react';
import classes from './HeroImage.css';
import SearchComponent from '../searchComponent/SearchComponent';

const HeroImage = props => {
    return (
        <div className={classes.heroImage}>
            <h1>Find your car</h1>
            <p>Search cars from thousands of individual sellers</p>
            <SearchComponent />
        </div>
    )
}

export default HeroImage;