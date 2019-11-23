import * as actionTypes from '../actionTypes';

const initialState = {
    auth: false,
    loading: false
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
        default: 
            return state;
    }
}

export default reducer;