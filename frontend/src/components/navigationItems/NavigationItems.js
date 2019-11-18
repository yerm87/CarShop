import React from 'react';
import NavigationItem from './item/NavigationItem';
import classes from './NavigationItems.css';
import Button from '../UIElements/button/Button';

const NavigationItems = () => {
    return (
        <div className={classes.items}>
            <NavigationItem name='Cars for sale' />
            <NavigationItem name='Sell Your Car' />
            <NavigationItem name='Reviews' />
            <NavigationItem name='About Us' />
            <Button menuButton>Sign Up</Button>
            <Button menuButton>Log In</Button>
        </div>
    )
}

export default NavigationItems;