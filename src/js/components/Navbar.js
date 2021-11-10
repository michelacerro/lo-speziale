// Style
import styles from '../../css/components/Header.module.css';

// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
    // animation navbar icon and toggle menu
    // const bar1 = document.querySelector('#icon-bar1');
    // const bar2 = document.getElementById('#icon-bar2');
    // const bar3 = document.getElementById('#icon-bar3');
    // const navbarIcon = document.querySelector('#navbar-icon');
    // const navbarList = document.querySelector('#navbar-list');

    const toggleMenu = () => {
        console.log('click');
        // if (navbarList.style.display === 'none') {
            // bar1.style.transform = 'rotate(45deg) translate(4px, 4px)';
            // bar2.style.opacity = '0';
            // bar3.style.transfrom = 'rotate(-45deg) translate(4px, -4px)';
            // navbarList.style.display = 'flex';
        // } else {
        //     bar1.style.transform = '';
        //     bar2.style.opacity = '1';
        //     bar3.style.transform = '';
            // navbarList.style.display = 'none';
        // }
    };


    return (
        <div className={styles['navbar']}>
            <div id='navbar-icon' className={styles['navbar-icon']} onClick={toggleMenu}>
                <span id='icon-bar1' className={styles['icon-bar']}></span>
                <span id='icon-bar2' className={styles['icon-bar']}></span>
                <span id='icon-bar3' className={styles['icon-bar']}></span>
            </div>
            <ul id='navbar-list' className={styles['navbar-list']}>
                <Link to='/' className={styles['navbar-link']}>home</Link>
                <Link to='/chi-siamo' className={styles['navbar-link']}>chi siamo</Link>
                <Link to='/corsi' className={styles['navbar-link']}>corsi</Link>
                <Link to='/ricette' className={styles['navbar-link']}>ricette</Link>
                <Link to='/contatti' className={styles['navbar-link']}>contatti</Link>
            </ul>
        </div>
    )
};
export default Navbar;