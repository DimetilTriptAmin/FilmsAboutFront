import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    '&:MuiContainer-maxWidthLg': {
        backgroundColor: '#000',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '400px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.55)',
        padding: '20px',
        borderRadius: '20px',
        color: '#fff', 
        margin: '0 auto',
        marginTop: '150px',
        backgroundColor: '#242322',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
    },

    title: {
        fontSize: '50px',
        fontFamily: 'Roboto',
        fontWeight: '700',
        textAlign: 'center',
    },

    input: {
        color: 'white',
        border: '0',
        fontSize: '20px',
        width: '100%',
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'grey',
        },
        '& .MuiInput-underline': {
            borderBottomColor: 'green',
        },
        
        '& .MuiInputLabel-root': {
            color: 'grey',
        },

        '& .MuiInput-underline:hover:not($disabled):not($focused):not($error):before': {
            borderBottom: `2px solid #ffffff`,
          },
    },

    field: {
        margin: '10px 10px 30px 10px',
        width: '300px',
    },

    submit: {
        margin: '25px 10px 10px 10px',
        color: '#dcdcdd',
        background: 'linear-gradient(45deg, #00b712 30%, #20bf55 90%)',
        border: '0',
        fontSize: '20px',
    },
    link: {
        textAlign: 'center',
        color: 'grey',
    },
});

export default useStyles;
