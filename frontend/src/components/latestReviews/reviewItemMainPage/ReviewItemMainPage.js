import React, { useEffect } from 'react';
import { ReviewItemImage } from '../../heroImage/HeroImage';
import classes from './ReviewItemMainPage.css';
import { withRouter } from 'react-router-dom';

const ReviewItemMainPage = props => {

    let content = props.content;

    if(props.content.length > 150){
        content = content.slice(0, 150) + '...';
    }

    let image;

    if(props.image !== 'no image'){
        image=`data:jpeg;base64,${props.image}`;
    } else {
        image = '../../../assets/no_photo.jpg';
    }

    const getReview = () => {
        props.history.push(`/reviews/${props.id}`);
    }

    return (
        <div className={classes.container}>
            <ReviewItemImage img={image} />
            <div className={classes.content}>
                <p className={classes.title}>
                    {props.title}
                </p>
                <p className={classes.date}>
                    {props.date}
                </p>
                <p className={classes.text}>
                    {content}
                </p>
                <p className={classes.readMore}
                   onClick={() => getReview()}>Read More</p>
            </div>
        </div>
    )
}

export default withRouter(ReviewItemMainPage);