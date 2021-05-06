import React from 'react';

import logo from '../../assets/images/logo.svg'
import style from './header.module.scss';

const Header = () => {
    return (
    <div className={style.headerContainer}>
        <a href='/mein-auto'><img className={style.logo} src={logo} alt="mein-auto" /></a>
        <div className={style.rightheaderPanel}>
           <a href='/mein-auto/purchase'>Purchase</a>
           <a href='/mein-auto/myOrders'>My Orders</a>
           <a href='/mein-auto/sell'>Sell</a>
        </div>
    </div>
    );
}

export default React.memo(Header);