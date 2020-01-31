import React from 'react';
import classes from './AboutUsPage.css';

const AboutUsPage = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.image}></div>
                <p>Our mission is to be your ultimate online solution for buying and selling new and used cars. Our site is designed to give you more control of the buying process and make finding a vehicle easier than ever before.</p>
                <p className={classes.paragraph}>Our goal is to eliminate all the hassles of your car selling experience. Sell it now and save time and money.</p>
            </div>
        </div>
    )
}

export default AboutUsPage;