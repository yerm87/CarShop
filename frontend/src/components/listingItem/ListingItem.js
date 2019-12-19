import React, { Component } from 'react';
import classes from './ListingItem.css';
import {ImageListing} from '../heroImage/HeroImage';
import Button from '../UIElements/button/Button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Image from '../../assets/no_photo.jpg';
import { Link } from 'react-router-dom';

class ListingItem extends Component {
    state={
        elementCounter: 1,
        counterMargin: 0
    }
    render(){

        const {_id, condition, price, mileage, year, make, model, exteriorColor, transmission,
        interiorColor, fuelType, images} = this.props.item;

        let modifiedPrice;
        let modifiedMileage;

        if(price.length > 3){
            const firstNumber = price.substring(0, price.length -3);
            const secondNumber = price.substring(price.length-3, price.length);
            modifiedPrice = `${firstNumber},${secondNumber}`;
        } else {
            modifiedPrice = price;
        }

        if(mileage.length > 3){
            const firstNumber = mileage.substring(0, mileage.length -3);
            const secondNumber = mileage.substring(mileage.length-3, mileage.length);
            modifiedMileage = `${firstNumber},${secondNumber}`;
        } else {
            modifiedMileage = mileage;
        }

        const listingImages = images.map(current => <ImageListing img={current} />);
        return (
            <div className={classes.imageWrapper}>
                {this.state.elementCounter !== images.length ? (
                <IconContext.Provider value={{color: 'white', size: '30px'}}>
                    <div className={classes.arrowLeft}
                         onClick={(event) => {
                            const wrapper = event.target.closest('.ListingItem__imageWrapper__1NQji')
                            .querySelector('.ListingItem__wrapper__UgLa3');
                            this.setState(prevState => {
                                return {
                                    counterMargin: prevState.counterMargin - 300
                                }
                            }, () => {
                                wrapper.style.marginLeft = this.state.counterMargin + 'px';
                                this.setState((prevState) => {
                                    return {
                                        elementCounter: prevState.elementCounter + 1
                                    }
                                });
                            })
                        }}>
                        <FaArrowLeft />
                    </div>
                </IconContext.Provider>
                ) : null}
                {this.state.elementCounter > 1 ? (
                <IconContext.Provider value={{color: 'white', size: '30px'}}>
                    <div className={classes.arrowRight}
                         onClick={(event) => {
                            const wrapper = event.target.closest('.ListingItem__imageWrapper__1NQji')
                            .querySelector('.ListingItem__wrapper__UgLa3');
                            this.setState((prevState) => {
                                return {
                                    counterMargin: prevState.counterMargin + 300
                                }
                            }, () => {
                                wrapper.style.marginLeft = this.state.counterMargin + 'px';
                                this.setState((prevState) => {
                                    return {
                                        elementCounter: prevState.elementCounter - 1
                                    }
                                });
                            });
                         }}>
                        <FaArrowRight />
                    </div>
                </IconContext.Provider>
                ) : null}
                <div className={classes.content}>
                    <p>{condition}</p>
                    <div className={classes.priceAndMileage}>
                        <p className={classes.price}>${modifiedPrice}</p>
                        <p className={classes.mileage}>| <span>{modifiedMileage}mi</span></p>
                    </div>
                    <div className={classes.yearAndModel}>
                        <p>{`${year} ${make} ${model}`}</p>
                    </div>
                    <div className={classes.params}>
                        <p>{`Ext.Color: ${exteriorColor}`}</p>
                        <p>{`Transmission: ${transmission}`}</p>
                        <p>{`Int.Color: ${interiorColor}`}</p>
                        <p>{`Fuel Type: ${fuelType}`}</p>
                    </div>
                    {this.props.admin ? (
                        <Link to={`/update_listing/${_id}`}>
                            <Button updateListingButton>Update Listing</Button>
                        </Link>
                    ) : null}
                </div>
                <div className={classes.wrapper}>
                    {listingImages.length > 0 ? listingImages : 
                    <img src={Image} height="240" width="300" />}
                </div>
            </div>
        )

        /*return (
            <div className={classes.imageWrapper}>
                <IconContext.Provider value={{color: 'white', size: '30px'}}>
                    <div className={classes.arrowLeft}
                         onClick={(event) => {
                            const wrapper = event.target.closest('.ListingItem__imageWrapper__1NQji')
                            .querySelector('.ListingItem__wrapper__UgLa3');
                            this.setState(prevState => {
                                return {
                                    counterMargin: prevState.counterMargin - 300
                                }
                            }, () => {
                                wrapper.style.marginLeft = this.state.counterMargin + 'px';
                                this.setState((prevState) => {
                                    return {
                                        elementCounter: prevState.elementCounter + 1
                                    }
                                });
                            })
                        }}>
                        <FaArrowLeft />
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{color: 'white', size: '30px'}}>
                    <div className={classes.arrowRight}
                         onClick={(event) => {
                            const wrapper = event.target.closest('.ListingItem__imageWrapper__1NQji')
                            .querySelector('.ListingItem__wrapper__UgLa3');
                            this.setState((prevState) => {
                                return {
                                    counterMargin: prevState.counterMargin + 300
                                }
                            }, () => {
                                wrapper.style.marginLeft = this.state.counterMargin + 'px';
                                this.setState((prevState) => {
                                    return {
                                        elementCounter: prevState.elementCounter - 1
                                    }
                                });
                            });
                         }}>
                        <FaArrowRight />
                    </div>
                </IconContext.Provider>
                <div className={classes.content}>
                    <p>Used</p>
                    <div className={classes.priceAndMileage}>
                        <p className={classes.price}>$9999</p>
                        <p className={classes.mileage}>| <span>30123mi</span></p>
                    </div>
                    <div className={classes.yearAndModel}>
                        <p>{`2014 Chevrolet Camaro`}</p>
                    </div>
                    <div className={classes.params}>
                        <p>{`Ext.Color:`}</p>
                        <p>{`Transmission:`}</p>
                        <p>{`Int.Color:`}</p>
                        <p>{`Fuel Type:`}</p>
                    </div>
                    {this.props.admin ? (
                        <Link to="/update_listing/777">
                            <Button updateListingButton>Update Listing</Button>
                        </Link>
                    ) : null}
                </div>
                <div className={classes.wrapper}>
                    
                </div>
            </div>
        )*/
    }
}

export default ListingItem;