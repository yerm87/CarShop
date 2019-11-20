const initialState = {
    auth: 'somestring'
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case('changeAuth'):
            return {
                ...state,
                auth: action.isAuth 
            }
    }
}

export default reducer;