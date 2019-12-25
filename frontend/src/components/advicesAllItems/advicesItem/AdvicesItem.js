import React, { Component } from 'react';
import classes from './AdvicesItem.css';
import { BuyingAdviceImage } from '../../../components/heroImage/HeroImage';
import { withRouter } from 'react-router-dom';

class AdvicesItem extends Component {

    elementClickHandler = (id) => {
        this.props.history.push(`/buying_advices/${id}`);
    }

    render(){
        const {_id, title, content, image, created_at, author} = this.props.element;

        return (
            <div className={classes.wrapper}
                 onClick={() => this.elementClickHandler(_id)}>
                <BuyingAdviceImage img={image} />
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