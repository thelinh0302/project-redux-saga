import React, { Component } from 'react';
import { withStyles, Grid, Card, CardContent, Button, Typography } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import AddIcon from '@material-ui/icons/Add';
import ShopIcon from '@material-ui/icons/Shop';
import ShopOutlinedIcon from '@material-ui/icons/ShopOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import styles from './styles'
import Rechart from '../../components/recharts';

class AdminHomePage extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.HomeAdmin}>
                <Grid container spacing={2}>
                    <Grid item lg={3} md={8} xs={12} >
                        <Card className={classes.Card}>
                            <CardContent className={classes.CardContent}>
                                <Grid container justify="space-between" alignItems="center">
                                    <Grid item lg={4}>
                                        <Button className={classes.buttonIcone} variant="contained" color="primary">
                                            <PeopleAltOutlinedIcon className={classes.icon} />
                                        </Button>
                                    </Grid>
                                    <Grid item lg={8}>
                                        <Typography className={classes.text} component="h2" >
                                            Nhân viên  <PeopleIcon />
                                        </Typography>
                                        <Typography className={classes.number} component="h2" >
                                            <AddIcon /> 75
                                            </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Grid className={classes.grid12} item lg={12} >
                                <Typography> update </Typography>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={8} xs={12} >
                        <Card className={classes.Card}>
                            <CardContent className={classes.CardContent}>
                                <Grid container justify="space-between" alignItems="center">
                                    <Grid item lg={4}>
                                        <Button className={classes.buttonIcone2} variant="contained" color="primary" >
                                            <ShopOutlinedIcon className={classes.icon} />
                                        </Button>
                                    </Grid>
                                    <Grid item lg={8}>
                                        <Typography className={classes.text} component="h2" >
                                            Sản phẩm  <ShopIcon />
                                        </Typography>
                                        <Typography className={classes.number} component="h2" >
                                            <AddIcon /> 275
                                            </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Grid className={classes.grid12} item lg={12} >
                                <Typography> update </Typography>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={8} xs={12} >
                        <Card className={classes.Card}>
                            <CardContent className={classes.CardContent}>
                                <Grid container justify="space-between" alignItems="center">
                                    <Grid item lg={4}>
                                        <Button className={classes.buttonIcone3} variant="contained" color="primary" >
                                            <CreditCardOutlinedIcon className={classes.icon} />
                                        </Button>
                                    </Grid>
                                    <Grid item lg={8}>
                                        <Typography className={classes.text} component="h2" >
                                            Doanh thu <MonetizationOnIcon />
                                        </Typography>
                                        <Typography className={classes.number} component="h2" >
                                            7520 <AttachMoneyIcon />
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Grid className={classes.grid12} item lg={12} >
                                <Typography> update </Typography>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={8} xs={12} >
                        <Card className={classes.Card}>
                            <CardContent className={classes.CardContent}>
                                <Grid container justify="space-between" alignItems="center">
                                    <Grid item lg={4}>
                                        <Button className={classes.buttonIcone4} variant="contained" color="primary">
                                            <ChatBubbleOutlineOutlinedIcon className={classes.icon} />
                                        </Button>
                                    </Grid>
                                    <Grid item lg={8}>
                                        <Typography className={classes.text} component="h2" >
                                            Phản Hồi  <ChatBubbleIcon />
                                        </Typography>
                                        <Typography className={classes.number} component="h2" >
                                            <AddIcon /> 75
                                            </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Grid className={classes.grid12} item lg={12} >
                                <Typography> update </Typography>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container className={classes.Grid2} >
                    <Grid item lg={6} md={6} xs={12} >
                        <Rechart />
                    </Grid>
                    <Grid item lg={6} md={6} xs={12} >
                        <Rechart />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(AdminHomePage);