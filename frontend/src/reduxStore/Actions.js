export const userIsAuth = (param) => {
    return {
        type: 'changeAuth',
        isAuth: param
    }
}