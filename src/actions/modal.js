import * as modalTypes from '../constants/Modal';
 
export const showModel =()=>({
    type :modalTypes.SHOW_MODEL
});
export const hideModel =()=>({
    type :modalTypes.HIDE_MODEL
});
export const changeModelTitel =(title)=>({
    type :modalTypes.CHANGE_MODEL_TITLE,
    payload:{
        title
    }
});
export const changeModelContent =component=>({
    type :modalTypes.CHANGE_MODEL_CONTENT,
    payload:{
        component
    }
});
