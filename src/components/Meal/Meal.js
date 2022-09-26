import React, { useEffect, useState } from 'react';
import SingleMeal from '../SingleMeal/SingleMeal';
import './Meal.css'

const Meal = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setMeals(data));
    }, [])
    


    return (
        <div className='restaurant-container'>
            <div className='meal-container'>
                {
                    meals.map(meal => <SingleMeal
                        meal={meal}
                        key={meal.idMeal}

                    ></SingleMeal>)
               }
            </div>
            <div className='cart-container'>
                <div className='cart'>
                    <h3 className='summary'>Item Summary</h3>
                </div>
           </div>
        </div>
    );
};

export default Meal;