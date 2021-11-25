// Style
import style from '../../css/pages/SingleRecipe.module.css';

// Dependencies
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Icons
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai';
import {MdTimer} from 'react-icons/md';
import {BsPeople} from 'react-icons/bs';


const SingleRecipe = () => {
    const id = window.location.pathname.substring(9);
    const apiKey = '820aa817b7ac4ae98dc454965fcaa392';
    // const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    
    // recipe details request
    const [details, setDetails] = useState([]);
    const urlDetails = ` https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`;
    
    useEffect(() => {
        async function fetchData () {
            const response = await axios.get(urlDetails)
                .catch(error => alert(error));
            setDetails(response);
        }
        fetchData();
    }, [urlDetails]);

    // recipe ingredients request
    const [ingredients, setIngredients] = useState([]);
    const urlIngredients = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apiKey}`;

    useEffect(() => {
        async function fetchData () {
            const response =  await axios.get(urlIngredients)
                .catch(error => alert(error));
            setIngredients(response);
        };
        fetchData();
    }, [urlIngredients]);
    console.log(ingredients);

    // recipe steps request
    const [steps, setSteps] = useState([]);
    const urlSteps = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`;

    useEffect(() => {
        async function fetchData () {
            const response = await axios.get(urlSteps)
                .catch(error => alert(error));
            setSteps(response.data[0].steps);
        }
        fetchData();
    }, [urlSteps]);

 
    return (
        <div className={style['single-recipe-page']}>
            <h1>{details.title}</h1>
            <div className={style['info-section']}>
                <img src={details.image} alt={details.title} />
                <div>
                    <div className={style['info-details']}>
                        <p><MdTimer className={style['single-icon']} />Pronto in {details.readyInMinutes} minuti</p>
                        <hr/>
                        <p><BsPeople className={style['single-icon']} />Dosi per {details.servings} {details.servings > 1 ? 'persone' : 'persona'}</p>
                        {/* <p>{details.nutrition.nutrients[0].amount} kcal</p> */}
                    </div>
                    <ul>
                        <li>{details.vegetarian ? <AiFillCheckCircle className={style['check-true']} /> : <AiFillCloseCircle className={style['check-false']} />}Vegetariano</li>
                        <li>{details.vegan ? <AiFillCheckCircle className={style['check-true']} /> : <AiFillCloseCircle className={style['check-false']} />}Vegano</li>
                        <li>{details.glutenFree ? <AiFillCheckCircle className={style['check-true']} /> : <AiFillCloseCircle className={style['check-false']} />}Senza glutine</li>
                        <li>{details.dairyFree ? <AiFillCheckCircle className={style['check-true']} /> : <AiFillCloseCircle className={style['check-false']} />}Senza lattosio</li>
                        <li>{details.veryHealthy ? <AiFillCheckCircle className={style['check-true']} /> : <AiFillCloseCircle className={style['check-false']} />}Salutare</li>
                    </ul>
                </div>
            </div>           
            
            <div className={style['ingredients-sections']}>
                <h2>Ingredienti</h2>
                {/* {ingredients.map((ingredient, index) => {
                    return (
                        <p key={index}><b>{ingredient.amount.metric.value} {ingredient.amount.metric.unit}</b> {ingredient.name}</p>
                    )
                })} */}
            </div>

            <div className={style['steps-section']}>
                <h2>Procedura</h2>
                {steps.map(step => {
                    return (
                        <li key={step.number}><span>{step.number}</span><p>{step.step}</p></li>
                    )
                })}
            </div>
        </div>
    )
};
export default SingleRecipe;