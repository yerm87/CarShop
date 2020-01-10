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

export const setMakes = data => {
    return {
        type: actionTypes.allMakes,
        makes: data
    }
}

export const setModels = data => {
    return {
        type: actionTypes.allModels,
        models: data
    }
}

export const resetModels = () => {
    return {
        type: actionTypes.emptyModels
    }
}

export const addItemsToModels = data => {
    return {
        type: actionTypes.addItemsToModels,
        items: data
    }
}

export const removeItemsFromModels = data => {
    return {
        type: actionTypes.removeItemsFromModels,
        items: data
    }
}

export const loadingActive = () => {
    return {
        type: actionTypes.loadingActive
    }
}

export const loadingNotActive = () => {
    return {
        type: actionTypes.loadingNotActive
    }
}

export const filterComponentActive = () => {
    return {
        type: actionTypes.filterComponentActive
    }
}

export const filterComponentNotActive = () => {
    return {
        type: actionTypes.filterComponentNotActive
    }
}