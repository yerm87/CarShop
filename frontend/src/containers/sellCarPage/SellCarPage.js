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
        activeItems: [],
        pages: 1,
        page: 1,
        resultsPerPage: 5,
        pagesArray: [],
        activePages: [],
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
        setTimeout(() => {
            if(this.props.auth){
                axios.get('/items_by_userId').then(response => {
    
                    this.setState({
                        items: response.data
                    }, () => {
                        const listingsIds = this.state.items.map(element => element._id);
    
                        //pagination
                        const pages = Math.ceil(this.state.items.length/this.state.resultsPerPage);
    
                        const activeItems = this.state.items.slice(0, this.state.resultsPerPage);
                        const pagesArray = [];
                    
                        for(let i=1; i<=pages; i++){
                            pagesArray.push(i);
                        }
    
                        const activePages = [];
    
                        activePages[0] = true;
                        for(let i=1; i<pagesArray.length; i++){
                            activePages.push(false);
                        }
    
                        //activeModals
                        const activeModalsPerItem = [];
    
                        activeItems.forEach(() => {
                            activeModalsPerItem.push(false);
                        });
    
                        /////////
                        axios.post(`/new_messages_count`, {
                            listingsIds: listingsIds
                        }).then(response => {
                            this.setState({
                                unreadMessagesCount: response.data,
                                activeItems: activeItems,
                                pages: pages,
                                pagesArray: pagesArray,
                                activePages: activePages,
                                activeModalsPerItem: activeModalsPerItem
                            });
                        });
                    });
                });
            }
        }, 1000)
    }

    openModal = (element) => {
        const copyItems = this.state.activeItems;
        const index = copyItems.findIndex(item => item === element);
        const activeModals = this.state.activeModalsPerItem;
        activeModals[index] = true;

        this.setState({
            activeModalsPerItem: activeModals
        })
         
    }

    closeModalHandler = (element) => {
        const copyItems = this.state.activeItems;
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

                axios.get('/items_by_userId').then(response => {
                    
                    this.setState({
                        items: response.data
                    }, () => {
                        setTimeout(() => {
                            const listingsIds = this.state.items.map(element => element._id);

                            //pagination
                            const pages = Math.ceil(this.state.items.length/this.state.resultsPerPage);

                            let endPoint = this.state.page*this.state.resultsPerPage;
                            let startPoint = endPoint-this.state.resultsPerPage;
                            let activeItems = this.state.items.slice(startPoint, endPoint);

                            const pagesArray = [];
                
                            for(let i=1; i<=pages; i++){
                                pagesArray.push(i);
                            }

                            let page = this.state.page;
                            let activePages = [];

                            if(pages < page){
                                page--;

                                for(let i=0; i<pages; i++){
                                    activePages.push(false);
                                    activePages[pagesArray.length-1] = true;
                                }

                                endPoint = page*this.state.resultsPerPage;
                                startPoint = endPoint-this.state.resultsPerPage;
                                activeItems = this.state.items.slice(startPoint, endPoint);
                            } else {
                                for(let i=0; i<pages; i++){
                                    activePages.push(false);
                                }
    
                                activePages[page-1] = true;
                            }

                            const activeModalsPerItem = [];

                            activeItems.forEach(() => {
                                activeModalsPerItem.push(false);
                            });


                            setTimeout(() => {
                                axios.post(`/new_messages_count`, {
                                    listingsIds: listingsIds
                                }).then(response => {
                                    this.setState({
                                        unreadMessagesCount: response.data,
                                        activeItems: activeItems,
                                        pages: pages,
                                        pagesArray: pagesArray,
                                        activePages: activePages,
                                        activeModalsPerItem: activeModalsPerItem,
                                        page: page
                                    });
                                });
                            }, 300);
                        }, 300);
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

    switchPageHandler = (page) => {
        const pages = this.state.pagesArray;
        let activePages = this.state.activePages;

        const index = pages.findIndex(element => element === page);
        activePages.fill(false, 0, pages.length);
        activePages[index] = true;

        this.setState({
            activePages: activePages,
            page: page
        }, () => {
            setTimeout(() => {
                const endPoint = this.state.page*this.state.resultsPerPage;
                const startPoint = endPoint-this.state.resultsPerPage;
                const activeItems = this.state.items.slice(startPoint, endPoint);

                const activeModalsArray = [];

                activeItems.forEach(() => {
                    activeModalsArray.push(false);
                })
            
                this.setState({
                    activeItems: activeItems,
                    activeModalsPerItem: activeModalsArray
                });
            }, 300);
        });
    }
    
    render() {
        const activePages = this.state.activePages;
        const pages = this.state.pagesArray.map((page, index) => {
            const classList = [classes.page];
            if(activePages[index]){
                classList.push(classes.activeElement);
            }
            return (
                <p className={classList.join(' ')}
                   onClick={() => this.switchPageHandler(page)}>{page}</p>
            )
        });

        const activeValues = this.state.activeModalsPerItem;
        const listings = this.state.activeItems.map((current, index) => {
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
                {renderListings}
                <div className={classes.pages}>
                    {this.state.pages > 1 ? pages : null}
                </div>
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