// Style
import style from '../../css/pages/Home.module.css';

// Dependencies
import React from 'react';

// Components
import CoursePreview from './CoursePreview';
import Button from './Button';

// JSON
import CoursesData from '../../courses.json';


const CoursesSection = () => {
    return (
        <div>
            <div className={style['courses-section']}>
                <h1>Impara con noi</h1>
                <div className={style['courses-container']}>
                    {CoursesData.map(data => <CoursePreview key={'coursepreview' + data.id} info={data} />)}
                </div>
                <Button link='/corsi' text='scopri i nostri corsi' />
            </div>
        </div>
    )
};
export default CoursesSection;