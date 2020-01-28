import React from 'react';
import classes from './RecommendedItems.css';
import RecommendedItem from './recommendedItem/RecommendedItem';
import { connect } from 'react-redux';

const RecommendedItems = props => {
    const itemsForRender = props.recommendedItems.map(item => {
        return <RecommendedItem item={item} />
    });
    return (
        <div className={classes.container}>
            <h1>Recommended For You</h1>
            <div className={classes.content}>
                {itemsForRender}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        recommendedItems: state.searchReducer.recommendedItems
    }
}

export default connect(mapStateToProps)(RecommendedItems);