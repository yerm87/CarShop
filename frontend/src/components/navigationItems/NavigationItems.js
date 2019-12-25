import React, { Component } from 'react';
import NavigationItem from './item/NavigationItem';
import classes from './NavigationItems.css';
import Button from '../UIElements/button/Button';
import { Link } from 'react-router-dom';
import UserIcon from '../UIElements/userIcon/UserIcon';
import { connect } from 'react-redux';

class NavigationItems extends Component {
    render(){
        return (
            <div className={classes.items}>
                <NavigationItem name='Cars for sale' />
                <NavigationItem name='Sell Your Car'
                                path='/sell_car' />
                <NavigationItem name='Reviews' />
                <NavigationItem name='About Us' />
                {this.props.isLoggedIn ? <UserIcon /> : (
                    <React.Fragment>
                        <Link to='/signup'>
                            <Button menuButton>Sign Up</Button>
                        </Link>
                        <Link to="/login">
                            <Button menuButton>Log In</Button>
                        </Link>
                    </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.authReducer.userIsLoggedIn
    }
}

export default connect(mapStateToProps)(NavigationItems);