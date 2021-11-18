// Style
import style from '../../css/components/Header.module.css';

// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import Logo from './Logo';
import Navbar from './Navbar';


const Header = () => {
    window.addEventListener('scroll', () => {
        let header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.style.backgroundColor = '#ffffff';
            header.style.boxShadow = '0 3px 1rem rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = '';
            header.style.boxShadow = '';
        }
    })
    return (
        <header className={style['header']}>
            <Link to='/' className={style['header-logo']}><Logo /></Link>
            <Navbar />
        </header>
    )
};
export default Header;