import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
import BuyingAdvicesPage from './containers/buyingAdvicesPage/BuyingAdvicesPage';
import AdvicesItemPage from './containers/advicesItemPage/AdvicesItemPage';
import SearchResults from './containers/searchResults/SearchResults';
import ListingInfo from './containers/listingInfo/ListingInfo';
import Reviews from './containers/reviews/Reviews';
import ReviewItemPage from './containers/reviewItemPage/ReviewItemPage';
import { checkCookies } from './reduxStore/searching/Actions';

class App extends Component {
    
    componentWillMount(){
        this.props.setAuthParamToState();
        this.props.getEmail();
        this.props.checkCookies();
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
                    <Route path="/sell_car/:listing_id" component={ListingInfo} />
                    <Route path="/sell_car" component={SellCarPage} />
                    <Route path="/signup" component={SignUpPage} />
                    <Route path="/create_listing" component={CreateListing} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/update_listing/:listingId" component={UpdateListing} />
                    <Route path="/buying_advices/:advice_id" component={AdvicesItemPage} />
                    <Route path="/buying_advices" component={BuyingAdvicesPage} />
                    <Route path="/search_results/:listing_id" component={ListingInfo} />
                    <Route path="/search_results" component={SearchResults} />
                    <Route path="/reviews/:review_id" component={ReviewItemPage} />
                    <Route path="/reviews" component={Reviews} />
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
        closeModal: () => dispatch(actions.closeModal()),
        checkCookies: () => dispatch(checkCookies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);