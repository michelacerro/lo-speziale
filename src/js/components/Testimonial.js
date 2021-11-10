// Style
import style from '../../css/components/Testimonials.module.css';

// Dependencies
import React from 'react';


const Testimonials = (props) => {
    return (
        <div className={style['testimonials-box']}>
            <img src={process.env.PUBLIC_URL + `/images/testimonial-${props.info.image}.jpg`} alt={'testimonial-' + props.info.image}  />
            <div>
               <h4>{props.info.name}</h4> 
               <h5>{props.info.course}</h5>
               <p>{props.info.comment}</p>
            </div>
        </div>
    )
};
export default Testimonials;