import React, { Component } from 'react';
import axios from 'axios';
import classes from './ListingInfo.css';
import { ListingMainImage } from '../../components/heroImage/HeroImage';
import ScrollImageItem from '../../components/scrollImageItem/ScrollImageItem';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import LoanCalculator from '../../components/loanCalculator/LoanCalculator';

class ListingInfo extends Component {
    state={
        listingId: '',
        frameLength: 679,
        itemImagesLength: '',
        diff: '',
        marginLeft: 0,
        itemData: {
            year: '', make: '', model: '', bodyStyle: '', transmission: '', exteriorColor: '',
            interiorColor: '', numberOfDoors: '', fuelType: '', condition: '', cityMPG: '',
            highwayMPG: '', engine: '', price: '', mileage: '', description: '', firstName: '',
            lastName: '', email: '', phoneNumber: '', city: '', zip: '', images: ['']
        },
        images: [
            {
                path: '',
                active: false
            }
        ],
        mainImage: '',
        terms: [
            { value: 36, active: true },
            { value: 48, active: false },
            { value: 60, active: false },
            { value: 72, active: false }
        ],
        term: 36,
        downpayment: 0,
        interestRate: 4.5,
        vehiclePrice: 0,
        monthlyPayment: 0
    }

    componentDidMount(){
        const listingId = this.props.match.params.listing_id;

        this.setState({
            listingId: listingId 
        }, () => {
            axios.post('/get_listing', {
                listingId: this.state.listingId
            }).then(response => {
                this.setState({
                    itemData: response.data
                }, () => {
                    const itemImagesLength = this.state.itemData.images.length * 97;
                    const diff = itemImagesLength - this.state.frameLength;

                    let images = this.state.itemData.images.map((element, index) => {
                        let image;
                        if(index === 0){
                            image = {
                                path: element,
                                active: true
                            }
                        } else {
                            image = {
                                path: element,
                                active: false
                            }
                        }
                        return image;
                    });

                    let mainImage;

                    if(response.data.images.length === 0){
                        images = [];
                        mainImage = '../../assets/no_photo.jpg';
                    } else {
                        mainImage = images[0].path;
                    }

                    const vehiclePrice = parseInt(this.state.itemData.price);

                    this.setState({
                        itemImagesLength: itemImagesLength,
                        diff: diff,
                        images: images,
                        mainImage: mainImage,
                        vehiclePrice: vehiclePrice
                    }, () => {
                        const monthlyPayment = this.calculate();

                        this.setState({
                            monthlyPayment: monthlyPayment
                        })
                    });
                });
            });
        });
    }

    calculate = () => {

        const interestRatePerMonth = this.state.interestRate/100/12;

        const incrementedValue = interestRatePerMonth + 1;

        const firstValue = interestRatePerMonth*Math.pow(incrementedValue, this.state.term);
        const secondValue = Math.pow(incrementedValue, this.state.term) - 1;

        const totalValue = firstValue/secondValue;

        const vehiclePriceMinusDownpayment = this.state.vehiclePrice - this.state.downpayment;
        let monthlyPayment = vehiclePriceMinusDownpayment*totalValue;

        monthlyPayment = Math.round(monthlyPayment);

        return monthlyPayment;
    }

    moveLeft = (event) => {
        if(this.state.diff === 0){
            return;
        }
        const root = event.target.closest('.ListingInfo__frame__UnFQ9');
        const imageContainer = root.querySelector('.ListingInfo__imagesContainer__gL0Nf');
        
        this.setState(prevState => {
            return {
                marginLeft: prevState.marginLeft - 48.5,
                diff: prevState.diff - 48.5
            }
        }, () => {
            imageContainer.style.marginLeft = this.state.marginLeft + 'px';
        })
    }

    moveRight = (event) => {
        if(this.state.marginLeft === 0){
            return;
        }
        const root = event.target.closest('.ListingInfo__frame__UnFQ9');
        const imageContainer = root.querySelector('.ListingInfo__imagesContainer__gL0Nf');
        
        this.setState(prevState => {
            return {
                marginLeft: prevState.marginLeft + 48.5,
                diff: prevState.diff + 48.5
            }
        }, () => {
            imageContainer.style.marginLeft = this.state.marginLeft + 'px';
        })
    }

    scrollImageItemOnClick = element => {
        const images = this.state.images;
        images.forEach(current => {
            current.active = false;
        });

        const index = images.findIndex(current => current === element);
        images[index].active = true;

        const mainImage = images[index].path;

        this.setState({
            images: images,
            mainImage: mainImage
        })
    }

