// Style
import style from '../../css/pages/Courses.module.css';

// Dependencies
import React from 'react';

// Components
import CourseBox from '../components/CourseBox';
import Button from '../components/Button';
import Testimonial from '../components/Testimonial';

// JSON
import CoursesData from '../../courses.json';
import TestimonialsData from '../../testimonials.json';


const Courses = () => {
    return (
        <div className={style['courses-page']}>
            <div className={style['courses-container']}>
                <h1>corsi</h1>
                <div className={style['courses-grid']}>
                    {CoursesData.map(data => <CourseBox key={data.name + data.id} info={data} />)}
                </div>
                <Button link='/contatti' text='contattaci per saperne di più' />
            </div>
            <div className={style['testimonials-container']}>
                {TestimonialsData.map(data => <Testimonial key={data.name + data.id} info={data} />)}
            </div>
        </div>
    )
};
export default Courses;