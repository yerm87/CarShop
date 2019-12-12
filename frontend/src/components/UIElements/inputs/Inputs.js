import React from 'react';
import classes from './input.css';

const Input = props => {
    const arrayOfStyles = [classes.input];

    if(!props.valid && props.touched){
        arrayOfStyles.push(classes.invalid);
    }

    const selectStyles = [];

    if(!props.selectValid && props.clicked){
        selectStyles.push(classes.invalid)
    }
/*
    if(props.notMatched){
        arrayOfStyles.push(classes.invalid);
    }*/

    switch(props.element){
    
        case('email'):  
            return (
                <React.Fragment>
                    <div className={classes.wrapper}>
                        <label htmlFor="email">Email Address</label>
                        <p>{props.error}</p>
                    </div>
                    <input type="email"
                           className={arrayOfStyles.join(' ')} 
                           name="email" 
                           value={props.value}
                           onChange={props.onChangeHandler}
                           onBlur={props.onBlurHandler} />
                </React.Fragment>
            )
        case('password'):
            return (
                <React.Fragment>
                    <div className={classes.wrapper}>
                        <label htmlFor="password">Password</label>
                        <p>{props.error}</p>
                    </div>
                    <input type="password"
                           className={arrayOfStyles.join(' ')}
                           name="password"
                           value={props.value}
                           onChange={props.onChangeHandler}
                           onBlur={props.onBlurHandler} />
                </React.Fragment>
            )
        case('confirmPassword'):
            return (
                <React.Fragment>
                    <div className={classes.wrapper}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <p>{props.error}</p>
                    </div>
                    <input type="password"
                           className={arrayOfStyles.join(' ')} 
                           name="confirmPassword" 
                           value={props.value}
                           onChange={props.onChangeHandler}
                           onBlur={props.onBlurHandler} />
                </React.Fragment>
            )
        case('submit'):
            return (
                <input className={classes.submit} 
                       type="submit" 
                       value="Sign Up" />
            )
        case('login'):
            return (
                <input className={classes.submit}
                       type="submit"
                       value="Log In" />
            )
        case('year'):
            return (
                <div className={classes.selectWrapper}>
                    <label htmlFor="year">Year</label>
                    <select className={selectStyles.join(' ')}
                            disabled={props.invalid}
                            name="year"
                            onChange={props.onChangeHandler}>
                            <option value="select">Select year</option>
                            {props.children}
                    </select>
                </div>
            )
        case('make'):
            return (
                <div className={classes.selectWrapper}>
                    <label htmlFor="make">Make</label>
                    <select className={selectStyles.join(' ')}
                            disabled={props.invalid}
                            name="make"
                            onChange={props.onChangeHandler}>
                            <option value="select">Select make</option>
                            {props.children}
                    </select>
                </div>
            )
        case('model'):
            return (
                <div className={classes.selectWrapper}>
                    <label htmlFor="model">Model</label>
                    <select className={selectStyles.join(' ')}
                            disabled={props.invalid}
                            name="model"
                            onChange={props.onChangeHandler}>
                            <option value="select">Select model</option>
                            {props.children}
                    </select>
                </div>
            )
        case('bodyStyle'):
            return (
                <div className={classes.selectWrapper}>
                    <label htmlFor="bodyStyle">Body Style</label>
                    <select className={selectStyles.join(' ')}
                            disabled={props.invalid}
                            name="bodyStyle"
                            onChange={props.onChangeHandler}>
                            <option value="select">Select body style</option>
                            {props.children}
                    </select>
                </div>
            )
        case('transmission'):
            return (
                <div className={classes.selectWrapper}>
                    <label htmlFor="transmission">Transmission</label>
                    <select className={selectStyles.join(' ')}
                            disabled={props.invalid}
                            name="transmission"
                            onChange={props.onChangeHandler}>
                            <option value="select">Select transmission</option>
                            {props.children}
                    </select>
                </div>
            )
        case('exteriorColor'):
            return (
                <div className={classes.selectWrapper}>
                    <label htmlFor="exteriorColor">Exterior Color</label>
                    <select className={selectStyles.join(' ')}
                            disabled={props.invalid}
                            name="exteriorColor"
                            onChange={props.onChangeHandler}>
                            <option value="select">Select exterior color</option>
                            {props.children}
                    </select>
                </div>
            )
        case('interiorColor'):
            return (
                <div className={classes.selectWrapper}>
                    <label htmlFor="interiorColor">Interior Color</label>
                    <select className={selectStyles.join(' ')}
                            disabled={props.invalid}
                            name="interiorColor"
                            onChange={props.onChangeHandler}>
                            <option value="select">Select interior color</option>
                            {props.children}
                    </select>
                </div>
            )
        case('numberOfDoors'):
            return (
                <div className={classes.selectWrapper}>
                    <label htmlFor="numberOfDoors">Number of doors</label>
                    <select className={selectStyles.join(' ')}
                            disabled={props.invalid}
                            name="numberOfDoors"
                            onChange={props.onChangeHandler}>
                            <option value="select">Select number of doors</option>
                            {props.children}
                    </select>
                </div>
            )
        case('fuelType'):
            return (
                <div className={classes.selectWrapper}>
                    <label htmlFor="fuelType">Fuel type</label>
                    <select className={selectStyles.join(' ')}
                            disabled={props.invalid}
                            name="fuelType"
                            onChange={props.onChangeHandler}>
                            <option value="select">Select fuel type</option>
                            {props.children}
                    </select>
                </div>
            )
        case('condition'):
            return (
                <div className={classes.selectWrapper}>
                    <label htmlFor="condition">Condition</label>
                    <select className={selectStyles.join(' ')}
                            disabled={props.invalid}
                            name="condition"
                            onChange={props.onChangeHandler}>
                            <option value="select">Select condition</option>
                            {props.children}
                    </select>
                </div>
            )
        case('price'):
            return (
                <React.Fragment>
                    <div className={classes.wrapper}>
                        <label htmlFor="price">Price</label>
                        <p>{props.error}</p>
                    </div>
                    <input type="text"
                           className={arrayOfStyles.join(' ')} 
                           name="price" 
                           value={props.value}
                           onChange={props.onChangeHandler}
                           onBlur={props.onBlurHandler}
                           onKeyDown={props.onKeyDownHandler} />
                </React.Fragment>
            )
        case('mileage'):
            return (
                <React.Fragment>
                    <div className={classes.wrapper}>
                        <label htmlFor="mileage">Mileage</label>
                        <p>{props.error}</p>
                    </div>
                    <input type="text"
                           className={arrayOfStyles.join(' ')} 
                           name="mileage" 
                           value={props.value}
                           onChange={props.onChangeHandler}
                           onBlur={props.onBlurHandler}
                           onKeyDown={props.onKeyDownHandler} />
                </React.Fragment>
            )
        case('createListing'):
            return (
                <input className={classes.submit}
                       type="submit"
                       value="Create Listing" />
            )
        case('description'):
            return (
                <div className={classes.textarea}>
                    <label htmlFor="textarea">Description(optional)</label>
                    <textarea name="textarea" cols="65" rows="10"
                              onChange={props.onChangeHandler}>{props.value}</textarea>
                </div>
            )
        case('firstName'):
            return (
                <React.Fragment>
                    <div className={classes.wrapper}>
                        <label htmlFor="firstName">First Name</label>
                        <p>{props.error}</p>
                    </div>
                    <input type="text"
                           className={arrayOfStyles.join(' ')} 
                           name="firstName" 
                           value={props.value}
                           onChange={props.onChangeHandler}
                           onBlur={props.onBlurHandler} />
                </React.Fragment>
            )
        case('lastName'):
            return (
                <React.Fragment>
                    <div className={classes.wrapper}>
                        <label htmlFor="lastName">Last Name</label>
                        <p>{props.error}</p>
                    </div>
                    <input type="text"
                           className={arrayOfStyles.join(' ')} 
                           name="lastName" 
                           value={props.value}
                           onChange={props.onChangeHandler}
                           onBlur={props.onBlurHandler} />
                </React.Fragment>
            )
        case('phoneNumber'):
            return (
                <React.Fragment>
                    <div className={classes.wrapper}>
                        <label htmlFor="phoneNumber">Phone number</label>
                        <p>{props.error}</p>
                    </div>
                    <input type="text"
                           className={arrayOfStyles.join(' ')} 
                           name="phoneNumber" 
                           value={props.value}
                           onChange={props.onChangeHandler}
                           onBlur={props.onBlurHandler} />
                </React.Fragment>
            )
        case('zipCode'):
            return (
                <React.Fragment>
                    <div className={classes.wrapper}>
                        <label htmlFor="zip code">zip code</label>
                        <p>{props.error}</p>
                    </div>
                    <input type="number"
                           className={arrayOfStyles.join(' ')} 
                           name="zip code" 
                           value={props.value}
                           onChange={props.onChangeHandler}
                           onBlur={props.onBlurHandler} />
                </React.Fragment>
            )
    }
}

export default Input;