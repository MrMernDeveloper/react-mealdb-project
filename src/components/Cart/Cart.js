import React from 'react';

const Cart = ({ meal }) => {
    console.log(meal)
    const { strMeal } = meal;
    return <li><strong> {strMeal}</strong></li>;
        
            
              
            
       
    
};

export default Cart;