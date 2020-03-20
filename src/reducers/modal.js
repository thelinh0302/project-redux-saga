import * as typesModal from '../constants/Modal';
const initialState = {
    showModal : false,
    component:null
};
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case typesModal.SHOW_MODEL:
           return{
               ...state,
               showModal:true
           };
        case typesModal.HIDE_MODEL:
             return{
                ...state,
                showModal:false,
                title : '',
                componet:null
            };
        case typesModal.CHANGE_MODEL_TITLE:
            const {title} = action.payload;
            return{
                ...state,
                title
            };
        case typesModal.CHANGE_MODEL_CONTENT:
            const {component} = action.payload;
            return{
                ...state,
                component
            };
        default: return state;
    }
};
export default reducer;