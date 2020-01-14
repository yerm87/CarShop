import React, { Component } from 'react';
import { ListingInfoScrollImageItem } from '../heroImage/HeroImage'
import classes from './ScrollImageItem.css';

class ScrollImageItem extends Component {
    render(){
        return (
            <div className={classes.container}
                 onClick={this.props.switchImage}>
                <ListingInfoScrollImageItem img={this.props.img}
                                            active={this.props.active} />
            </div>
        )
    }
}

export default ScrollImageItem;