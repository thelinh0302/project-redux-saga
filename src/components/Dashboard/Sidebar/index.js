import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import { ADMIN_ROUTES } from './../../../constants/index';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { NavLink } from 'react-router-dom';
class SideBar extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         open:false,
    //     };
    // }
    toggleDrawer = value => {
        const { onToggleSideBar } = this.props;
        if (onToggleSideBar) {
            onToggleSideBar(value);
        }
    }
    renderList = () => {
        const { classes } = this.props;
        let xhtml = null;
        xhtml = (
            <div className={classes.list}>
                <List component="div">
                    {ADMIN_ROUTES.map(item => {
                        return (
                            <NavLink to={item.path} exact={item.exact} className={classes.menuLink} activeClassName={classes.menuLinkActive} key={item.path}>
                                <ListItem
                                    className={classes.listItem}
                                    key={item.path}
                                    button
                                >
                                    {item.name}
                                </ListItem>
                            </NavLink>
                        );
                    })}
                </List>
            </div>
        );
        return xhtml;
    }
    render() {
        const { classes, showSideBar } = this.props;
        return (
            <Drawer

                open={showSideBar}
                classes={{ paper: classes.drawerPaper }}
                variant="persistent"
                onClose={() => this.toggleDrawer(false)}
            >
                {this.renderList()}
            </Drawer>
        );
    }
}

export default withStyles(styles)(SideBar);