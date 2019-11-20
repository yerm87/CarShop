import React, { Component } from 'react';
import HeroImage from '../../components/heroImage/HeroImage';
import { connect } from 'react-redux';
import * as actions from '../../reduxStore/Actions';
import Title from '../../components/title/Title';
import SearchComponent from '../../components/searchComponent/SearchComponent';

class MainPage extends Component {

    test = () => {
        
        fetch('http://localhost/shopping/backend/public/testRequest').then(response => {
            response.json().then(result => {
                this.props.auth(result.name);
                console.log(result);
            })
        });
    }

    componentDidMount(){
        this.test();
    }

    render() {
        return (
            <React.Fragment>
                <HeroImage img="../../assets/wallpaper_image.jpg">
                    <Title title="Find your car"
                           subtitle="Search cars from thousands of individual sellers" />
                    <SearchComponent />
                </HeroImage>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        auth: (param) => dispatch(actions.userIsAuth(param))
    }
}

export default connect(null, mapDispatchToProps)(MainPage);