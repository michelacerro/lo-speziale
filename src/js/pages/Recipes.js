// Style
import style from '../../css/pages/Recipes.module.css';

// Dependencies
import React, {useState/*, useEffect*/} from 'react';
// import axios from 'axios';

// Components
// import RecipePreview from '../components/RecipePreview';

// Icons
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai';
import {VscSettings} from 'react-icons/vsc';


const Recipes = () => {
    // const [recipes, setRecipes] = useState([]);

    const apiKey = '820aa817b7ac4ae98dc454965fcaa392';
    // const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    const [offset, setOffset] = useState(0);

    // const [cuisine, setCuisine] = useState('');
    
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&offset=${offset}`;
   

    // useEffect(() => {
    //     async function fetchData () {
    //         const response = await (axios.get(url))
    //             .catch(error => alert(error));
    //         setRecipes(response.data.results);
    //     }
    //     fetchData();
    // }, [url]);

    // console.log(recipes);
    // console.log(url);

    // filters
    const [open, setOpen] = useState(false);
    const toggleFilters = () => {
        const button = document.getElementById('filters-button');
        const input = document.getElementById('filters-input');
        setOpen(!open);
        if (open) {
            button.style.backgroundColor = '#ffffff';
            button.style.borderBottom = '1px solid var(--white)';
            button.style.padding = '20px';
            input.style.display = 'flex';
        } else {
            input.style.display = 'none';
            button.style.backgroundColor = '';
        }
    }

    // ----- add filters
    // cuisine
    const toggleCuisine = (e) => {
        console.log(url);
        if (url.includes(e.target.value)) {url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&offset=${offset}`;} 
        else {url = url + `&cuisine=${e.target.value}`}
    }

    // intolerances
    const toggleIntolerances = (e) => {
        console.log(url);
        if (url.includes(e.target.value)) {url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&offset=${offset}`;}
        else {url = url +`&intolerances=${e.target.value}`;}
    }

    // ------ "change" page
    const nextRecipes = () => {
        if (offset < 900) {setOffset(offset + 10);}
    }

    const prevRecipes = () => {
        if (offset >= 10) {setOffset(offset - 10);}
    }


    return (
        <div className={style['recipes-page']}>
            <div className={style['contents-container']}>
            <h1>Ricette</h1>

                <div className={style['filters-container']}>
                    <div id='filters-button' className={style['filters-button']} onClick={toggleFilters}>
                        <VscSettings /> filtra
                    </div>
                    <div id='filters-input' className={style['filters-input']}>
                        <div className={style['cuisines-section']}>
                            <h4>cucine</h4>
                            <label><input type='checkbox' name='cuisines' value='african' onClick={toggleCuisine} />Africana</label>
                            <label><input type='checkbox' name='cuisines' value='american' onClick={toggleCuisine} />Americana</label>
                            <label><input type='checkbox' name='cuisines' value='british' onClick={toggleCuisine} />Britannica</label>
                            <label><input type='checkbox' name='cuisines' value='cajun' onClick={toggleCuisine} />Cajun</label>
                            <label><input type='checkbox' name='cuisines' value='caribbean' onClick={toggleCuisine} />Caraibica</label>
                            <label><input type='checkbox' name='cuisines' value='chinese' onClick={toggleCuisine} />Cinese</label>
                            <label><input type='checkbox' name='cuisines' value='korean' onClick={toggleCuisine} />Coreana</label>
                            <label><input type='checkbox' name='cuisines' value='jewish' onClick={toggleCuisine} />Ebraica</label>
                            <label><input type='checkbox' name='cuisines' value='eastern-european' onClick={toggleCuisine} />dell'Est Europa</label>
                            <label><input type='checkbox' name='cuisines' value='european' onClick={toggleCuisine} />Europea</label>
                            <label><input type='checkbox' name='cuisines' value='french' onClick={toggleCuisine} />Francese</label>
                            <label><input type='checkbox' name='cuisines' value='greek' onClick={toggleCuisine} />Greca</label>
                            <label><input type='checkbox' name='cuisines' value='indian' onClick={toggleCuisine} />Indiana</label>
                            <label><input type='checkbox' name='cuisines' value='irish' onClick={toggleCuisine} />Irlandese</label>
                            <label><input type='checkbox' name='cuisines' value='italian' onClick={toggleCuisine} />Italiana</label>
                            <label><input type='checkbox' name='cuisines' value='japanese' onClick={toggleCuisine} />Giapponese</label>
                            <label><input type='checkbox' name='cuisines' value='latin-american' onClick={toggleCuisine} />Latino Americana</label>
                            <label><input type='checkbox' name='cuisines' value='middle-eastern' onClick={toggleCuisine} />Medio Orientale</label>
                            <label><input type='checkbox' name='cuisines' value='mediterranean' onClick={toggleCuisine} />Mediterranea</label>
                            <label><input type='checkbox' name='cuisines' value='mexican' onClick={toggleCuisine} />Messicana</label>
                            <label><input type='checkbox' name='cuisines' value='nordic' onClick={toggleCuisine} />Nordica</label>
                            <label><input type='checkbox' name='cuisines' value='spanish' onClick={toggleCuisine} />Spagnola</label>
                            <label><input type='checkbox' name='cuisines' value='southern' onClick={toggleCuisine} />del Sud</label>
                            <label><input type='checkbox' name='cuisines' value='thai' onClick={toggleCuisine} />Tailandese</label>
                            <label><input type='checkbox' name='cuisines' value='german' onClick={toggleCuisine} />Tedesca</label>
                            <label><input type='checkbox' name='cuisines' value='vietnamese' onClick={toggleCuisine} />Vietnamita</label>
                        </div>
                        
                        <div className={style['calories-section']}>
                            <h4>calorie</h4>
                            <label><input type='number' name='minCalories' /></label>
                            <label><input type='number' name='maxCalories' /></label>
                        </div>

                        <div className={style['query-section']}>

                        </div>

                        <div className={style['time-section']}>
                            <h4>tempo</h4>
                        </div>

                        <div className={style['health-section']}>
                            <h4>Indice di Salute</h4>
                            <input type='number' name='healthiness' min='0' max='100' />
                        </div>

                        <div className={style['intolerances-section']}>
                            <h4>intolleranze</h4>
                            <label><input type='checkbox' name='intolerances' value='dairy' onClick={toggleIntolerances} />Latticini</label>
                            <label><input type='checkbox' name='intolerances' value='egg' onClick={toggleIntolerances} />Uova</label>
                            <label><input type='checkbox' name='intolerances' value='gluten' onClick={toggleIntolerances} />glutine</label>
                            <label><input type='checkbox' name='intolerances' value='grain' onClick={toggleIntolerances} />grano</label>
                            <label><input type='checkbox' name='intolerances' value='peanut' onClick={toggleIntolerances} />Arachidi</label>
                            <label><input type='checkbox' name='intolerances' value='seafood' onClick={toggleIntolerances} />Frutti di Mare</label>
                            <label><input type='checkbox' name='intolerances' value='sesame' onClick={toggleIntolerances} />Sesamo</label>
                            <label><input type='checkbox' name='intolerances' value='shellfish' onClick={toggleIntolerances} />Crostacei</label>
                            <label><input type='checkbox' name='intolerances' value='soy' onClick={toggleIntolerances} />Soia</label>
                            <label><input type='checkbox' name='intolerances' value='sulfite' onClick={toggleIntolerances} />Solfiti</label>
                            <label><input type='checkbox' name='intolerances' value='tree-nut' onClick={toggleIntolerances} />Albero di Noce</label>
                            <label><input type='checkbox' name='intolerances' value='wheat' onClick={toggleIntolerances} />Frumento</label>



                        </div>
                    </div>
                </div>

                {/* <div className={style['recipes-container']}>
                    {recipes.map(recipe => <RecipePreview key={recipe.id} info={recipe} />)}
                </div> */}
                
                <div className={style['buttons-container']}>
                    <button onClick={prevRecipes} className={style['recipes-button']}><AiOutlineLeft /></button>
                    <button onClick={nextRecipes} className={style['recipes-button']}><AiOutlineRight /></button>
                </div>
            </div>    
        </div>
    )
};
export default Recipes;