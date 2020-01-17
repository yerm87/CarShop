import React, { Component } from 'react';
import classes from './LoanCalculator.css';
import Term from './term/Term';

class LoanCalculator extends Component {

    render(){
        const termsForRender = this.props.terms.map(current => {
            return <Term value={current.value}
                         isActive={current.active}
                         termOnClick={() => this.props.termChange(current)} />
        })
        return (
            <div className={classes.container}>
                <p className={classes.title}>Payment Calculator</p>
                <p className={classes.monthlyPayment}>{this.props.monthlyPayment}<span>/month</span></p>
                <p className={classes.estimatedPayment}>Estimated payment for 
                    <span> {this.props.term} months at 7.5% APR</span>
                </p>
                <div className={classes.inputsContainer}>
                    <div>
                        <label htmlFor="downpayment">Down Payment</label>
                        <input name="downpayment" 
                               value={this.props.downpayment}
                               onChange={this.props.changeValue} />
                    </div>
                    <div className={classes.terms}>
                        <p style={{margin: '0'}}>Term(months)</p>
                        <div className={classes.termsContainer}>
                            {termsForRender}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="vehiclePrice">Vehicle Price</label>
                        <input name="vehiclePrice" 
                               value={this.props.price}
                               onChange={this.props.changeValue} />
                    </div>
                    <div className={classes.percentage}>
                        <label htmlFor="interestRate">Interest Rate(%)</label>
                        <input name="interestRate" 
                               value={this.props.interestRate}
                               onChange={this.props.changeValue} />
                    </div>
                    <button onClick={this.props.calculateValue}>Calculate</button>
                </div>
            </div>
        )
    }
}

export default LoanCalculator;