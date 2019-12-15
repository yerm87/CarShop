import React, { Component } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import classes from './UserIcon.css';
import { connect } from 'react-redux';
import * as actions from '../../../reduxStore/authentication/Actions';

class UserIcon extends Component {
    render(){
        return (
            <div className={classes.wrapper}
                 onClick={() => this.props.openModal()}>
                <FaUserCircle size={40}
                              className={classes.item} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: () => dispatch(actions.openModal())
    }
}

export default connect(null, mapDispatchToProps)(UserIcon);