import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { 
    // TextField,
    Grid, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {compose, bindActionCreators } from 'redux';
import * as modalAction from './../../actions/modal';
import * as createAction from './../../actions/task';
import { Field, reduxForm } from 'redux-form';
import styles from './styles';
import renderTextField from '../formHelper/textField';
import validate from './validate';
import renderSelectField from '../formHelper/selected';
class TaskForm extends Component {
    handleSubmitForm= data=>{
        const { taskActionCreator,taskEditing } = this.props;
        const { addTask,updateTask } = taskActionCreator;
        const {title,descreption,status} = data;
        if(taskEditing && taskEditing.id){
            updateTask(title,descreption,status);
        }else{
            addTask(title,descreption);
        }
       
        // console.log(data);
    };
    renderStatus = ()=>{
        let xhtml =null;
        const {taskEditing,classes} = this.props;
        if(taskEditing && taskEditing.id ){
            xhtml = (
                <Field 
                    id= "status"
                    label = "Trạng thái "
                    className = {classes.select}
                    name = "status"
                    component = {renderSelectField}
                >
                    <MenuItem value={0}>Ready</MenuItem>
                    <MenuItem value={1}>IN PROGRESS</MenuItem>
                    <MenuItem value={2}>COMPLETE</MenuItem>
                </Field>
            );
        }

        return xhtml;
    }
    render() {
        const {classes,handleSubmit,invalid,submitting,taskEditing} = this.props;
        const {modalActionCreator} = this.props;
        const {hideModel} = modalActionCreator;
return (
    <form onSubmit = { handleSubmit(this.handleSubmitForm) } >
        <Grid container >
            <Grid item md={12} >
                <Field 
                    id= "title"
                    label = "Tiêu đề "
                    className = {classes.textField}
                    margin = "normal"
                    name = "title"
                    component = {renderTextField}
                    validate = {this.required}
                    value ={taskEditing ? taskEditing.title:''}
                />
            </Grid>
            <Grid item md={12} >
                <Field
                    id = "descreption"
                    label = "Mô tả"
                    multiline
                    rowsMax = "4"
                    className = {classes.textField}
                    margin = "normal"
                    component = {renderTextField}
                    name = "descreption"
                    value ={taskEditing ? taskEditing.descreption:''}
                />
            </Grid>
            {this.renderStatus()}
            <Grid item md ={12} >
            <Box display="flex" flexDirection="row-reverse" mt={1} mb={2} >
                <Box ml={1} >
                <Button variant="contained" onClick = {hideModel} color ="secondary" >
                        Hủy bỏ 
                </Button>
                </Box>
                <Button disabled = {invalid||submitting} variant="contained" color ="primary" type="submit"  >
                        Lưu lại
                </Button>
            </Box>
            </Grid>
        </Grid>
    </form>
    );
    }
}
const mapStateToProps = state=>{
    return{
        taskEditing:state.task.taskEditing,
        initialValues:state.task.taskEditing
    };
};
const mapDispatchToProps = dispatch=>({
    modalActionCreator:bindActionCreators(modalAction,dispatch),
    taskActionCreator :bindActionCreators(createAction,dispatch)
});
const withConnect = connect (mapStateToProps,mapDispatchToProps);
const form_name= 'task_managerment';
const withReduxForm =reduxForm({
    form :form_name,
   validate
});
export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm,
)(TaskForm);