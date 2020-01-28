import React, { Component } from 'react';
import HeroImage from '../../components/heroImage/HeroImage';
import Title from '../../components/title/Title';
import SearchComponent from '../../components/searchComponent/SearchComponent';
import classes from './Main_page.css';
import LatestReviews from '../../components/latestReviews/LatestReviews';
import ChooseBrand from '../../components/chooseBrand/ChooseBrand';

class MainPage extends Component {

    render() {
        return (
            <div className={classes.wrapper}>
                <HeroImage img="../../assets/wallpaper_image.jpg">
                    <Title title="Find your car"
                           subtitle="Search cars from thousands of individual sellers" />
                    <SearchComponent />
                </HeroImage>
                <ChooseBrand />
                <LatestReviews />
            </div>
        )
    }
}

export default MainPage;