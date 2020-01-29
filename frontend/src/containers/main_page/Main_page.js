import React, { Component } from 'react';
import HeroImage from '../../components/heroImage/HeroImage';
import Title from '../../components/title/Title';
import SearchComponent from '../../components/searchComponent/SearchComponent';
import classes from './Main_page.css';
import LatestReviews from '../../components/latestReviews/LatestReviews';
import ChooseBrand from '../../components/chooseBrand/ChooseBrand';
import RecommendedItems from '../../components/recommendedItems/RecommendedItems';
import { connect } from 'react-redux';
import LatestOffers from '../../components/latestOffers/LatestOffers';

class MainPage extends Component {

    render() {
        return (
            <div className={classes.wrapper}>
                <HeroImage img="../../assets/wallpaper_image.jpg">
                    <Title title="Find your car"
                           subtitle="Search cars from thousands of individual sellers" />
                    <SearchComponent />
                </HeroImage>
                {this.props.recommendedItems.length > 0 ? <RecommendedItems /> : null}
                <LatestOffers />
                <ChooseBrand />
                <LatestReviews />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recommendedItems: state.searchReducer.recommendedItems
    }
}

export default connect(mapStateToProps)(MainPage);