import React from 'react';

import logo from '../../assets/images/logo.svg'
import style from './header.module.scss';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
    <div className={style.headerContainer}>
        <Link to='/'><img className={style.logo} src={logo} alt="mein-auto" /></Link>
        <div className={style.rightheaderPanel}>
           <Link to='/purchase'>Purchase</Link>
           <Link to='/myOrders'>My Orders</Link>
           <Link to='/sell'>Sell</Link>
        </div>
    </div>
    );
}

export default React.memo(Header);