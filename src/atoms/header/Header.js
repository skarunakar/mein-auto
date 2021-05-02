import React from 'react';

import logo from '../../assets/images/logo.svg'
import style from './header.module.scss';

const Header = () => {
    return (
    <div className={style.headerContainer}>
        <a href='/'>
        <img className={style.logo} src={logo} alt="mein-auto" />
        </a>
        <div className={style.rightheaderPanel}>
           <a href='/purchase'>Purchase</a>
           <a href='/orders'>My Orders</a>
           <a href='/Sell'>Sell</a>
        </div>
    </div>
    );
}

export default React.memo(Header);