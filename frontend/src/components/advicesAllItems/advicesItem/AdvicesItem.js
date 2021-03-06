import React, { Component } from 'react';
import classes from './AdvicesItem.css';
import { BuyingAdviceImage, BuyingAdviceItemNoImage } from '../../../components/heroImage/HeroImage';
import { withRouter } from 'react-router-dom';

class AdvicesItem extends Component {

    elementClickHandler = (id) => {
        this.props.history.push(`/buying_advices/${id}`);
    }

    getReviewItem = (id) => {
        this.props.history.push(`/reviews/${id}`);
    }

    render(){
        const {_id, title, content, image, created_at, author} = this.props.element;

        return (
            <div className={classes.wrapper}
                 onClick={this.props.reviews ? () => this.getReviewItem(_id) : 
                                               () => this.elementClickHandler(_id)}>
                {image !== 'no image' ? <BuyingAdviceImage img={image} /> : 
                <BuyingAdviceItemNoImage img="../../../assets/no_photo.jpg" />}
                <div className={classes.content}>
                    <h4>{title}</h4>
                    <div className={classes.nameAndDate}>
                        <p>{`By ${author} on ${created_at.substring(0, 10)}`}</p>
                    </div>
                    <p>{content.length > 350 ? `${content.substring(0, 350)}...` : content}</p>
                </div>
            </div>
        )
    }
}

export default withRouter(AdvicesItem);