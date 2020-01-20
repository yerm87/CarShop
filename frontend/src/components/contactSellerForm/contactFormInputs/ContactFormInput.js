import React, { Component } from 'react';
import classes from './ContactFormInput.css';

class ContactFormInput extends Component {
    render(){
        const inputs = [classes.inputElement];

        if(!this.props.valid && this.props.touched){
            inputs.push(classes.active);
        }

        switch(this.props.type){
            case('firstName'):
                return (
                    <div className={classes.input}>
                        <input className={inputs.join(' ')}
                               type="text" 
                               placeholder="First Name"
                               onChange={this.props.onChangeHandler}
                               onBlur={this.props.onBlurHandler} />
                    </div>
                )
            case('lastName'):
                return (
                    <div className={classes.input}>
                        <input className={inputs.join(' ')}
                               type="text" 
                               placeholder="Last Name"
                               onChange={this.props.onChangeHandler}
                               onBlur={this.props.onBlurHandler} />
                    </div>
                )
            case('email'):
                return (
                    <div className={classes.input}>
                        <input className={inputs.join(' ')}
                               type="email" 
                               placeholder="email"
                               onChange={this.props.onChangeHandler}
                               onBlur={this.props.onBlurHandler} />
                    </div>
                )
            case('phoneNumber'):
                return (
                    <div className={classes.input}>
                        <input className={inputs.join(' ')}
                               type="phoneNumber" 
                               placeholder="Phone"
                               onChange={this.props.onChangeHandler}
                               onBlur={this.props.onBlurHandler}
                               onKeyDown={this.props.onKeyDownHandler} />
                    </div>
                )
            case('content'):
                return (
                    <div className={classes.inputTextArea}>
                        <textarea className={inputs.join(' ')}
                                  placeholder="Leave Message"
                                  rows="10"
                                  onChange={this.props.onChangeHandler}
                                  onBlur={this.props.onBlurHandler}></textarea>
                    </div>
                )
        }
    }
}

export default ContactFormInput;