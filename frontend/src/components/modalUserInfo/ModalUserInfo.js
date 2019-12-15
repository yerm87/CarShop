import React, { Component } from 'react';
import classes from './ModalUserInfo.css';
import { Link } from 'react-router-dom';

class ModalUserInfo extends Component {

    render(){
        const arrayOfClasses = [classes.wrapper];
        if(this.props.show){
            arrayOfClasses.push(classes.show);
        }

        return (
            <div className={arrayOfClasses.join(' ')}>
                <p className={classes.email}>Welcome, {this.props.email}</p>
                <Link to="/sell_car">
                    <p className={classes.item}>My Listings</p>
                </Link>
                <Link to="/logout">
                    <p className={classes.item}>Log Out</p>
                </Link>
                <div className={classes.element}></div>
            </div>
        )
    }
}

export default ModalUserInfo;