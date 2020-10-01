import * as typeUser from './../constants/user';
import { toastError, toastSuccess } from '../commons/helper/toastHelper';
// import cookie from 'js-cookie'
// var token = cookie.get()
const initialState = []
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case typeUser.LOGIN: {
            return { ...state }
        }
        case typeUser.LOGIN_SUCCESS: {
            console.log('lkajsd')
            const { data } = action.payload
            return {
                ...state,
                data
            }
        }
        case typeUser.LOGIN_FAILD: {
            const { error } = action.payload
            return { ...error }
        }
        default: return state
    }
}
export default reducer
