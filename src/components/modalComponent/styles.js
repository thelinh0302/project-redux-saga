const styles = (theme)=>({
    paper:{
        top:  '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
    },
    textField:{
        width: '100%'
    },
    header:{
        backgroundColor: theme.color.primary,
        color: theme.color.textColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(2),

    },
    title:{
        color: theme.color.textColor,
        fontSize: '16pt'
    },
    content:{
        padding: theme.spacing(2),
    },
    clearIcone:{
        cursor: 'pointer',
        fontSize: '20pt'
    }
});
export default styles;