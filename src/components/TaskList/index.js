import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import TaskItem from '../TaskItem';
class TaskList extends Component {
    render() {
        const { classes,tasks,status,onEdit,deleteTask} = this.props;
        return <Grid item md={4} xs={12} key ={status.value} >
        <Box mt={2} mb={2}>
        <div className = {classes.status} > {status.label} </div>
        </Box>
        <div className = {classes.wrapperListTask} > 
            {
                tasks.map(task =>{
                    return(
                       <TaskItem deleteTask = { ()=>deleteTask(task) } onEdit ={()=>onEdit(task)} key ={task.id} status={status} task={task} classes={classes} />
                    );
                })
            }
        </div>
    </Grid>;
    }
}

export default withStyles(styles)(TaskList);