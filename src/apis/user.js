import axiosService from './../commons/axiosService/axiosService'
import { API_ENPOINT_USER } from './../constants/index'

const url = 'auth/login';

export const login = data => {
    return axiosService.post(`${API_ENPOINT_USER}/${url}`, data)
}