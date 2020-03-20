import React,{Component} from 'react';
import style from './style';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Taskboard from '../Taskboard';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './../../commons/themes';
import {Provider} from 'react-redux';
import GobalLoadning from './../../components/goballoading/index';
import ModalComponent from './../../components/modalComponent/index';
//kết nối app.js với store phương pháp kết nối mới 
import configStore from './../../redux/configStore';
//import thư viện để thông báo 
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter,Switch, } from 'react-router-dom';
import {ADMIN_ROUTES} from './../../constants/index';
import AdminLayoutRoute from './../../commons/layout/AdminLayoutRoute';
const store =configStore();

class App extends Component {
  renderAdminRoute(){
    let xhtml = null;
    console.log(ADMIN_ROUTES);
      xhtml=ADMIN_ROUTES.map(route=>{
        return<AdminLayoutRoute key = {route.path} name = {route.name}  path={route.path} component= {route.component} exact = {route.exact}  />;
      });
    return xhtml;
  }
  render() {
    return (
      //tương tự như phương pháp cũ dùng provider bao bọc ở ngoài
      <Provider store ={store} >
       <BrowserRouter>
          <ThemeProvider theme = {theme} >
            <CssBaseline />
            <ToastContainer/> 
            <GobalLoadning/>
            {/* thông báo đành công hoặc thất bại */}
            {/* <Taskboard/> */}
            <Switch>
              {this.renderAdminRoute()}
            </Switch>
            <ModalComponent/>
        </ThemeProvider>
      </BrowserRouter>
      </Provider>
    );
  }
}
export default withStyles(style)(App);
