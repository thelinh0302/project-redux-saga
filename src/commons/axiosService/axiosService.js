import axios from 'axios';
class axiosService {
    constructor(){
        const instance = axios.create();
        instance.interceptors.response.use(this.handSuccess,this.handError);
        this.instance =instance;
    }
    handSuccess(response){
        return response;
    }
    handError(error){
        return Promise.reject(error);
    }
    //lấy dữ liệu
    get(url){
        return this.instance.get(url);
    }
    //thêm dữ liệu
    post(url,body){
        return this.instance.post(url,body);
    }
    put(url,body){
         return this.instance.put(url,body);
    }
    delete(url){
        return this.instance.delete(url);
    }
}
export default new axiosService();