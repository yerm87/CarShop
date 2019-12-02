import axios from 'axios';
import * as urlsAPI from '../../urlsAPI/urlsAPI';
import * as actionTypes from '../actionTypes';

const init = () => {
    return {
        type: actionTypes.init
    }
}

const userIsAuth = (param) => {
    return {
        type: actionTypes.changeAuth,
        isAuth: param
    }
}

export const checkAuth = () => {
    return dispatch => {
        dispatch(init());
        axios.get('/checkAuth').then(result => {
            dispatch(userIsAuth(result.data.auth));
        })
    }
}

export const setSignupOrLoginMode = (param) => {
    return {
        type: actionTypes.setSignupOrLoginMode,
        mode: param
    }
}

const userWasLoggedIn = () => {
    return {
        type: actionTypes.userWasLoggedIn
    }
}

export const signupRequest = (email, password) => {
    return (dispatch) => {
        dispatch(init());
        axios.post('/create_user', {
            email: email,
            password, password
        }).then(() => {
            dispatch(userWasLoggedIn());
        });
    }
}

const failedToLogin = () => {
    return {
        type: actionTypes.failedToLogin
    }
}

export const loginUser = (email, password) => {
    return (dispatch) => {
        dispatch(init());
        axios.post('/auth_user', {
            email: email,
            password: password
        }).then(response => {
            /*
            if(response.data !== 0){
                dispatch(failedToLogin());
            } else if(response.data === 0){
                dispatch(userWasLoggedIn());
            }*/
            console.log('action')
        });
    }
}