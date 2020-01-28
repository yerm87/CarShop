import React from 'react';
import { ImageRecommendedItem } from '../../heroImage/HeroImage';
import classes from './RecommendedItem.css';
import { withRouter } from 'react-router-dom';

const RecommendedItem = props => {
    const {_id, year, make, model, images} = props.item;
    let image;

    if(images.length === 0){
        image = 'no image';
    } else {
        image = images[0];
    }

    const getInfo = id => {
        props.history.push(`/search_results/${id}`)
    }

    return (
        <div className={classes.wrapper}
             onClick={() => getInfo(_id)}>
            <ImageRecommendedItem img={image === 'no image' ? '../../../assets/no_photo.jpg' : 
                                  `data:jpeg;base64,${image}`} />
            <p>{`${year} ${make} ${model}`}</p>
        </div>
    )
}

export default withRouter(RecommendedItem);