    nextImage = () => {
        const images = this.state.images;

        if(images.length !== 0){
            const index = images.findIndex(element => element.active === true);
            const nextImageIndex = index + 1;

            if(nextImageIndex === images.length){
                return;
            }

            const nextImage = images[nextImageIndex];
            
            images.forEach((current, index) => {
                if(index === nextImageIndex){
                    current.active = true;
                } else {
                    current.active = false;
                }
            });

            this.setState({
                mainImage: nextImage.path
            });
        }
    }

    prevImage = () => {
        const images = this.state.images;

        if(images.length !== 0){
            const index = images.findIndex(element => element.active === true);
            const prevImageIndex = index - 1;

            const prevImage = images[prevImageIndex];
            
            images.forEach((current, index) => {
                if(index === prevImageIndex){
                    current.active = true;
                } else {
                    current.active = false;
                }
            });

            this.setState({
                mainImage: prevImage.path
            });
        }
    }

    termChangeHandler = element => {
        const terms = this.state.terms;

        terms.forEach(term => {
            term.active = false;
        });

        const index = terms.findIndex(term => term === element);
        terms[index].active = true;

        const term = terms[index].value;

        this.setState({
            terms: terms,
            term: term
        });
    }

    changeValueHandler = event => {
        let value = event.target.value;

        if(event.target.name !== 'interestRate'){
            event.target.value = `$${event.target.value}`;
            value = event.target.value.slice(1);
        }

        this.setState({
            [event.target.name]: value
        }, () => {
            console.log(this.state);
        });
    }

    calculateValueHandler = () => {
        const monthlyPayment = this.calculate();

        this.setState({
            monthlyPayment: monthlyPayment
        })
    }

