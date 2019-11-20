import React, { Component } from 'react';
import HeroImage from '../../components/heroImage/HeroImage';
import { connect } from 'react-redux';
import * as actions from '../../reduxStore/Actions';

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
                <HeroImage />
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