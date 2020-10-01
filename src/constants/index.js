import AdminHomePage from './../containers/AdminHomePage/index';
// import Taskboard from './../containers/Taskboard/index';
import ManagerWork from './../containers/ManagerWork/index';
import LoginPage from './../containers/LoginPage/index'
import SignUpPage from '../containers/SignUpPage';

export const API_ENPOINT = 'http://localhost:3000';
export const API_ENPOINT_USER = 'http://localhost:8000';
export const STATUSE = [
    {
        value: 0,
        label: 'READY',
        badge: 'badge badge-danger'
    },
    {
        value: 1,
        label: 'PROGRESS',
        badge: 'badge badge-Warning'

    },
    {
        value: 2,
        label: 'COMPLETE',
        badge: 'badge badge-success'
    }
];
export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATED: 202,
    FAILD: 422
};
export const ADMIN_ROUTES = [
    {
        path: '/admin',
        name: 'Trang quản trị',
        exact: true,
        component: AdminHomePage
    },
    {
        path: '/admin/manager-work',
        name: 'Quản lí công việc',
        component: ManagerWork
    },

];
export const ROUTES = [
    {
        path: '/',
        name: 'Đăng nhập',
        exact: true,
        component: LoginPage,
    },
    {
        path: '/signup',
        name: 'Đăng kí',
        component: SignUpPage,
    }
]