import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    page: {
        color: 'white',
    },
    container: {
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        marginTop: '130px',
        fontSize: '32px',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cards: {
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '25px',
        justifyContent: 'center',
    },
    item: {
        flex: '1 1 33,3333%',
        alignSelf: 'center',
        margin: '25px',
    },
}));

export { useStyles };
