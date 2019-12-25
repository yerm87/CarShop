import React from 'react';
import classes from './AdvicesLatestItems.css';
import AdvicesLatestItem from './advicesLatestItem/AdvicesLatestItem';
import Button from '../../components/UIElements/button/Button';
import { Link } from 'react-router-dom';

const AdvicesLatestItems = props => {
    let lastThreeElements = [];
    if(props.elements.length > 3){
        for(let i=props.elements.length-1; i>=props.elements.length-3; i--){
            lastThreeElements.push(props.elements[i]);
        }
    } else {
        lastThreeElements = props.elements;
    }
    const advicesItems = lastThreeElements.map(element => {
        return <AdvicesLatestItem element={element} />
    });

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <h2>Latest Buying Advices</h2>
                <div className={classes.items}>
                    {advicesItems}
                </div>
                <div className={classes.viewAllButton}>
                    <Link to="/buying_advices">
                        <Button viewAllAdvices>View All Advices</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AdvicesLatestItems;