import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
class DarkMod extends Component {
    render() {
        const { classes, showDarkMod } = this.props
        let xhtml = null;
        if (showDarkMod) {
            xhtml = (
                <div className={classes.DarkMod}>
                    dashmod nef
                </div>
            )
        }
        return xhtml
    }
}
const mapStateToProp = state => ({
    showDarkMod: state.ui.showDarkMod
})
const withConnect = connect(mapStateToProp, null)
export default compose(
    withConnect,
    withStyles(styles)
)(DarkMod);