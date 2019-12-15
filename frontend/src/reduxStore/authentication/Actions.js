import axios from 'axios';
import * as actionTypes from '../actionTypes';

export const init = () => {
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

export const userWasLoggedIn = () => {
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

export const removeSpinner = () => {
    return {
        type: actionTypes.removeSpinner
    }
}

const dispatchEmail = email => {
    return {
        type: actionTypes.dispatchEmail,
        email: email
    }
}

export const getEmail = () => {
    return (dispatch) => {
        axios.get('/getEmail').then(response => {
            dispatch(dispatchEmail(response.data));
        })
    }
}

export const openModal = () => {
    return {
        type: actionTypes.openModal
    }
}

export const closeModal = () => {
    return {
        type: actionTypes.closeModal
    }
}

export const userWasLoggedOut = () => {
    return {
        type: actionTypes.userWasLoggedOut
    }
}

export const logout = () => {
    return (dispatch) => {
        axios.get('/logout').then(response => {
            if(response.data === 'logout'){
                dispatch(userWasLoggedOut());
            }
        })
    }
}