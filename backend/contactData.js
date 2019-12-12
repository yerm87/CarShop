import React, { Component } from "react";
import Button from "../../../components/UI/button/button";
import classes from "./contactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/spinner/spinner";
import { withRouter } from "react-router-dom";
import Input from "../../../components/UI/input/input";
import { connect } from "react-redux";
import errorHandler from "../../../hoc/errorHandler/errorHandler";
import * as orderActions from "../../../store/actions/order";

class ContactData extends Component{
    state={
        orderForm: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your name"
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Your email"
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            address: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Address"
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: "select",
                elementConfig: {
                    options: [
                        {value: "fastest", displayValue: "Fastest"},
                        {value: "cheapest", displayValue: "Cheapest"}
                    ]
                },
                value: "fastest",
                validation: {},
                valid: true,
                touched: false
            }
        },
        formIsValid: false,
        spinnerLoading: false
    }

    orderButtonHandler = (event) => {
        event.preventDefault();
        /*
        this.setState({
            spinnerLoading: true
        })
        */
        const orderFormObject = {};
        for(let prop in this.state.orderForm){
            orderFormObject[prop] = this.state.orderForm[prop].value;

        }
        const order = {
            ingredients: this.props.ings,
            totalPrice: this.props.price,
            orderForm: orderFormObject,
            userId: this.props.userId
        }

        this.props.orderingBurger(order, this.props.token)

        /*
        axios.post("/orders.json", order)
             .then(response => {
                 this.setState({
                     spinnerLoading: false
                 });
                 this.props.history.push("/");

             })
             .catch(error => {
                 console.log(error);
                 this.setState({
                     spinnerLoading: false
                 });
             });
        */
    }

    checkValidation = (value, rules) => {
        let isValid = true;

        if(rules.required){
            isValid = value.trim() !== "" && isValid;
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const orderFormCopy = {
            ...this.state.orderForm
        }

        const orderFormElement = orderFormCopy[inputIdentifier]
        

        orderFormElement.value = event.target.value;
        orderFormElement.valid = this.checkValidation(orderFormElement.value, orderFormElement.validation);
        orderFormElement.touched = true;
        
        let formIsValid = true;
        for(let prop in orderFormCopy){
            formIsValid = orderFormCopy[prop].valid && formIsValid
        }
        orderFormCopy[inputIdentifier] = orderFormElement
        //console.log(orderFormElement);
        this.setState({
            orderForm: orderFormCopy,
            formIsValid: formIsValid
        })
    }

    render(){
        const arrayInputElements = [];
        for(let prop in this.state.orderForm){
            arrayInputElements.push({
                id: prop,
                config: this.state.orderForm[prop]
            })
        }
        let form = (
                <form onSubmit={this.orderButtonHandler}>
                    {arrayInputElements.map(element => (
                        <Input key={element.id}
                               elementType={element.config.elementType}
                               elementConfig={element.config.elementConfig}
                               value={element.config.value}
                               inputChange={(event) => this.inputChangeHandler(event, element.id)}
                               invalid={!element.config.valid}
                               shouldValidate={element.config.validation}
                               touched={element.config.touched} />
                    ))}
                    <div>
                       <Button btnType="Success"
                               disabled={!this.state.formIsValid}>Order</Button>
                    </div>
                </form>
        )
        if(this.props.loading){
            form=<Spinner />
        }

        return(
            <div className={classes.ContactData}>
                <h4>Your contact information</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.burgerReducer.ingredients,
        price: state.burgerReducer.totalPrice,
        loading: state.orderReducer.loading,
        token: state.authReducer.token,
        userId: state.authReducer.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        orderingBurger: (data, token) => dispatch(orderActions.postToServer(data, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(ContactData, axios));