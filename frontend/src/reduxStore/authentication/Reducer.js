import * as actionTypes from '../actionTypes';

const initialState = {
    loading: false,
    signupOrLoginMode: 'signup',
    userIsLoggedIn: false,
    email: '',
    showModal: false
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
        case(actionTypes.dispatchEmail):
            return {
                ...state,
                email: action.email
            }
        case(actionTypes.openModal):
            return {
                ...state,
                showModal: true
            }
        case(actionTypes.closeModal):
            return {
                ...state,
                showModal: false
            }
        case(actionTypes.userWasLoggedOut):
            return {
                ...state,
                userIsLoggedIn: false
            }
        default: 
            return state;
    }
}

export default reducer;