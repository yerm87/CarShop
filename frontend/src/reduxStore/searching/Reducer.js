import * as actionTypes from '../actionTypes';

const initialState = {
    searchParams: {
        condition: 'select',
        make: 'select',
        model: 'select',
        maxPrice: 'select',
        radius: '10',
        zip: ''
    },
    zipIsValid: true,
    allMakes: [],
    selectedModels: [],
    loading: true,
    filterComponent: true
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case(actionTypes.changeValue):
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    [action.name]: action.value
                }
            }
        case(actionTypes.zipIsValid):
            return {
                ...state,
                zipIsValid: true
            }
        case(actionTypes.zipIsNotValid):
            return {
                ...state,
                zipIsValid: false
            }
        case(actionTypes.resetParams):
            return {
                ...state,
                searchParams: {
                    condition: 'select',
                    make: 'select',
                    model: 'select',
                    maxPrice: 'select',
                    radius: '10',
                    zip: ''
                }
            }
        case(actionTypes.allMakes):
            return {
                ...state,
                allMakes: action.makes
            }
        case(actionTypes.allModels):
            return {
                ...state,
                selectedModels: action.models
            }
        case(actionTypes.emptyModels):
            return {
                ...state,
                selectedModels: []
            }
        case(actionTypes.addItemsToModels):
            const updatedModels = state.selectedModels.concat(action.items);

            return {
                ...state,
                selectedModels: updatedModels
            }
        case(actionTypes.removeItemsFromModels):
            const changedModels = [];
            state.selectedModels.forEach(element => {
                if(!action.items.includes(element)){
                    changedModels.push(element);
                }
            })
            return {
                ...state,
                selectedModels: changedModels
            }
        case(actionTypes.loadingActive):
            return {
                ...state,
                loading: true
            }
        case(actionTypes.loadingNotActive):
            return {
                ...state,
                loading: false
            }
        case(actionTypes.filterComponentActive):
            return {
                ...state,
                filterComponent: true
            }
        case(actionTypes.filterComponentNotActive):
            return {
                ...state,
                filterComponent: false
            }
        default:
            return state;
    }
}

export default reducer;