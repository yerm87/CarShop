import React, { Component } from 'react';
import { BuyingAdviceImage, BuyingAdviceItemNoImage } from '../../../components/heroImage/HeroImage';
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

        let imageElement;
        if(image !== 'no image'){
            imageElement = <BuyingAdviceImage img={image} />
        } else {
            imageElement = <BuyingAdviceItemNoImage img='../../../assets/no_photo.jpg' />
        }

        return (
            <div className={classes.itemElement}
                 onClick={() => this.getItem(_id)}>
                {imageElement}
                <p>{modifiedTitle}</p>
            </div>
        )
    }
}

export default withRouter(AdvicesLatestItem);