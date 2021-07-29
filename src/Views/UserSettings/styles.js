import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#242322',
        maxWidth: '1280px',
        margin: '0 auto',
    },
    content: {
        paddingLeft: '30px',
    },
    title: {
        marginTop: '100px',
    },
    category: {
        marginTop: '30px',
    },
    imageContainer: {
      marginTop: '25px',
    },
    changeImageContainer: {
      marginTop: '25px',
    },
    image: {
        height: '250px',
        width: '250px',
    },
    saveButtonContainer: {
        textAlign: 'center',
        marginTop: '150px',
        marginBottom: '30px',
    },
    saveButton: {
        background: 'linear-gradient(45deg, #00b712 30%, #20bf55 90%)',
        borderRadius: 7,
        border: 0,
        color: 'white',
        height: 50,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .8)',
    },
}));

export { useStyles };
