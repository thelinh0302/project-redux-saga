import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    color: {
      primary:'#D32F2F',
      secondary:'#03A9F4',
      error: '#FFC107',
      icone:'red',
      textColor: 'white',
      defaultColor:'#212121',
      hover:'rgba(0,0,0,0.08)'
    },
    typography:{
        fontFamily:'Roboto'
    },
    shape:{
        borderRadius:4,
        backgroundColor: '#E64A19',
        textColor:'white',
        border: '#ccccc'
    }
  });
  export default theme;