import React from 'react';
import { ImageRecommendedItem } from '../../heroImage/HeroImage';
import classes from './RecommendedItem.css';
import { withRouter } from 'react-router-dom';

const RecommendedItem = props => {

    const {_id, year, make, model, images, price} = props.item;
    let image;

    if(images.length === 0){
        image = 'no image';
    } else {
        image = images[0];
    }

    const getInfo = id => {
        props.history.push(`/search_results/${id}`)
    }

    let modifiedPrice;
    if(price.length > 3){
        const firstDigit = price.slice(0, price.length-3);
        const secondDigit = price.slice(price.length-3, price.length);
        
        modifiedPrice = `${firstDigit},${secondDigit}`;
    } else {
        modifiedPrice = price;
    }

    return (
        <div className={classes.wrapper}
             onClick={() => getInfo(_id)}>
            <ImageRecommendedItem img={image === 'no image' ? '../../../assets/no_photo.jpg' : 
                                  `data:jpeg;base64,${image}`} />
            <p>{`${year} ${make} ${model}`}</p>
            {props.latestOffers ? <p style={{ color: 'var(--mainRed)',
                                              paddingTop: '0',
                                              marginTop: '0' }}>{`$${modifiedPrice}`}</p> : null}
        </div>
    )
}

export default withRouter(RecommendedItem);