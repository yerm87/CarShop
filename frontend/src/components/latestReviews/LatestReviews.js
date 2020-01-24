import React, { useEffect, useState } from 'react';
import classes from './LatestReviews.css';
import ReviewItemMainPage from './reviewItemMainPage/ReviewItemMainPage';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const LatestReviews = props => {
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
    }, []);

    const getAllReviews = () => {
        props.history.push('/reviews');
    }

    const reviewItems = reviews.map(review => <ReviewItemMainPage title={review.title}
                                                                  image={review.image}
                                                                  content={review.content}
                                                                  date={review.created_at}
                                                                  id={review._id} />)

    return (
        <div className={classes.wrapper}>
            <h1>Latest Car Reviews</h1>
            <div className={classes.content}>
                {reviewItems}
            </div>
            <button onClick={() => getAllReviews()}>Read All Reviews</button>
        </div>
    )
}

export default withRouter(LatestReviews);