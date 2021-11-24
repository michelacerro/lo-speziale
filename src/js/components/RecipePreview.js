// Style
import style from '../../css/components/RecipePreview.module.css';

// Dependencies
import React from 'react';


const RecipePreview = (props) => {
    return (
        <div className={style['recipe-preview']}>
            <img src={props.info.image} alt={props.info.title} />
            <h5>{props.info.title}</h5>
        </div>
    )
};
export default RecipePreview;