// Style
import style from '../../css/pages/SingleRecipe.module.css';

// Dependencies
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

// Components
import Comment from '../components/Comment';

// Icons
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai';
import {MdTimer} from 'react-icons/md';
import {BsPeople} from 'react-icons/bs';


const SingleRecipe = () => {
    // ---------- RECIPE SECTION
    const id = useParams().id;;
    const apiKey = '820aa817b7ac4ae98dc454965fcaa392';
    // const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    
    // recipe details request
    const [details, setDetails] = useState([]);
    const urlDetails = ` https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`;
    
    useEffect(() => {
        async function fetchData () {
            const response = await axios.get(urlDetails)
                .catch(error => alert(error));
            setDetails(response.data);
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
            setIngredients(response.data.ingredients);
        };
        fetchData();
    }, [urlIngredients]);

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

    // ---------- COMMENTS SECTION
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const comments = JSON.parse(window.localStorage.getItem('comments')) || [];

    const handleSubmit = (e) => {
        e.preventDefault();

        comments.push({
            'name': name,
            'email': email,
            'comment': comment,
            'recipe_id': id
        });

        window.localStorage.setItem('comments', JSON.stringify(comments));

        setName('');
        setEmail('');
        setComment('');
    };

 
    return (
        <div className={style['single-recipe-page']}>
            {/* ----------- RECIPE SECTION */}
            <h1>{details.title}</h1>
            <div className={style['info-section']}>
                <img src={details.image} alt={details.title} />
                <div>
                    {/* details */}
                    <div className={style['info-details']}>
                        <p><MdTimer className={style['single-icon']} />Pronto in {details.readyInMinutes > 60 ? Math.floor(details.readyInMinutes / 60) + ' ore e ' + details.readyInMinutes % 60 : details.readyInMinutes} minuti</p>
                        <hr/>
                        <p><BsPeople className={style['single-icon']} />Dosi per {details.servings} {details.servings > 1 ? 'persone' : 'persona'}</p>
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
            
            {/* ingredients */}
            <div className={style['ingredients-section']}>
                <h2>Ingredienti</h2>
                <div>
                    {ingredients.map((ingredient, index) => {
                        return (
                            <p key={index}><b>{ingredient.amount.metric.value} {ingredient.amount.metric.unit}</b> {ingredient.name}</p>
                        )
                    })}
                </div>
            </div>

            {/* steps */}
            <div className={style['steps-section']}>
                <h2>Procedura</h2>
                {steps.map(step => {
                    return (
                        <li key={step.number}><span>{step.number}</span><p>{step.step}</p></li>
                    )
                })}
            </div>

            {/* ---------- COMMENTS SECTION */}
            <div className={style['comments-section']}>
            <h2>Commenti</h2>
            <form onSubmit={handleSubmit}>
                <div className={style['comments-info-container']}>
                    <label htmlFor='name'>
                        Nome*
                        <input 
                            type='text' 
                            id='name' 
                            name='name' 
                            placeholder='Nome' 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </label>
                    <label htmlFor='email'>
                        Email
                        <input 
                            type='email' 
                            id='email' 
                            name='email' 
                            placeholder='Email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </label>
                </div>

                <label htmlFor='comment'>
                    Commento*
                    <textarea 
                        id='comment' 
                        name='comment' 
                        placeholder='Scrivi qui il tuo commento...' 
                        value={comment} 
                        onChange={(e) => setComment(e.target.value)} 
                        required 
                    />
                </label>
                <button type='submit' >Aggiungi commento</button>
            </form>
            <div className={style['comments-container']}>
                {comments.length > 0
                    ? 
                        comments.filter(comment => (comment.recipe_id === id)).map((comment, index) => <Comment key={index} info={comment} />)
                    :
                        ''
                }
            </div>
        </div>
        </div>
    )
};
export default SingleRecipe;