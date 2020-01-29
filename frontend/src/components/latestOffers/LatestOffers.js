import React, { Component } from 'react';
import classes from './LatestOffers.css';
import RecommendedItem from '../../components/recommendedItems/recommendedItem/RecommendedItem';
import axios from 'axios';

class LatestOffers extends Component {
    state={
        items:  [
            {
                images: [],
                year: '',
                make: '',
                model: '',
                price: ''
            }
        ],
        interval: null
    }

    componentDidMount(){
        axios.get('/latest_offers').then(response => {
            this.setState({
                items: response.data
            }, () => {
                this.moveLeft();
            });
        });
    }

    componentWillUnmount(){
        const interval = this.state.interval;
        clearInterval(interval);

        this.setState({
            interval: null
        });
    }

    moveLeft = () => {
        
        let elements = document.querySelectorAll('.LatestOffers__item__3q-ZL');
        elements[0].style.marginLeft = '0px';

        const callback = () => {

            if(elements[0].style.marginLeft === '-330px'){
                const firstChild = document.querySelector('.LatestOffers__content__2wnHX').firstChild;

                firstChild.parentNode.removeChild(firstChild);
                const parentNode = document.querySelector('.LatestOffers__content__2wnHX');
                    
                firstChild.style.marginLeft = null;
                parentNode.append(firstChild);

                elements = document.querySelectorAll('.LatestOffers__item__3q-ZL');
                elements[0].style.marginLeft = '0px';
                    
            } else {
                let marginValue = elements[0].style.marginLeft;
    
                marginValue = parseInt(marginValue.replace('px', ''));
                elements[0].style.marginLeft = marginValue - 30 + 'px';
            }
        }

        const interval = setInterval(callback, 300);

        this.setState({
            interval: interval
        });
    }

    render(){
        const itemsForRender = this.state.items.map(item => {
            return (
                <div className={classes.item} name={item.make}>
                    <RecommendedItem item={item}
                                     latestOffers />
                </div>
            )
        });
    
        return (
            <div className={classes.container}>
                <h1>Latest Offers</h1>
                <div className={classes.content}>
                    {itemsForRender}
                </div>
            </div>
        )
    }
}

export default LatestOffers;