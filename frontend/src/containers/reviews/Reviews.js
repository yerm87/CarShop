import React, { Component } from 'react';
import classes from './Reviews.css';
import ReviewsItems from '../../components/advicesAllItems/AdvicesAllItems';
import axios from 'axios';

class Reviews extends Component {
    state={
        reviews: [
            {
                _id: '',
                title: '',
                content: '',
                image: '',
                created_at: '',
                author: ''
            }
        ]
    }

    componentDidMount(){
        axios.get('/get_all_reviews').then(response => {
            this.setState({
                reviews: response.data
            });
        });
    }

    render(){
        return (
            <div className={classes.wrapper}>
                <h1>Reviews</h1>
                <div>
                    <ReviewsItems elements={this.state.reviews}
                                  reviews />
                </div>
            </div>
        )
    }
}

export default Reviews;