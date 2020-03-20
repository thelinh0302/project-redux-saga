import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';

class TaskItem extends Component {
    render() {
        const {task,classes,status,onEdit,deleteTask} = this.props;
        return (
            <Card key={task.id} className = {classes.card}>
                           <CardContent>
                                <Grid container justify="space-between" alignItems="center" >
                                    <Grid item md={8} >
                                        <Typography  component="h2">
                                            {task.title}
                                        </Typography>
                                    </Grid>
                                    <Grid item md ={4} >
                                        {status.label}
                                    </Grid>
                                    <p> {task.descreption} </p>
                                </Grid>
                           </CardContent>
                           <CardActions  className = {classes.cardAction}>
                           <Fab onClick={onEdit}  color="primary" aria-label="add" size="small" >
                                <Icon fontSize= "small">
                                    edit_icon
                                </Icon>
                            </Fab>
                            <Fab onClick = {deleteTask} color="secondary" aria-label="delete" size="small"  >
                                <Icon fontSize= "small">
                                   delete_icon
                                </Icon>
                            </Fab>
                           </CardActions>
                       </Card>
        );
    }
}

export default withStyles(styles)(TaskItem);