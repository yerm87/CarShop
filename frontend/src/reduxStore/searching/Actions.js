import * as actionTypes from '../actionTypes';

export const onChangeHandler = (value, name) => {
    return {
        type: actionTypes.changeValue,
        value: value,
        name: name
    }
}

export const zipIsValid = () => {
    return {
        type: actionTypes.zipIsValid
    }
}

export const zipIsNotValid = () => {
    return {
        type: actionTypes.zipIsNotValid
    }
}

export const resetParameters = () => {
    return {
        type: actionTypes.resetParams
    }
}