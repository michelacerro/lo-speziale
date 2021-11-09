// Style
import style from '../../css/components/Header.module.css';

// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import Navbar from './Navbar';


const Header = () => {
    return (
        <div className={style['header']}>
            <Link to='/' className={style['logo']}>Lo Speziale</Link>
            <Navbar />
        </div>
    )
};
export default Header;