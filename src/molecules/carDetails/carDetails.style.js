import {
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    img: {
        backgroundSize:'contain',
        height: '39rem',
        backgroundColor: '#EDEDED',
    },
    detailsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '2.4rem',
        width: '80rem',
    },
    prodAvailability: {
        maxWidth: '45.7rem'
    },
    saveContainer: {
        border: `0.1rem solid ${theme.palette.divider}`,
        margin: '0 0 0 2.4rem',
        padding: '2.4rem',
        width: '30rem',
        display: 'flex',
        flexDirection: 'column',
    },
    itemTitle: {
        fontWeight: 700,
        fontSize: '3.2rem'
    },
    itemSubTitle: {
        fontWeight: 700,
        fontSize: '1.8rem',
        margin: '1.2rem 0',
    },
    button: {
        width: '12.8rem',
        height: '3.2rem',
        color: '#fff',
        backgroundColor: '#EA7F28',
        alignSelf: 'flex-end',
        fontSize: '1.4rem',
        '&:hover': {
            backgroundColor: '#D37324'
        }
    }
}));

export default useStyles;