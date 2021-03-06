import * as taskConstants from './../constants/task';
import { toastError,toastSuccess } from '../commons/helper/toastHelper';
// import { act } from 'react-dom/test-utils';
const initialState = {
    listTask:[],
    taskEditing:null
};

const reducer  = (state=initialState,action)=>{
    switch(action.type){
        //hiển thị dữ liệu
        case taskConstants.FETCH_TASK:{
            return{
                ...state,
                listTask: [],

            };
        }
        case taskConstants.FETCH_TASK_SUCCESS:
            const {data} = action.payload;
            return{
                ...state,
                listTask:data};
        case taskConstants.FETCH_TASK_FAIL:
            const {error}  = action.payload;
            toastError(error);
            return{
                ...state,
                listTask:[]};
            //tìm kiếm dữ liệu
        case taskConstants.FITLTER_TASK_SUCCESS:{
            const {data} =action.payload;
            return{
                ...state,
                listTask:data
            };
        }

        case taskConstants.ADD_TASK:{
            return {
                ...state,
                taskEditing:null
            };
        }
        case taskConstants.ADD_TASK_SUCCESS:{
            const {data} = action.payload;
            toastSuccess('Thêm mới công việc thành công');
            return{
                ...state,
                listTask:[data].concat(state.listTask)
            };
        }
        case taskConstants.ADD_TASK_FAIL:{
            const {error} = action.payload;
            toastError(error);
            return{
                ...state,
            };
        }
        case taskConstants.SET_TASK_EDITING:{
            const {task} = action.payload;
            return{
                ...state,
                taskEditing:task
            };
        }
        case taskConstants.UPDATE_TASK:{
            return{
                ...state,
            };
        }
        case taskConstants.UPDATE_TASK_SUCCESS:{
            const{data} = action.payload;
            const {listTask} = state;
            const index = listTask.findIndex(item=>item.id=== data.id);
            if(index!==-1){
                const newList =[
                    ...listTask.slice(0,index),
                    data,
                    ...listTask.slice(index + 1),
                ];
                toastSuccess('Chỉnh sửa công việc thành công');
                return{
                    ...state,
                    listTask:newList
                };
            }
                return{
                    ...state,
                };   
        }
        case taskConstants.UPDATE_TASK_FAIL:{
            const {error} = action.payload;
            toastError(error);
            return{
                ...state,
            };
        }



        case taskConstants.DELETE_TASK:{
            return{
                ...state,
            };
        }
        case taskConstants.DELETE_TASK_SUCCESS:{
            const{data :taskId } = action.payload;
            toastSuccess('Xóa công việc thành công');
            return{
                ...state,
                listTask:state.listTask.filter(item=>item.id!==taskId)
            };
        }
        case taskConstants.DELETE_TASK_FAIL:{
            const {error} = action.payload;
            toastError(error);
            return{
                ...state,
            };
        }

        default: return state;
    }
};
export default reducer;