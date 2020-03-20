const validate = values=>{
    const errors ={};
    const {title} = values;
    if(!title){
        errors.title= 'vui lòng nhập';
    }else if( title.trim() && title.length<5){
        errors.title = 'Tiêu đề phải 5 kí tự';
    }
    return errors;
};
export default validate;