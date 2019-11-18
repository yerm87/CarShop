import React, { Component } from 'react';
import classes from './Toolbar.css';

class Toolbar extends Component {
    render(){
        return (
            <div className={classes.toolbar}>
                {this.props.children}
            </div>
        )
    }
}

export default Toolbar;