import React, { Component, lazy, Suspense } from "react";
import { Switch, Route} from "react-router-dom";
import Toolbar from './containers/toolbar/Toolbar';
import NavigationItems from './components/navigationItems/NavigationItems';
import Logo from './components/UIElements/logo/Logo';
import { connect } from 'react-redux';
import * as actions from './reduxStore/authentication/Actions';
import ModalUserInfo from './components/modalUserInfo/ModalUserInfo';
import classes from './App.css';
import { checkCookies } from './reduxStore/searching/Actions';
import Footer from './containers/footer/Footer';

const SellCarPage = lazy(() => import('./containers/sellCarPage/SellCarPage'));
const SignUpPage = lazy(() => import('./containers/signUpPage/Signup_page'));
const CreateListing = lazy(() => import('./containers/create_listing/CreateListing'));
const UpdateListing = lazy(() => import('./containers/update_listing/UpdateListing'));
const LoginPage = lazy(() => import('./containers/login_page/LoginPage'));
const Logout = lazy(() => import('./containers/logout_page/Logout'));
const BuyingAdvicesPage = lazy(() => import('./containers/buyingAdvicesPage/BuyingAdvicesPage'));
const AdvicesItemPage = lazy(() => import('./containers/advicesItemPage/AdvicesItemPage'));
const SearchResults = lazy(() => import('./containers/searchResults/SearchResults'));
const ListingInfo = lazy(() => import('./containers/listingInfo/ListingInfo'));
const Reviews = lazy(() => import('./containers/reviews/Reviews'));
const ReviewItemPage = lazy(() => import('./containers/reviewItemPage/ReviewItemPage'));
const AboutUsPage = lazy(() => import('./containers/aboutUsPage/AboutUsPage'));
const MainPage = lazy(() => import('./containers/main_page/Main_page'))

const loadComponent = Component => (
    <Suspense fallback={<div style={{ minHeight: '530px' }}></div>}>
        <Component />
    </Suspense>
)

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
                    <Route path="/sell_car/:listing_id" component={() => loadComponent(ListingInfo)} />
                    <Route path="/sell_car" component={() => loadComponent(SellCarPage)} />
                    <Route path="/signup" component={() => loadComponent(SignUpPage)} />
                    <Route path="/create_listing" component={() => loadComponent(CreateListing)} />
                    <Route path="/login" component={() => loadComponent(LoginPage)} />
                    <Route path="/logout" component={() => loadComponent(Logout)} />
                    <Route path="/update_listing/:listingId" component={() => loadComponent(UpdateListing)} />
                    <Route path="/buying_advices/:advice_id" component={() => loadComponent(AdvicesItemPage)} />
                    <Route path="/buying_advices" component={() => loadComponent(BuyingAdvicesPage)} />
                    <Route path="/search_results/:listing_id" component={() => loadComponent(ListingInfo)} />
                    <Route path="/search_results" component={() => loadComponent(SearchResults)} />
                    <Route path="/reviews/:review_id" component={() => loadComponent(ReviewItemPage)} />
                    <Route path="/reviews" component={() => loadComponent(Reviews)} />
                    <Route path="/about_us" component={() => loadComponent(AboutUsPage)} />
                    <Route path="/" component={() => loadComponent(MainPage)} />
                </Switch>
                <Footer />
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