import * as types from './../constants/ui';
const initialState = {
    showLoading : false,
    showSideBar:false
};
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case types.showLoading:
           return{
               ...state,
               showLoading:true
           };
        case types.hideLoading:
             return{
                ...state,
                showLoading:false
            };
        case types.showSideBar:
            return{
                ...state,
                showSideBar:true
            };
        case types.hideSideBar:
            return{
                ...state,
                showSideBar:false
            };
        default: return state;
    }
};
export default reducer;