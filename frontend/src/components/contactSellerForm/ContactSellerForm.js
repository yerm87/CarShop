import React, { Component } from 'react';
import classes from './ContactSellerForm.css';
import ContactFormInput from './contactFormInputs/ContactFormInput';
import axios from 'axios';

class ContactSellerForm extends Component {
    state={
        inputData: {
            firstName: {
                type: 'firstName',
                value: '',
                valid: false,
                touched: false
            },
            lastName: {
                type: 'lastName',
                value: '',
                valid: false,
                touched: false
            },
            email: {
                type: 'email',
                value: '',
                valid: false,
                touched: false
            },
            phoneNumber: {
                type: 'phoneNumber',
                value: '',
                valid: false,
                touched: false
            },
            content: {
                type: 'content',
                value: '',
                valid: false,
                touched: false
            }
        },
        errorMessage: ''
    }

    onBlurHandler = (event, element) => {
        const inputDataCopy = {
            ...this.state.inputData
        }

        inputDataCopy[element.type].touched = true;

        let valid = false;

        if(event.target.value !== ''){
            valid = true;
        } else if(event.target.value === ''){
            valid = false;
        }

        inputDataCopy[element.type].valid = valid;

        this.setState({
            inputData: inputDataCopy
        })
    }

    onKeyDownHandler = (event, element) => {
        const copyElements = {
            ...this.state.inputData
        }
        if(event.keyCode === 8){
            event.target.value = '';
            copyElements[element.type].value = '';
        }

        this.setState({
            inputData: copyElements
        });
    }

    onChangeHandler = (event, element) => {
        const inputDataCopy = {
            ...this.state.inputData
        }

        if(element.type === 'phoneNumber'){
            if(/^[\(]*[0-9]*[\)]*[-]*\d*[-]*\d*$/.test(event.target.value)){   
                inputDataCopy[element.type].value = event.target.value;

                if(event.target.value.length === 3){
                    event.target.value = `(${event.target.value})-`;
                    inputDataCopy[element.type].value = event.target.value;

                } else if(event.target.value.length === 9){
                    event.target.value = `${event.target.value}-`;
                    inputDataCopy[element.type].value = event.target.value;

                } else if(event.target.value.length === 15){
                    event.target.value = event.target.value.slice(0, event.target.value.length - 1);
                    inputDataCopy[element.type].value = event.target.value;
                    return;
                }
            } else {
                event.target.value = '';
                inputDataCopy[element.type].value = '';
            }
        } else {
            inputDataCopy[element.type].value = event.target.value;
        }

        this.setState({
            inputData: inputDataCopy
        })
    }

    submitHandler = () => {
        const arrayOfElements = [];

        for(let prop in this.state.inputData){
            arrayOfElements.push(this.state.inputData[prop]);
        }

        const valids = arrayOfElements.map(current => current.valid);

        if(valids.includes(false)){
            this.setState({
                errorMessage: 'All fields must be filled'
            })
        } else {
            const fd = new FormData();

            for(let prop in this.state.inputData){
                fd.append(prop, this.state.inputData[prop].value);
            }

            fd.append('itemId', this.props.itemId);

            this.props.loadingOn();
            axios.post('/create_message', fd).then(response => {
                if(response.data.created === true){
                    this.props.loadingOff();
                    this.props.formDelivered();
                }
            })
        }
    }

    render(){
        const arrayOfData = [];
        for(let prop in this.state.inputData){
            arrayOfData.push(this.state.inputData[prop]);
        }

        const inputs = arrayOfData.map(element => <ContactFormInput type={element.type}
                                                                    valid={element.valid}
                                                                    touched={element.touched}
                                    onChangeHandler={(event) => this.onChangeHandler(event, element)}
                                    onBlurHandler={(event) => this.onBlurHandler(event, element)}
                                    onKeyDownHandler={(event) => this.onKeyDownHandler(event, element)} />)

        return (
            <div className={classes.container}>
                <h2>Contact Seller</h2>
                <p>{this.props.phoneNumber}</p>
                <div className={classes.info}>
                    {inputs.slice(0, inputs.length-1)}
                </div>
                {inputs[4]}
                <p className={classes.errorMessage}>{this.state.errorMessage}</p>
                <button onClick={() => this.submitHandler()}>Send</button>
            </div>
        )
    }
}

export default ContactSellerForm;