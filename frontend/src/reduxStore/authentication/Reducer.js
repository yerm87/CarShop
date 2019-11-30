import * as actionTypes from '../actionTypes';

const initialState = {
    auth: '',
    loading: false,
    signupOrLoginMode: 'signup',
    userIsLoggedIn: false
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case(actionTypes.changeAuth):
            return {
                ...state,
                auth: action.isAuth,
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
        case(actionTypes.userWasSignedUp):
            return {
                ...state,
                loading: false,
                userIsLoggedIn: true
            }
        default: 
            return state;
    }
}

export default reducer;