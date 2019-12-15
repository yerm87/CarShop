import React from 'react';
import Button from '../UIElements/button/Button';
import classes from './ListingsIfNotLogin.css';
import { Link } from 'react-router-dom';

const ListingsIfNotLogIn = () => {
    return (
        <div className={classes.listings}>
            <h1>My Listings</h1>
            <p>You are not currently logged in. Log in to view and edit your listings</p>
            <Link to="/login">
                <Button loginInListings>Log in</Button>
            </Link>
        </div>
    )
}

export default ListingsIfNotLogIn;