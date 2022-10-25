import { makeStyles } from '@mui/styles';
import { within } from '@testing-library/react';

export default makeStyles((theme) => ({
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
  },
  textField: {
    width: '40%',
    [theme.breakpoints.up('sm')]: {
      '&:focus-within': {
        width: '70%'
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  input: {
    color: theme.palette.mode === 'light' && 'dark',
    filter: theme.palette.mode === 'light' && 'invert(1)',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-10px',
      marginBottom: '10px',
    },
  },
}));
