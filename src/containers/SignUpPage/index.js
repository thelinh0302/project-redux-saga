import React, { Component } from 'react';
import { withStyles, Typography, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Link } from 'react-router-dom'
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
class SignUpPage extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className= {classes.background} > 
               <div className = {classes.signUp} >
                    <Card>
                        <CardContent>
                            <form>
                                <div className ="text-xs-center pb-xs" >
                                    <Typography variant="caption" >
                                       Đăng kí mới 
                                    </Typography>
                                </div>
                                <TextField 
                                    id="email"
                                    label="Email"
                                    className = {classes.textField}
                                    fullWidth
                                    margin = "normal"
                                />
                                <TextField
                                    id="password"
                                    label = "PassWord"
                                    className = {classes.textField}
                                    type = "password"
                                    fullWidth
                                    margin = "normal"
                                />
                                <TextField
                                    id="cpassword"
                                    label = " Confirm PassWord"
                                    className = {classes.textField}
                                    type = "password"
                                    fullWidth
                                    margin = "normal"
                                />
                                <FormControlLabel control={ <Checkbox value="agree"/>} label="Đồng ý điều khoản" className= {classes.fullWidth} />
                                <Button variant="contained" color = "primary" fullWidth type = "submit"> 
                                    Login
                                </Button>
                                <div className = "pt-1 text-md-center" >
                                    <Link to = "/login" >
                                        <Button> Đã có tài khoảng</Button>
                                    </Link>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
               </div>
            </div>
        );
    }
}

export default withStyles(styles)(SignUpPage);