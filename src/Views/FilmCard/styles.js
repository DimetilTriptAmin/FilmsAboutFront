import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      backgroundColor: '#242322',
    },
    header: {
      color: theme.palette.common.white,
    },
    rating: {
      fontStyle: 'italic',
      color: theme.palette.common.white,
    },
    media: {
      paddingTop: '100%',
    },
    cardContent: {
      height: '100px',
      color: 'white',
    },
    button: {
      color: theme.palette.common.white,
    }
  }));

  export {useStyles};