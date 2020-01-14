import React, { Component } from 'react';
import axios from 'axios';
import classes from './ListingInfo.css';
import { ListingMainImage } from '../../components/heroImage/HeroImage';
import ScrollImageItem from '../../components/scrollImageItem/ScrollImageItem';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';

class ListingInfo extends Component {
    state={
        listingId: '',
        frameLength: 679,
        itemImagesLength: '',
        diff: '',
        marginLeft: 0,
        itemData: {
            images: ['']
        },
        images: [
            {
                path: '',
                active: false
            }
        ],
        mainImage: ''
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

                    this.setState({
                        itemImagesLength: itemImagesLength,
                        diff: diff,
                        images: images,
                        mainImage: mainImage
                    }, () => {
                        console.log(this.state);
                    });
                });
            });
        });
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
                        </div>
                    <div>
                        Column2
                    </div>
                </div>
            </div>
        )
    }
}

export default ListingInfo;