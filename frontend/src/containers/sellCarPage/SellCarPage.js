import React, { Component } from 'react';
import HeroImage from '../../components/heroImage/HeroImage';
import classes from './SellCarPage.css'
import { connect } from 'react-redux';
import * as actions from '../../reduxStore/authentication/Actions';
import ListingsIfNotLogin from '../../components/listingsIfNotLogIn/ListingsIfNotLogIn';
import Spinner from '../../components/UIElements/spinner/Spinner';
import Button from '../../components/UIElements/button/Button';

class SellCarPage extends Component {

    componentWillMount() {
        this.props.setAuthParamToState();
    }

    navigateToCreateListingPage(){
        this.props.history.push('/create_listing');
    }
    
    render() {
/*
        let component = (
            <React.Fragment>
                {this.props.auth === false ? (
                    <HeroImage img="../../assets/sell_your_car.jpg" sellPage>
                        <ListingsIfNotLogin />
                    </HeroImage>
                ) : this.props.auth === true ? (
                    <HeroImage img="../../assets/sell_your_car.jpg" loggedIn>
                        <div className={classes.wrapper}>
                            <h1>Sell Your Car</h1>
                            <Button createListingButton
                                    onClick={() => this.navigateToCreateListingPage()}>Create Listing</Button>
                        </div>
                    </HeroImage>
                ) : null}
            </React.Fragment>
        )

        if(this.props.loading){
            component = (
                <div className={classes.spinner}>
                    <Spinner />
                </div>
            )
        }*/

        let component = (
            <HeroImage img="../../assets/sell_your_car.jpg" loggedIn>
                <div className={classes.wrapper}>
                    <h1>Sell Your Car</h1>
                    <Button createListingButton
                            onClickHandler={() => this.navigateToCreateListingPage()}>Create Listing</Button>
                </div>
            </HeroImage>
        )
        
        return (
            <div>
                {component}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.authReducer.userIsLoggedIn,
        loading: state.authReducer.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setAuthParamToState: () => dispatch(actions.checkAuth())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SellCarPage);