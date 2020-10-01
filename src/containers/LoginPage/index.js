import React, { Component } from 'react';
import { withStyles, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../../components/formHelper/textField';
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import * as userAction from './../../actions/user'
class LoginPage extends Component {
    handleSubmitForm = (data) => {
        const { userActionCreator } = this.props
        const { user } = userActionCreator
        const { email, password } = data
        user(email, password)
    }
    render() {
        const { classes, handleSubmit } = this.props;
        return (
            <div className={classes.background} >
                <div className={classes.login} >
                    <Card>
                        <CardContent>
                            <form onSubmit={handleSubmit(this.handleSubmitForm)} >
                                <div className="text-xs-center pb-xs" >
                                    <Typography variant="caption" >
                                        Đăng nhập để tiếp tục
                                    </Typography>
                                </div>
                                <Field
                                    id="email"
                                    label="Email"
                                    name="email"
                                    className={classes.textField}
                                    fullWidth
                                    component={renderTextField}
                                    margin="normal"
                                />
                                <Field
                                    id="password"
                                    label="PassWord"
                                    name="password"
                                    component={renderTextField}
                                    className={classes.textField}
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                />
                                <Button variant="contained" color="primary" fullWidth type="submit">
                                    Login
                                </Button>
                                <div className="pt-1 text-md-center" >
                                    <Link to="/signup" >
                                        <Button> Đăng kí tài khoảng mới </Button>
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
const form_name = 'login'
const withReduxForm = reduxForm({
    form: form_name
})
export const mapDispatchToProps = dispatch => {
    return {
        userActionCreator: bindActionCreators(userAction, dispatch)
    }
}
const withConnect = connect(null, mapDispatchToProps)
export default compose(
    withConnect,
    withReduxForm,
    withStyles(styles)
)(LoginPage);