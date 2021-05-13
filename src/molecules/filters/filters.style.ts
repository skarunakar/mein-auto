import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '12rem',
        margin: '0 2.4rem',
        border: `0.1rem solid ${theme.palette.divider}`,
        padding: '1.2rem 2.4rem 2.4rem',
    },
    formControl: {
        margin: '1.2rem 0',
    },
    select: {
        height: '4rem',
        textTransform: 'capitalize',
        padding: '0.8rem',
        backgroundColor: '#fff',
        border: `0.1rem solid ${theme.palette.divider}`,
        fontSize: '1.4rem',
    },
    menuItem: {
        textTransform: 'capitalize',
        fontSize: '1.4rem',
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
})
)

export default useStyles