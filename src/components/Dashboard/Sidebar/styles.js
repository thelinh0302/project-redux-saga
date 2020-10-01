const styles = theme => ({
    drawerPaper: {
        width: 240,
        zIndex: 10,
        maxWidth: 240,
        height: '100%',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            // display: 'block',
            position: 'fixed',
            marginTop: '50px'
        }

    },
    menuLink: {
        textDecoration: 'none',
        color: theme.color.defaultColor,
        fontSize: '15pt'
    },
    menuLinkActive: {
        '&>div': {
            backgroundColor: 'gray',
            transition: '0.5s'
        }
    }
});
export default styles;