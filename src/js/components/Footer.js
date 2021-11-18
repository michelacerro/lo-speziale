// Style
import style from '../../css/components/Footer.module.css';

// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import Logo from './Logo';

// Icons
import {FiMapPin} from 'react-icons/fi';
import {BsTelephone} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';


const Footer = () => {
    return (
        <footer className={style['footer']}>
            <div className={style['footer-data']}>
                <h2><Logo /></h2>
                <div className={style['footer-icons']}>
                    <a href='/contatti' ><FiMapPin /></a>
                    <a href='tel:+39019246234'><BsTelephone /></a>
                    <a href='mailto:info@lospeziale.scuola.com' target='_blank' rel='noopener noreferrer'><AiOutlineMail /></a>
                </div>
                <Link to='/privacy'></Link>
            </div>
        </footer>
    )
};
export default Footer;