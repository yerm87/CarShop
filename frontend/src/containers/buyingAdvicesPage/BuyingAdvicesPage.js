import React, { Component } from 'react';
import classes from './BuyingAdvicesPage.css';
import axios from 'axios';
import AdvicesAllItems from '../../components/advicesAllItems/AdvicesAllItems';

class BuyingAdvicesPage extends Component {
    state={
        allElements: [],
        buyingAdvices: [],
        pages: 1,
        page: 1,
        pagesArray: [],
        activePages: []
    }

    componentWillMount(){
        axios.get('/get_buying_advices').then(response => {
            let modifiedArray = [];

            for(let i=response.data.length-1; i>=0; i--){
                modifiedArray.push(response.data[i]);
            }

            this.setState({
                allElements: modifiedArray,
                buyingAdvices: modifiedArray,
                pages: Math.ceil(response.data.length/10)
            }, () => {
                const shortArray = this.state.allElements.slice(0, 10);
                const pagesArray = [];
                
                for(let i=1; i<=this.state.pages; i++){
                    pagesArray.push(i);
                }

                const activePages = [];

                activePages[0] = true;
                for(let i=1; i<pagesArray.length; i++){
                    activePages.push(false);
                }

                this.setState({
                    buyingAdvices: shortArray,
                    pagesArray: pagesArray,
                    activePages: activePages
                })
            })
        });
    }

    switchPageHandler = (page) => {
        const pages = this.state.pagesArray;
        let activePages = this.state.activePages;

        const index = pages.findIndex(element => element === page);
        activePages.fill(false, 0, pages.length);
        activePages[index] = true;

        this.setState({
            activePages: activePages,
            page: page
        }, () => {
            const endPoint = this.state.page*10;
            const startPoint = endPoint - 10;
            const buyingAdvices = this.state.allElements.slice(startPoint, endPoint);
            
            this.setState({
                buyingAdvices: buyingAdvices
            })
        })
    }

    render(){
        const activePages = this.state.activePages;
        const pages = this.state.pagesArray.map((page, index) => {
            const classList = [classes.page];
            if(activePages[index]){
                classList.push(classes.activeElement);
            }
            return (
                <p className={classList.join(' ')}
                   onClick={() => this.switchPageHandler(page)}>{page}</p>
            )
        });

        const elements = this.state.buyingAdvices;

        return (
            <div className={classes.wrapper}>
                <h1>Buying Advices</h1>
                <div>
                    <AdvicesAllItems elements={elements} />
                </div>
                <div className={classes.pages}>
                    {this.state.pages > 1 ? pages : null}
                </div>
            </div>
        )
    }
}

export default BuyingAdvicesPage;