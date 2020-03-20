import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import {  Modal } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {compose, bindActionCreators } from 'redux';
import * as modalAction from './../../actions/modal';
class ModalComponent extends Component {
    render() {
        const {open,classes,component,title } = this.props;
        const {modalActionCreator} = this.props;
        const {hideModel} = modalActionCreator;
        return (
            <Modal open={open} onClose={hideModel}>
                <div className={classes.paper} >
                    <div className ={classes.header} >
                            <span className ={classes.title} >
                                {title}
                            </span>
                            <ClearIcon onClick={hideModel} className ={classes.clearIcone} />
                    </div>
                    <div className={classes.content} >
                        {component}
                    </div>
                </div>
            </Modal>

        );
    }
}
ModalComponent.propTypes = {
    classes:PropTypes.object,
    modalActionCreator:PropTypes.shape({
        hideModal:PropTypes.func
    })
};
const mapStateToProps = state=>{
    return{
        open :state.modal.showModal,
        component:state.modal.component,
        title :state.modal.title,
    };
};
const mapDispatchToProps = dispatch=>({
    modalActionCreator:bindActionCreators(modalAction,dispatch)
});
const withConnect = connect (mapStateToProps,mapDispatchToProps);
export default compose(
    withConnect,
    withStyles(styles),
)(ModalComponent);