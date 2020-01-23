import React from 'react';
import { ReviewItemImage } from '../../heroImage/HeroImage';
import classes from './ReviewItemMainPage.css';

const ReviewItemMainPage = props => {

    let content = props.content;

    if(props.content.length > 150){
        content = content.slice(0, 150) + '...';
    }

    const image=`data:jpeg;base64,${props.image}`;

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
                   onClick={props.getReview}>Read More</p>
            </div>
        </div>
    )
}

export default ReviewItemMainPage;