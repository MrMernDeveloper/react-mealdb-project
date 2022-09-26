import React from 'react';

const Cart = ({ meal }) => {
    console.log(meal)
    const { strMeal } = meal;
    return <li style={{ padding: '3px' }}>{strMeal}</li>;
        
            
              
            
       
    
};

export default Cart;