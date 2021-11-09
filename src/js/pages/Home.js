// Style
import style from '../../css/pages/Home.module.css';

// Dependencies
import React from 'react';

// Components
import HeroSection from '../components/Hero-section';


const Home = () => {
    return (
        <div className={style['home-page']}>
            <HeroSection />
        </div>
    )
};
export default Home;