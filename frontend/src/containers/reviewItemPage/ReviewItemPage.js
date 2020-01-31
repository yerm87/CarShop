import React, { Component } from 'react';
import classes from './ReviewItemPage.css';
import axios from 'axios';
import { BuyingAdviceItemImage, ItemNoImage } from '../../components/heroImage/HeroImage';
import { withRouter } from 'react-router-dom';

class ReviewItemPage extends Component {
    state={
        item: {
            title: '',
            author: '',
            created_at: '',
            image: '',
            content: ''
        }
    }

    componentWillMount(){
        axios.get(`/fetch_review_item?id=${this.props.match.params.review_id}`).then(response => {
            this.setState({
                item: response.data
            })
        });
    }

    render(){
        const image = this.state.item.image !== 'no image' ? 
        <BuyingAdviceItemImage img={this.state.item.image} /> :
        <ItemNoImage img="../../assets/no_photo.jpg" />

        return (
            <div className={classes.wrapper}>
                <div className={classes.content}>
                    <h2>{this.state.item.title}</h2>
                    <h4>{`By ${this.state.item.author}`}</h4>
                    <div className={classes.date}>
                        {this.state.item.created_at}
                    </div>
                    {image}
                    <div className={classes.text}>
                        <p>{this.state.item.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ReviewItemPage);