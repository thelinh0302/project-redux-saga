import axiosService from './../commons/axiosService/axiosService';
import { API_ENPOINT } from './../constants/index';
import qs from 'query-string';

const url = 'tasks';

 export const getList = (params={})=>{
     let queryParams ='';
     if(Object.keys(params).length>0){
         queryParams = `?${qs.stringify(params)}`;
     }
    return axiosService.get(`${API_ENPOINT}/${url}${queryParams}`);
};
export const addTask = data=>{
    return axiosService.post(`${API_ENPOINT}/${url}`,data);
};
//http://localhost:3000/tasks/:id method:put
export const updateTask = (data,taskId)=>{
    return axiosService.put(`${API_ENPOINT}/${url}/${taskId}`,data);
};

//http://localhost:3000/tasks/:id method:delete
export const deleteTask =taskId=>{
    return axiosService.delete(`${API_ENPOINT}/${url}/${taskId}`);
};
// export default getList;

