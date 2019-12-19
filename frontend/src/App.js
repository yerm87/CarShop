import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Toolbar from './containers/toolbar/Toolbar';
import NavigationItems from './components/navigationItems/NavigationItems';
import Logo from './components/UIElements/logo/Logo';
import MainPage from './containers/main_page/Main_page';
import SellCarPage from './containers/sellCarPage/SellCarPage';
import SignUpPage from './containers/signUpPage/Signup_page';
import CreateListing from './containers/create_listing/CreateListing';
import LoginPage from './containers/login_page/LoginPage';
import { connect } from 'react-redux';
import * as actions from './reduxStore/authentication/Actions';
import ModalUserInfo from './components/modalUserInfo/ModalUserInfo';
import classes from './App.css';
import Logout from './containers/logout_page/Logout';
import UpdateListing from "./containers/update_listing/UpdateListing";

class App extends Component {
    
    componentWillMount(){
        this.props.setAuthParamToState();
        this.props.getEmail();
    }

    showModalHandler = (event) => {
        if(event.target !== document.querySelector('.ModalUserInfo__email__2LUb4') &&
        event.target !== document.querySelector('.ModalUserInfo__wrapper__WbLuR') && 
        event.target !== document.querySelector('path') && 
        event.target !== document.querySelector('.UserIcon__item__2olcV')){
            this.props.closeModal();
        }
        
    }

    render(){
        return (
            <div className={classes.mainWrapper}
                 onClick={(event) => this.showModalHandler(event)}>
                <Toolbar>
                    <Logo />
                    <NavigationItems />
                </Toolbar>
                <ModalUserInfo show={this.props.showModal}
                               email={this.props.email} />
                <Switch>
                    <Route path="/sell_car" component={SellCarPage} />
                    <Route path="/signup" component={SignUpPage} />
                    <Route path="/create_listing" component={CreateListing} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/update_listing/:listingId" component={UpdateListing} />
                    <Route path="/" component={MainPage} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        showModal: state.authReducer.showModal,
        email: state.authReducer.email
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setAuthParamToState: () => dispatch(actions.checkAuth()),
        getEmail: () => dispatch(actions.getEmail()),
        closeModal: () => dispatch(actions.closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);