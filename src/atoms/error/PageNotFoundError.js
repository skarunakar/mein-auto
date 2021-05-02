import React from 'react';

import logo from '../../assets/images/logo.svg'
import style from './pageNotFoundError.module.scss'

const PageNotFoundError = () => {
    return (<div className={style.errorContainer}>
        <img  src={logo} alt='logo' />
        <h3>404 - Not Found</h3>
        <h5>Sorry, the page you are looking for does not exist</h5>
        <h5>You Can always go back to the <a href='/'>homepage</a></h5>
    </div>)

}

export default React.memo(PageNotFoundError);