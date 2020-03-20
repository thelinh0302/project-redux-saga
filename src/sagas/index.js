import { 
    fork,take,
    call,put,delay,takeLatest,select,takeEvery } from 'redux-saga/effects';
import { getList,addTask,updateTask, deleteTask } from './../apis/task';
import { showLoading,hideLoading } from '../actions/ui';
import {STATUS_CODE,STATUSE}  from './../constants/index';
import * as takeType from './../constants/task';
import { fetchListTaskSuccess,fetchListTasFail,addTaskSuccess, addTaskFail, fetchListTask, updateTaskSuccess, updateTaskFail, deleteTaskSuccess, deleteTaskFail} from '../actions/task';
import { hideModel } from '../actions/modal';
/**
 * b1:thực thi action dispatch
 * b2:gọi api
 * b3:Kiểm tra satus code 
 * nếu thành công...
 * nếu thất bại...
 * 
 */
// FORK ĐƯỢC THAY THẾ BỞI TAKELATEST 
function* watchFetchListTaskAction(){
    while(true){
    const action= yield take(takeType.FETCH_TASK);
    yield put(showLoading());
        // block cho đến khi fetch-task xog
        //truyền param
    const {params} = action.payload;
    const res=yield call(getList,params);
            // block cho đến khi  call xog;
    const { status,data } = res;
        if(status === STATUS_CODE.SUCCESS){
            //dispatch action fetch list task success
            yield put(fetchListTaskSuccess(data)); 
        }else{
            //dispatch action fetch list task fails
            yield put(fetchListTasFail(data));
        }
        yield delay(1000);
        yield put(hideLoading());
    }
}

// function* watchCreateTaskAction(){
//     console.log('create fecth list task');
// }
//search du lieu
// function* fetchTaskSaga(){
//     yield put(showLoading());
//         const res=yield call(getList);
//         // block cho đến khi  call xog;
//         const { status,data } = res;
//         if(status === STATUS_CODE.SUCCESS){
//             //dispatch action fetch list task success
//             yield put(fetchListTaskSuccess(data)); 
//         }else{
//             //dispatch action fetch list task fails
//             yield put(fetchListTasFail(data));
//         }
//         yield delay(1000);
//         yield put(hideLoading());
// }

function* filterTaskSaga({payload}){
    yield delay(500);
    const {keyWord} = payload;
    yield put(fetchListTask({
        q:keyWord
    }),
    );
};
//add công việc
function* addTaskSaga({payload}){
    const {title,descreption} =payload;
    yield put(showLoading());
    const resp = yield call(addTask,{
        title,
        descreption,
        status:STATUSE[0].value,
    });
    const { data,status } = resp;
    if(status === STATUS_CODE.CREATED){
        yield put(addTaskSuccess(data));
        yield put(hideModel());
    }else{
        yield put(addTaskFail(data));
    }
    yield delay(1000);
    yield put(hideLoading());
} 

function* updateTaskSaga( {payload} ){
    const {title,descreption,status} = payload;
    const taskEditing = yield select(state=>state.task.taskEditing);
    yield put(showLoading());
    const resp = yield call(updateTask,{ title,descreption,status},taskEditing.id);
    const { data,status:statuCode } = resp;
    if(statuCode === STATUS_CODE.SUCCESS){
        yield put(updateTaskSuccess(data));
        yield put(hideModel());
    }else{
        yield put(updateTaskFail(data));
    }
    yield delay(1000);
    yield put(hideLoading());
}

function* deleteTaskSaga( {payload} ){
    const {id} = payload;
    yield put(showLoading());
    const resp = yield call(deleteTask,id);
    // console.log(resp);
    const { data,status:statuCode } = resp;
    if(statuCode === STATUS_CODE.SUCCESS){
        yield put(deleteTaskSuccess(id));
        yield put(hideModel());
    }else{
        yield put(deleteTaskFail(data));
    }
    yield delay(1000);
    yield put(hideLoading());

}
 function* rootSaga(){
    yield fork( watchFetchListTaskAction);
    // yield takeLatest(takeType.FETCH_TASK,fetchTaskSaga);
    // yield fork( watchCreateTaskAction); 
    //dùng takelatest takelatest bản nâng cấp của fork
    yield takeLatest(takeType.FITLTER_TASK,filterTaskSaga);

    yield takeEvery(takeType.ADD_TASK,addTaskSaga);

    yield takeLatest(takeType.UPDATE_TASK,updateTaskSaga);

    yield takeLatest(takeType.DELETE_TASK,deleteTaskSaga);

}
export default rootSaga;