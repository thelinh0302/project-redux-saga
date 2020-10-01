import * as typeUser from './../constants/user';
export const user = (email, password) => {
    return {
        type: typeUser.LOGIN,
        payload: {
            email, password
        }
    }
}
export const userSuccess = (data) => {
    return {
        type: typeUser.LOGIN_SUCCESS,
        payload: {
            data
        }
    }
}
export const userFail = (error) => {
    return {
        type: typeUser.LOGIN_FAILD,
        payload: {
            error
        }
    }
}