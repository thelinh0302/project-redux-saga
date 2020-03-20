import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TaskList from '../../components/TaskList';
import { STATUSE } from '../../constants';
import TaskForm from '../../components/TaskForm';
import { connect } from 'react-redux';
import {compose,bindActionCreators } from 'redux';
import * as taskAction from '../../actions/task';
import * as modalAction from '../../actions/modal';
import PropTypes from 'prop-types';
import SearchBox from '../../components/searchBox/index';
class ManagerWork extends Component {
  handleEditTask = (task)=>{
    const { modalActionCreate,taskActionCreate } = this.props;
    const {setTaskEditing} = taskActionCreate;
    const { showModel,changeModelTitel,changeModelContent } = modalActionCreate;
    showModel();
    changeModelTitel('Sửa công việc');
    changeModelContent(<TaskForm/>);
    setTaskEditing(task);
  }
  showModalDelete = (task)=>{
    const { modalActionCreate,classes} = this.props;
    const { showModel,changeModelTitel,changeModelContent ,hideModel} = modalActionCreate;
    showModel();
    changeModelTitel('Xóa công việc');
    changeModelContent(
      <div className ={classes.modalDelte}>
        <div className={classes.modalConfirmText}>
          Bạn chắc chắn muốn xóa{''}
          <span className={classes.modalConfirmBold}> {task.title}</span>
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={1} mb={2} >
                <Box ml={1} >
                <Button variant="contained" onClick = {hideModel} color ="secondary" >
                        Hủy bỏ 
                </Button>
                </Box>
                <Button onClick = {()=>this.handlDelte(task)}  variant="contained" color ="primary" type="submit"  >
                        Xóa
                </Button>
            </Box>
      </div>
    );
  }
  handlDelte = task=>{
    const {id} =task;
    const { modalActionCreate,taskActionCreate} = this.props;
    const { hideModel} = modalActionCreate;
    const {deleteTask} = taskActionCreate;
    hideModel();
    deleteTask(id);


  }
  renderBoard = () => {
    const {listTask} = this.props; 
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSE.map((status, index) => {
          const taskFilter = listTask.filter(
            task => task.status === status.value
          );
          return <TaskList deleteTask = {this.showModalDelete} onEdit = {this.handleEditTask}  key={index} tasks={taskFilter} status={status} />;
        })}
      </Grid>
    );
    return xhtml;
  };
  handleChange = e =>{
    const {value} = e.target;
    const { taskActionCreate } = this.props;
    const {filterTask} = taskActionCreate;
    filterTask(value); 
  }
  renderBox = ()=>{
    let xhtml = null;
    xhtml =(
      <SearchBox handleChange ={this.handleChange} />
    );
    return xhtml;
  }
  componentDidMount(){
    const { taskActionCreate } = this.props;
    const {fetchListTask} = taskActionCreate;
    fetchListTask(); 
  }
  addNew = () => {
    const { modalActionCreate,taskActionCreate} = this.props;
    const { showModel,changeModelTitel,changeModelContent } = modalActionCreate;
    const {setTaskEditing} = taskActionCreate;
    setTaskEditing(null);
    showModel();
    changeModelTitel('Thêm mới công việc');
    changeModelContent(<TaskForm/>);
  }
  loadData = ()=>{
    const { taskActionCreate } = this.props;
    const {fetchListTask} = taskActionCreate;
    fetchListTask(); 
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
         <Button
          variant="contained"
          color="primary"
          className={classes.Button}
          onClick={this.loadData}
          style ={{ margin :20 }}

        >
           Load data
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.Button}
          onClick={this.addNew}
        >
          <AddIcon /> Thêm mới công việc
        </Button>
        { this.renderBox() }
        {this.renderBoard()}
      </div>
    );
  }
}
ManagerWork.propTypes={
  classes:PropTypes.object,
  taskActionCreate:PropTypes.shape({
    fetchListTask:PropTypes.func,
    filterTask:PropTypes.func
  }),
  modalActionCreate:PropTypes.shape({
    showModel:PropTypes.func,
    hideModel:PropTypes.func,
    changeModelTitel:PropTypes.func,
    changeModelContent:PropTypes.func,
  }),
  listTask:PropTypes.array
};
const mapStateToProps = state=>{
  return{
    listTask:state.task.listTask
  };
};

const mapDispatchToProps = dispatch=>{
  return{
    taskActionCreate :bindActionCreators(taskAction,dispatch),
    modalActionCreate :bindActionCreators(modalAction,dispatch),
  };
};
const withConnect = connect (mapStateToProps,mapDispatchToProps);
export default compose(
  withStyles(styles),
  withConnect
)(ManagerWork);
