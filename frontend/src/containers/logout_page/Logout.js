import React, { Component } from 'react';
import * as actions from '../../reduxStore/authentication/Actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Logout extends Component {

    componentWillMount(){
        this.props.logout();
    }

    render(){
        let component = null;

        if(this.props.userIsLoggedIn === false){
            component = <Redirect to="/" />
        }
        return component;
    }
}

const mapStateToProps = (state) => {
    return {
        userIsLoggedIn: state.authReducer.userIsLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);