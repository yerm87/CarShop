import React, { Component } from 'react';
import HeroImage from '../../components/heroImage/HeroImage';
import classes from './SellCarPage.css'
import { connect } from 'react-redux';
import * as actions from '../../reduxStore/authentication/Actions';
import ListingsIfNotLogin from '../../components/listingsIfNotLogIn/ListingsIfNotLogIn';
import Spinner from '../../components/UIElements/spinner/Spinner';
import Button from '../../components/UIElements/button/Button';
import { Link } from 'react-router-dom';
import ListingItem from '../../components/listingItem/ListingItem';
import axios from 'axios';
import AdvicesLatestItems from '../../components/advicesLatestItems/AdvicesLatestItems';

class SellCarPage extends Component {
    state={
        items: [],
        activeModalsPerItem: [],
        buyingAdvices: []
    }

    componentWillMount() {
        this.props.setAuthParamToState();
        axios.get('/get_buying_advices').then(response => {
            this.setState({
                buyingAdvices: response.data
            })
        });
    }

    componentDidMount() {
        if(this.props.auth){
            axios.get('/items_by_userId').then(response => {
                const items = response.data;
                const activeModalsPerItem = [];

                items.forEach(item => {
                    activeModalsPerItem.push(false);
                });

                this.setState({
                    items: response.data,
                    activeModalsPerItem: activeModalsPerItem
                });
            });
        }
    }

    openModal = (element) => {
        const copyItems = this.state.items;
        const index = copyItems.findIndex(item => item === element);
        const activeModals = this.state.activeModalsPerItem;
        activeModals[index] = true;

        this.setState({
            activeModalsPerItem: activeModals
        })
         
    }

    closeModalHandler = (element) => {
        const copyItems = this.state.items;
        const index = copyItems.findIndex(item => item === element);
        const copyActiveModals = this.state.activeModalsPerItem;
        copyActiveModals[index] = false;

        this.setState({
            activeModalsPerItem: copyActiveModals
        })
    }

    deleteItemHandler = (element, id) => {
        axios.post('/delete_listing', {
            _id: id
        }).then(response => {
            if(response.data === 'deleted'){
                const index = this.state.items.findIndex(item => item === element);
                const copyActiveModals = this.state.activeModalsPerItem
                copyActiveModals[index] = false;

                axios.get('/items_by_userId').then(response => {
                    this.setState({
                        items: response.data,
                        activeModalsPerItem: copyActiveModals
                    });
                });
            }
        })
    }
    
    render() {
        const activeValues = this.state.activeModalsPerItem;
        const listings = this.state.items.map((current, index) => {
            return <ListingItem item={current}
                                admin
                                deleteItem={() => this.openModal(current)}
                                active={activeValues[index]}
                                closeModal={() => this.closeModalHandler(current)}
                                deleteElement={() => this.deleteItemHandler(current, current._id)} />
        })
/*
        let component = (
            <div className={classes.wrapperSellPage}>
                <HeroImage img="../../assets/sell_your_car.jpg" loggedIn>
                    <div className={classes.wrapper}>
                        <h1>Sell Your Car</h1>
                        <Link to="/create_listing">
                            <Button createListingButton>Create Listing</Button>
                        </Link>
                    </div>
                </HeroImage>
                <div className={classes.listings}>
                    <h1>My Listings</h1>
                    {listings}
                </div>
                <AdvicesLatestItems />
            </div>
        )*/

        let component = (
            <React.Fragment>
                {this.props.auth === false ? (
                    <HeroImage img="../../assets/sell_your_car.jpg" sellPage>
                        <ListingsIfNotLogin />
                    </HeroImage>
                ) : this.props.auth === true ? (
                    <div className={classes.wrapperSellPage}>
                        <HeroImage img="../../assets/sell_your_car.jpg" loggedIn>
                            <div className={classes.wrapper}>
                                <h1>Sell Your Car</h1>
                                <Link to="/create_listing">
                                    <Button createListingButton>Create Listing</Button>
                                </Link>
                            </div>
                        </HeroImage>
                        <div className={classes.listings}>
                            <h1>My Listings</h1>
                            {this.state.items.length > 0 ? listings : (
                                <div className={classes.ifNoListings}>
                                    <p>You don't have listings yet</p>
                                </div>
                            )}
                        </div>
                    </div>
                ) : null}
                <AdvicesLatestItems elements={this.state.buyingAdvices} />
            </React.Fragment>
        )

        if(this.props.loading){
            component = (
                <div className={classes.spinner}>
                    <Spinner />
                </div>
            )
        }

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