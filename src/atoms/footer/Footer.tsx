import React from 'react';
import { makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  footerContainer: {
    borderTop: '0.1rem solid #EDEDED',  
    padding: '2.4rem 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '8rem',
    fontSize: '1.4rem',
  }
}));

const Footer = () => {
    const style = useStyles();
    return <footer className={style.footerContainer}>© Auto1 Group 2018</footer>
}

export default React.memo(Footer);