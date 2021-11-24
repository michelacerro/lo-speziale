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
    const [details, setDetails] = useState([]);
    const apiKey = '820aa817b7ac4ae98dc454965fcaa392';
    // const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    const url = ` https://api.spoonacular.com/recipes/716381/information?apiKey=${apiKey}&includeNutrition=true`;
   

    useEffect(() => {
        async function fetchData () {
            const response = await (axios.get(url))
                .catch(error => alert(error));
            setDetails(response.data);
        }
        fetchData();
    }, [url]);

    console.log(details);

    return (
        <div className={style['single-recipe-page']}>
            <h1>{details.title}</h1>
            <div className={style['info-section']}>
                <img src={details.image} alt={details.title} />
                <div>
                    <div className={style['info-details']}>
                        <p><MdTimer className={style['single-icon']} />{details.readyInMinutes} minuti</p>
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
            
            <ul className={style['ingredients-sections']}>
                {/* {details.extentendedIngredients.map(ingredient => <li key={ingredient.id}>{ingredient.name}</li>)} */}
                
            </ul>
            <p>{details.instructions}</p>
        </div>
    )
};
export default SingleRecipe;