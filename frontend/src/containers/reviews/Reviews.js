import React, { Component } from 'react';
import classes from './Reviews.css';
import ReviewsItems from '../../components/advicesAllItems/AdvicesAllItems';
import axios from 'axios';

class Reviews extends Component {
    state={
        allElements: [],
        reviews: [
            {
                _id: '',
                title: '',
                content: '',
                image: '',
                created_at: '',
                author: ''
            }
        ],
        pages: 1,
        page: 1,
        pagesArray: [],
        activePages: []
    }

    componentDidMount(){
        axios.get('/get_all_reviews').then(response => {
            this.setState({
                allElements: response.data,
                reviews: response.data,
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
                    reviews: shortArray,
                    pagesArray: pagesArray,
                    activePages: activePages
                });
            });
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
            const reviews = this.state.allElements.slice(startPoint, endPoint);
            
            this.setState({
                reviews: reviews
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

        const elements = this.state.reviews;

        return (
            <div className={classes.wrapper}>
                <h1>Reviews</h1>
                <div>
                    <ReviewsItems elements={elements}
                                  reviews />
                </div>
                <div className={classes.pages}>
                    {this.state.pages > 1 ? pages : null}
                </div>
            </div>
        )
    }
}

export default Reviews;