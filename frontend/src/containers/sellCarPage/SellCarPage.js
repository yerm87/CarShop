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
import MessagesWindow from '../../components/messagesWindow/MessagesWindow';

class SellCarPage extends Component {
    state={
        items: [],
        activeModalsPerItem: [],
        buyingAdvices: [],
        listingButtonActive: true,
        unreadMessagesCount: 0
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
                }, () => {
                    const listingsIds = this.state.items.map(element => element._id);

                    axios.post(`/new_messages_count`, {
                        listingsIds: listingsIds
                    }).then(response => {
                        this.setState({
                            unreadMessagesCount: response.data
                        })
                    })
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

    listings = () => {
        this.setState({
            listingButtonActive: true
        });
    }

    messages = () => {
        this.setState({
            listingButtonActive: false
        });
    }

    decrementUnreadMessages = () => {
        let count = this.state.unreadMessagesCount;
        count--;
        this.setState({
            unreadMessagesCount: count
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

        const renderListings = this.state.items.length > 0 ? listings : (
            <div className={classes.ifNoListings}>
                <p>You don't have listings yet</p>
            </div>
        )

        const listingButtonClasses = [classes.switchButton];
        const messagesButtonClasses = [classes.switchButton];

        if(this.state.listingButtonActive){
            listingButtonClasses.push(classes.active);
        } else {
            messagesButtonClasses.push(classes.active);
        }

        const count = this.state.unreadMessagesCount > 0 ? this.state.unreadMessagesCount : '';

        let content = this.state.listingButtonActive ? (
            <React.Fragment>
                <p>{renderListings}</p>
            </React.Fragment>
        ) : <MessagesWindow listingItems={this.state.items}
                            decrement={() => this.decrementUnreadMessages()} />

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
                            <div className={classes.buttons}>
                                <a className={listingButtonClasses.join(' ')}
                                   onClick={() => this.listings()}>Listings</a>
                                <a className={messagesButtonClasses.join(' ')}
                                   onClick={() => this.messages()}>Messages<span>
                                       {count}</span></a>
                            </div>
                            <div className={classes.dynamicContent}>
                                {content}
                            </div>
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