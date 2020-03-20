// import * as api from './../apis/task';
import * as taskConstants from './../constants/task';
import { STATUSE  } from './../constants/index';
export const fetchListTask = (params ={})=>{
    return{
        type :taskConstants.FETCH_TASK,
        payload:{
            params
        }
    };
};
export const fetchListTaskSuccess = data=>{
    return{
        type :taskConstants.FETCH_TASK_SUCCESS,
        payload:{
            data
        }
    };
};
export const fetchListTasFail = error=>{
    return{
        type :taskConstants.FETCH_TASK_FAIL,
        payload:{
            error
        }
    };
};
/**
 * b1:fetchListTaskRequest,
 * b2:Reset:state.task=>[],
 * b3:fetchListTaskSuccess,
 * 
 */
// export const fetchListTaskRequest = ()=>{
//     return dispatch =>{
//         dispatch(fetchListTask());
//         api.getList().then(res=>{
//             const{data}=res;
//             dispatch(fetchListTaskSuccess(data));
//         }).catch(error=>{
//             dispatch(fetchListTasFail(error));
//         });
//     };
// };

//tìm kiếm công việc
export const filterTask = keyWord =>({
    type:taskConstants.FITLTER_TASK,
    payload:{
        keyWord
    }
});
export const filterTaskSuccess = data=>({
    type:taskConstants.FITLTER_TASK_SUCCESS,
    payload:{
        data
    }
});
//thêm công việc
export const addTask = (title,descreption)=>{
return{
        type :taskConstants.ADD_TASK,
        payload:{
            title,
            descreption
        }
    };
};
export const addTaskSuccess = data=>{
    return{
        type :taskConstants.ADD_TASK_SUCCESS,
        payload:{
            data
        }
    };
};
export const addTaskFail = error=>{
    return{
        type :taskConstants.ADD_TASK_FAIL,
        payload:{
            error
        }
    };
};

export const setTaskEditing = task=>{
    return{
        type :taskConstants.SET_TASK_EDITING,
        payload:{
            task
        }
    };
};

export const updateTask = (title,descreption ,status = STATUSE[0].value )=>{
    return{
            type :taskConstants.UPDATE_TASK,
            payload:{
                title,
                descreption,
                status
            }
        };
    };
export const updateTaskSuccess = (data)=>{
    return{
            type :taskConstants.UPDATE_TASK_SUCCESS,
            payload:{
                data
            }
        };
    };
export const updateTaskFail = error=>{
    return{
            type :taskConstants.UPDATE_TASK_FAIL,
            payload:{
                error
            }
        };
    };
export const deleteTask = id =>{
    return{
        type:taskConstants.DELETE_TASK,
        payload:{
            id
        }
    };
};
export const deleteTaskSuccess =data=>{
    return{
        type:taskConstants.DELETE_TASK_SUCCESS,
        payload:{
            data
        }
    };
};
export const deleteTaskFail = error=>{
    return{
        type:taskConstants.DELETE_TASK_FAIL,
        payload:{
            error
        }
    };
};