    render(){
        let path;

        if(this.state.images.length === 0){
            path = this.state.mainImage;
        } else {
            path = `data:jpeg;base64,${this.state.mainImage}`;
        }

        const images = this.state.images.map(element => {
            const path = `data:jpeg;base64,${element.path}`;
            return <ScrollImageItem img={path}
                                    active={element.active}
                                    switchImage={() => this.scrollImageItemOnClick(element)} />
        });

        const {year, make, model, transmission, exteriorColor, interiorColor, fuelType, 
            condition, cityMPG, highwayMPG, engine, price, mileage, description, firstName,
            lastName, email, phoneNumber, city, zip} = this.state.itemData;

        let modifiedPrice;
        let modifiedMileage;

        if(price.length > 3){
            const firstDigit = price.slice(0, price.length-3);
            const secondDigit = price.slice(price.length-3);
            modifiedPrice = `${firstDigit},${secondDigit}`; 
        } else {
            modifiedPrice = price;
        }

        if(mileage.length > 3){
            const firstDigit = mileage.slice(0, mileage.length-3);
            const secondDigit = mileage.slice(mileage.length-3);
            modifiedMileage = `${firstDigit},${secondDigit}`; 
        } else {
            modifiedMileage = mileage;
        }

        return (
            <div className={classes.mainContainer}>
                <div className={classes.container}>
                    <div className={classes.containerContent} >
                        <ListingMainImage img={path} />
                        <div className={classes.scrollImages}>
                            <div className={classes.frame}>
                                <div className={classes.imagesContainer}>
                                    {images}          
                                </div>
                                {this.state.diff > 0 ? (
                                    <IconContext.Provider value={{color: '#A59F9F', size: '20px'}}>
                                        <div className={classes.arrowLeft}
                                             onClick={(event) => this.moveLeft(event)}>
                                            <FaArrowLeft />
                                        </div>
                                    </IconContext.Provider>
                                    ) : null}
                                {this.state.marginLeft !== 0 ? (
                                    <IconContext.Provider value={{color: '#A59F9F', size: '20px'}}>
                                        <div className={classes.arrowRight}
                                             onClick={(event) => this.moveRight(event)}>
                                            <FaArrowRight />
                                        </div>
                                    </IconContext.Provider>
                                ) : null}
                            </div>
                        </div>
                            {this.state.images.length !== 0 && 
                            this.state.images[0].active !== true ? (
                                <IconContext.Provider value={{color: '#A59F9F', size: '40px'}}>
                                    <div className={classes.arrowLeftMainImage}
                                         onClick={() => this.prevImage()}>
                                        <FaArrowLeft />
                                    </div>
                                </IconContext.Provider>
                            ) : null}
                            {this.state.images.length !== 0 && 
                            this.state.images[this.state.images.length-1].active !== true ? (
                                <IconContext.Provider value={{color: '#A59F9F', size: '40px'}}>
                                    <div className={classes.arrowRightMainImage}
                                         onClick={() => this.nextImage()}>
                                        <FaArrowRight />
                                    </div>
                                </IconContext.Provider>
                            ) : null}
                        <div className={classes.title}>
                            <p className={classes.condition}>{condition}</p>
                            <p className={classes.makeAndModel}>{`${year} ${make} ${model}`}</p>
                            <p style={{marginBottom: '10px'}}>{modifiedMileage} miles</p>
                        </div>
                        <div className={classes.itemInfo}>
                            <h2>${modifiedPrice}</h2>
                            <div className={classes.contacts}>
                                <p>Sold by {`${firstName} ${lastName}`}</p>
                                <p>Phone: {phoneNumber}</p>
                                <p style={{ color: 'var(--mainBlue)' }}>{`${city} ${zip}`}</p>
                                <p>email: {email}</p>
                            </div>
                            {description ? <h2 style={{ marginTop: '25px'}}>Description</h2> : null}
                            <p>{description ? description : null}</p>
                        </div>
                        <div className={classes.basics}>
                            <h2>Basics</h2>
                            <div className={classes.basicsContainer}>
                                <p><span>Fuel Type:</span>{fuelType}</p>
                                <p><span>Exterior Color:</span>{exteriorColor}</p>
                                <p><span>City MPG:</span>{cityMPG}</p>
                                <p><span>Interior Color:</span>{interiorColor}</p>
                                <p><span>Highway MPG:</span>{highwayMPG}</p>
                                <p><span>Transmission:</span>{transmission}</p>
                                <p><span>Engine:</span>{engine}</p>
                                <p><span>Mileage:</span>{modifiedMileage}</p>
                            </div>
                        </div>
                        <LoanCalculator terms={this.state.terms}
                                        monthlyPayment={this.state.monthlyPayment}
                                        term={this.state.term}
                                        downpayment={this.state.downpayment}
                                        price={this.state.vehiclePrice}
                                        interestRate={this.state.interestRate}
                                        termChange={this.termChangeHandler}
                                        changeValue={(event) => this.changeValueHandler(event)}
                                        calculateValue={() => this.calculateValueHandler()} />
                    </div>        
                    <div>
                        Column2
                    </div>
                </div>
            </div>
        )

    /*    return (
            <div className={classes.mainContainer}>
                <div className={classes.container}>
                    <div className={classes.containerContent} >
                        <ListingMainImage img="../../assets/1.jpg" />
                        <div className={classes.scrollImages}>
                            <div className={classes.frame}>
                                <div className={classes.imagesContainer}>
                                    <ScrollImageItem img="../../assets/1.jpg" />
                                    <ScrollImageItem img="../../assets/2.jpg" />
                                    <ScrollImageItem img="../../assets/3.jpg" />
                                    <ScrollImageItem img="../../assets/4.jpg" /> 
                                    <ScrollImageItem img="../../assets/5.jpg" />
                                    <ScrollImageItem img="../../assets/6.jpg" />   
                                </div>    
                            </div>
                        </div>
                        <div className={classes.title}>
                            <p className={classes.condition}>Used</p>
                            <p className={classes.makeAndModel}>2014 Ford Focus</p>
                            <p>81,215 miles</p>
                        </div>
                        <div className={classes.itemInfo}>
                            <h2>$6,891</h2>
                            <p style={{ fontWeight: 'bold' }}>Sold by Roman Ermeev</p>
                            <p style={{ color: 'var(--mainBlue)',
                                        fontWeight: 'bold' }}>Miami Beach, Florida 33139</p>
                            <h2 style={{ marginTop: '25px'}}>Description</h2>
                            <p>This 2014 Volkswagen CC 4dr Sport features a 2.0L 4 CYLINDER 4cyl Gasoline engine. It is equipped with a 4 Speed Automatic transmission. The vehicle is Island Gray Metallic with a Black interior. It is offered As-Is, extended warranty is available.</p>
                        </div>
                        <div className={classes.basics}>
                            <h2>Basics</h2>
                            <div className={classes.basicsContainer}>
                                <p><span>Fuel Type:</span>Gasoline</p>
                                <p><span>Exterior Color:</span>Island Gray Metallic</p>
                                <p><span>City MPG:</span>21</p>
                                <p><span>Interior Color:</span>Black</p>
                                <p><span>Highway MPG:</span>32</p>
                                <p><span>Transmission:</span>6-Speed Automatic with Auto-Shift</p>
                                <p><span>Engine:</span>2.0</p>
                                <p><span>Mileage:</span>81,215</p>
                            </div>
                        </div>
                        <LoanCalculator />        
                    </div>
                    <div>
                        Column2
                    </div>
                </div>
            </div>
        )*/
    }
}

export default ListingInfo;