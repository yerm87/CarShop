import React, { useEffect, useState } from 'react';
import classes from './LatestReviews.css';
import ReviewItemMainPage from './reviewItemMainPage/ReviewItemMainPage';
import axios from 'axios';

const LatestReviews = () => {
    const [reviews, setReviews] = useState(
        [
            {
                _id: '',
                title: '',
                content: '',
                image: '',
                created_at: '',
                author: ''
            }
        ]
    )

    useEffect(() => {
        axios.get('/get_last_reviews').then(response => {
            setReviews(response.data);
        });
        return () => {
            console.log(reviews);
        }
    }, []);

    const getReviewHandler = element => {
        console.log(element);
    }

    const reviewItems = reviews.map(review => <ReviewItemMainPage title={review.title}
                                                                  image={review.image}
                                                                  content={review.content}
                                                                  date={review.created_at}
                                                            getReview={() => getReviewHandler(review)} />)

    return (
        <div className={classes.wrapper}>
            <h1>Latest Car Reviews</h1>
            <div className={classes.content}>
                {reviewItems}
            </div>
            <button>Read All Reviews</button>
        </div>
    )
}

export default LatestReviews;