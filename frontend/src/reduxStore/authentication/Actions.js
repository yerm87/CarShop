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

const userWasSignedUp = () => {
    return {
        type: actionTypes.userWasSignedUp
    }
}

export const signupRequest = (email, password) => {
    return (dispatch) => {
        dispatch(init());
        axios.post('/create_user', {
            email: email,
            password, password
        }).then(() => {
            dispatch(userWasSignedUp());
        });
    }
}