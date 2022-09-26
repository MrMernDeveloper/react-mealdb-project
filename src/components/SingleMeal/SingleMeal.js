import React from 'react';
import './SingleMeal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const SingleMeal = ({ meal, cartHandler  }) => {
    // console.log(meal);
    const { strMeal, strMealThumb, strCategory, strInstructions, strArea
 } = meal;
    return (
        <div className='single-meal'>
            <img src={strMealThumb} alt="" />
            <div className='product-details'>
                <h4>Name: {strMeal}</h4>
                <p>Category: {strCategory}</p>
                <p>Tradition: {strArea}</p>
                <p>Introduction: {strInstructions.length >50 ? strInstructions.slice(0,50) +'....':strInstructions}</p>
            </div>
            <button className='cart-button' onClick={() => cartHandler(meal)}> <span>Add to Cart</span> <span className='font-awsome'><FontAwesomeIcon icon={faShoppingCart} /> </span> </button>  

            
       </div>
    );
};

export default SingleMeal;