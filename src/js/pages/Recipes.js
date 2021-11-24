// Style
import style from '../../css/pages/Recipes.module.css';

// Dependencies
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Components
import RecipePreview from '../components/RecipePreview';

// Icons
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai';


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [offset, setOffset] = useState(0);
    const apiKey = '820aa817b7ac4ae98dc454965fcaa392';
    // const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&offset=${offset}`;
   

    useEffect(() => {
        async function fetchData () {
            const response = await (axios.get(url))
                .catch(error => alert(error));
            setRecipes(response.data.results);
        }
        fetchData();
    }, [url]);

    console.log(recipes);

    const nextRecipes = () => {
        if (offset < 900) {setOffset(offset + 10);}
    }

    const prevRecipes = () => {
        if (offset >= 10) {setOffset(offset - 10);}
    }

    return (
        <div className={style['recipes-page']}>
            <h1>Ricette</h1>
            <div className={style['recipes-container']}>
                {recipes.map(recipe => <RecipePreview key={recipe.id} info={recipe} />)}
            </div>
            <button onClick={prevRecipes} className={style['recipes-button']}><AiOutlineLeft /></button>
            <button onClick={nextRecipes} className={style['recipes-button']}><AiOutlineRight /></button>    
        </div>
    )
};
export default Recipes;