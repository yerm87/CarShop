import * as actionTypes from '../actionTypes';

const initialState = {
    loading: false,
    signupOrLoginMode: 'signup',
    userIsLoggedIn: false
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case(actionTypes.changeAuth):
            return {
                ...state,
                userIsLoggedIn: action.isAuth,
                loading: false 
            }
        case(actionTypes.init):
            return {
                ...state,
                loading: true
            }
        case(actionTypes.setSignupOrLoginMode):
            return {
                ...state,
                signupOrLoginMode: action.mode
            }
        case(actionTypes.userWasLoggedIn):
            return {
                ...state,
                loading: false,
                userIsLoggedIn: true
            }
        case(actionTypes.removeSpinner):
            return {
                ...state,
                loading: false
            }
        default: 
            return state;
    }
}

export default reducer;