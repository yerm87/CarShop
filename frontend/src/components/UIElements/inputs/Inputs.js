import React from 'react';
import classes from './input.css';

const Input = props => {
    const arrayOfStyles = [classes.input];

    if(!props.valid && props.touched){
        arrayOfStyles.push(classes.invalid);
    }

    if(props.notMatched){
        arrayOfStyles.push(classes.invalid);
    }

    switch(props.element){
    
        case('email'):  
            return (
                <React.Fragment>
                    <div className={classes.wrapper}>
                        <label htmlFor="email">Email</label>
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
    }
}

export default Input;