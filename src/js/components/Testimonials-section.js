// Style
// import style from '../../css/pages/Home.module.css';

// Dependencies
import React from 'react';

// Components
import Testimonial from './Testimonial';

// JSON
import TestimonialsData from '../../testimonials.json';


const TestimonialsSection = () => {
    return (
        <div>
            <div>
                <h1>testimonianze</h1>
                <div>
                    {TestimonialsData.map(data => <Testimonial key={data.name + data.id} info={data} />)}
                </div>
            </div>
        </div>
    )
};
export default TestimonialsSection;