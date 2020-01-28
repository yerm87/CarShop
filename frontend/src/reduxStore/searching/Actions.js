import * as actionTypes from '../actionTypes';
import axios from 'axios';

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

export const setSearchResults = results => {
    return {
        type: actionTypes.setSearchResults,
        searchResults: results,
        activeItems: results
    }
}

export const addMake = make => {
    return {
        type: actionTypes.addMake,
        make: make
    }
}

export const addModel = model => {
    return {
        type: actionTypes.addModel,
        model: model
    }
}

export const resetSearchResults = () => {
    return {
        type: actionTypes.resetSearchResults
    }
}

export const setActiveItems = activeItems => {
    return {
        type: actionTypes.setActiveItems,
        activeItems: activeItems
    }
}

export const setPagesArray = pagesArray => {
    return {
        type: actionTypes.setPagesArray,
        pagesArray: pagesArray
    }
}

export const setActivePages = activePages => {
    return {
        type: actionTypes.setActivePages,
        activePages: activePages
    }
}

export const removeMake = make => {
    return {
        type: actionTypes.removeMake,
        make: make
    }
}

export const removeModel = model => {
    return {
        type: actionTypes.removeModel,
        model: model
    }
}

export const switchPage = page => {
    return {
        type: actionTypes.switchPage,
        page: page
    }
}

export const setRecommendedItems = items => {
    return {
        type: actionTypes.setRecommendedItems,
        items: items
    }
}

export const getRecommendedItems = () => {
    return dispatch => {
        axios.get('/recommended_items').then(response => {
            dispatch(setRecommendedItems(response.data));
        })
    }
}

export const checkCookies = () => {
    return dispatch => {
        axios.get('/check_cookies').then(response => {
            if(response.data.cookieIsSet){
                dispatch(getRecommendedItems());
            }
        });
    }
}