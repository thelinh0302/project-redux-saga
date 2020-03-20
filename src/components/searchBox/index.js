import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

class SearchBox extends Component {
    render() {
        const { classes,handleChange} = this.props;
        return (
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        // id="standard-required"
                        label="Tìm kiếm"
                        autoComplete = "off"
                        className = {classes.textField}
                        onChange = { handleChange }
                        margin = "normal"
                        placeholder = "Nhập từ khóa"
                    />
                </form>
        );
    }
}
SearchBox.propTypes={
    classes:PropTypes.object,
    handleChange:PropTypes.func
};

export default  withStyles(styles)(SearchBox) ;