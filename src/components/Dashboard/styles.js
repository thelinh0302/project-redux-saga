
const styles = (theme)=>({
    wrapper:{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh'
    },
    wrapperContent:{
        width: '100%',
        padding: 10,
        transition: theme.transitions.create('margin',{
            easing:theme.transitions.easeIn,
            duration:theme.transitions.duration.enteringScreen
        }),

    },
    shiftLeft:{
        marginLeft: -240,
        transition: theme.transitions.create('margin',{
            easing:theme.transitions.easeOut,
            duration:theme.transitions.duration.LeavingScreen
        }),
    }
});
export default styles;