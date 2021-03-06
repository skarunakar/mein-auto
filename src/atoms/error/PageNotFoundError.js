import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import style from './pageNotFoundError.module.scss';

const PageNotFoundError = () => {
    return (<div className={style.errorContainer}>
        <img className={style.logo} src={logo} alt='logo' />
        <h1>404 - Not Found</h1>
        <div className={style.errorDetail}>Sorry, the page you are looking for does not exist</div>
        <div className={style.errorDetail}>You can always go back to the <Link to='/'>homepage</Link></div>
    </div>)

}

export default React.memo(PageNotFoundError);