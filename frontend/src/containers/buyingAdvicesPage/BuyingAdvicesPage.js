import React, { Component } from 'react';
import classes from './BuyingAdvicesPage.css';
import axios from 'axios';
import AdvicesAllItems from '../../components/advicesAllItems/AdvicesAllItems';

class BuyingAdvicesPage extends Component {
    state={
        buyingAdvices: []
    }

    componentWillMount(){
        axios.get('/get_buying_advices').then(response => {
            this.setState({
                buyingAdvices: response.data
            })
        });
    }

    render(){
        return (
            <div className={classes.wrapper}>
                <h1>Buying Advices</h1>
                <div>
                    <AdvicesAllItems elements={this.state.buyingAdvices} />
                </div>
            </div>
        )
    }
}

export default BuyingAdvicesPage;