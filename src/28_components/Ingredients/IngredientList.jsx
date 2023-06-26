import React from 'react';
import './IngredientList.css';

const IngredientList = props => {
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {props.ingredients?.map(ingredient => (
          <li 
            key={ingredient.id} 
            onClick={props.onRemoveItem.bind(this, ingredient.id)}
          >
              <span>{ingredient.title}</span>
              <span>{ingredient.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
