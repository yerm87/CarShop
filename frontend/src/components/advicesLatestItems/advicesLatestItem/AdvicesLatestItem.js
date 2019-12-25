import React, { Component } from 'react';
import { BuyingAdviceImage } from '../../../components/heroImage/HeroImage';
import classes from "./AdvicesLatestItem.css";
import { withRouter } from 'react-router-dom';

class AdvicesLatestItem extends Component {
    getItem = id => {
        this.props.history.push(`/buying_advices/${id}`);
    }

    render(){
        const {_id, title, image} = this.props.element;

        let modifiedTitle = title;

        if(title.length > 24){
            modifiedTitle = title.substring(0, 24)+'...';
        } else {
            modifiedTitle = title;
        }

        return (
            <div className={classes.itemElement}
                 onClick={() => this.getItem(_id)}>
                <BuyingAdviceImage img={image} />
                <p>{modifiedTitle}</p>
            </div>
        )
    }
}

export default withRouter(AdvicesLatestItem);