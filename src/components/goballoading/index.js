import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import loadingIcon from './../../assets/images/throbber_12.gif';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
// import  * as uiAction from './../../actions/ui';
class GobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    var xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.gobalLoading}>
          <img src={loadingIcon} alt="loadning" className={classes.icon} />
        </div>
      );
    }
    return xhtml;
  }
}
GobalLoading.propTypes = {
  classes: PropTypes.object,
};
const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};
const withConnect = connect(mapStateToProps, null);
export default compose(withStyles(styles), withConnect)(GobalLoading);
