import React from 'react';
import NavigationItem from './item/NavigationItem';
import classes from './NavigationItems.css';
import Button from '../UIElements/button/Button';
import { Link } from 'react-router-dom';

const NavigationItems = () => {
    return (
        <div className={classes.items}>
            <NavigationItem name='Cars for sale' />
            <NavigationItem name='Sell Your Car'
                            path='sell_car' />
            <NavigationItem name='Reviews' />
            <NavigationItem name='About Us' />
            <Button menuButton>Sign Up</Button>
            <Button menuButton>Log In</Button>
        </div>
    )
}

export default NavigationItems;