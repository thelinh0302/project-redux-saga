import AdminHomePage from './../containers/AdminHomePage/index';
import Taskboard from './../containers/Taskboard/index';
import ManagerWork from './../containers/ManagerWork/index';
export const API_ENPOINT = 'http://localhost:3000';
export const STATUSE = [
    {
        value : 0,
        label :'READY',
        badge : 'badge badge-danger'
    }, 
    {
        value:1,
        label:'PROGRESS',
        badge : 'badge badge-Warning'

    },
    {
        value:2,
        label:'COMPLETE',
        badge : 'badge badge-success'
    }
];
export const STATUS_CODE ={
    SUCCESS :200,
    CREATED:201,
    UPDATED:202,
};
export const ADMIN_ROUTES=[
    {
        path:'/',
        name:'Trang quản trị',
        exact:true,
        component:AdminHomePage
    },
    {
        path:'/manager-work',
        name:'Quản lí công việc',
        component:ManagerWork
    }
];