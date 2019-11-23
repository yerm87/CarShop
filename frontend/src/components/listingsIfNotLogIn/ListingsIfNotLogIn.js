import React from 'react';
import Button from '../UIElements/button/Button';
import classes from './ListingsIfNotLogin.css';

const ListingsIfNotLogIn = () => {
    return (
        <div className={classes.listings}>
            <h1>My Listings</h1>
            <p>You are not currently logged in. Log in to view and edit your listings</p>
            <Button loginInListings>Log in</Button>
        </div>
    )
}

export default ListingsIfNotLogIn;