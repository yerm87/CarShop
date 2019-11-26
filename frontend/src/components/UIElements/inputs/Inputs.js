import React from 'react';
import classes from './input.css';

const Input = props => {
    const arrayOfStyles = [classes.input];

    if(!props.valid && props.touched){
        arrayOfStyles.push(classes.invalid);
    }

    switch(props.element){
    
        case('email'):  
            return (
                <React.Fragment>
                    <div className={classes.wrapper}>
                        <label for="email">Email</label>
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
                        <label for="password">Password</label>
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
                        <label for="confirmPassword">Confirm Password</label>
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
    }
}

export default Input;