// Style
import style from '../../css/pages/Home.module.css';

// Dependencies
import React from 'react';

// Components
import HeroSection from '../components/Hero-section';
import AboutSection from '../components/About-section';
import CoursesSection from '../components/Courses-section';
import TestimonialsSection from '../components/Testimonials-section';
import ContactsSection from '../components/Contacts-section';
import Comments from '../components/Comments';


const Home = () => {
    return (
        <div className={style['home-page']}>
            <HeroSection />
            <AboutSection />
            <CoursesSection />
            <TestimonialsSection />
            <ContactsSection />
            <Comments />
        </div>
    )
};
export default Home;