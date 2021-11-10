// Style
import style from '../../css/pages/Home.module.css';

// Dependencies
import React from 'react';

// Components
import HeroSection from '../components/Hero-section';
import CoursesSection from '../components/Courses-section';
import TestimonialsSection from '../components/Testimonials-section';


const Home = () => {
    return (
        <div className={style['home-page']}>
            <HeroSection />
            <CoursesSection />
            <TestimonialsSection />
        </div>
    )
};
export default Home;