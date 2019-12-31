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
    zipIsValid: true
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
        default:
            return state;
    }
}

export default reducer;