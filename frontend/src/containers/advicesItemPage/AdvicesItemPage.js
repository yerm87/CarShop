import React, { Component } from 'react';
import axios from 'axios';
import { BuyingAdviceItemImage, ItemNoImage } from '../../components/heroImage/HeroImage';
import classes from './AdvicesItemPage.css';

class AdvicesItemPage extends Component {
    state={
        item: []
    }
    componentWillMount(){
        axios.get(`/fetch_advices_item?id=${this.props.match.params.advice_id}`).then(response => {
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
                        {this.state.item.created_at ? this.state.item.created_at.substring(0, 10) : null}
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

export default AdvicesItemPage;