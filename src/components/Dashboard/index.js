import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import Header from './Header/index';
import SideBar from './Sidebar/index';
import DarkMod from './DarkMod'
import { connect } from 'react-redux';
import * as uiAction from './../../actions/ui';
import { compose, bindActionCreators } from 'redux';
import cn from 'classnames';
class DashBoard extends Component {
    onToggleSideBar = value => {
        const { uiActionCreator } = this.props;
        const { showSideBar, hideSideBar } = uiActionCreator;
        if (value === true) {
            showSideBar();
        } else {
            hideSideBar();
        }
    }
    render() {
        const { children, classes, name, showSideBar } = this.props;
        console.log(name);
        return (
            <div className={classes.dashBoard} >
                <Header onToggleSideBar={this.onToggleSideBar} showSideBar={showSideBar} name={name} />

                <div className={classes.wrapper} >
                    <SideBar showSideBar={showSideBar} onToggleSideBar={this.onToggleSideBar} />
                    <div className={cn(classes.wrapperContent, {
                        [classes.shiftLeft]: showSideBar === false
                    })}>

                        {children}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProp = state => {
    return {
        showSideBar: state.ui.showSideBar
    };
};
const mapDispatchToProp = (dispatch) => {
    return {
        uiActionCreator: bindActionCreators(uiAction, dispatch)
    };
};
const withConnect = connect(mapStateToProp, mapDispatchToProp);
export default compose(
    withConnect,
    withStyles(styles)
)(DashBoard);