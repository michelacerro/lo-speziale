// Style
import style from '../../css/components/Header.module.css';

// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <ul>
                <Link to='/' className={style['navbar-link']}>home</Link>
                <Link to='/' className={style['navbar-link']}>chi siamo</Link>
                <Link to='/' className={style['navbar-link']}>corsi</Link>
                <Link to='/' className={style['navbar-link']}>ricette</Link>
                <Link to='/' className={style['navbar-link']}>contatti</Link>
            </ul>
        </div>
    )
};
export default Navbar;