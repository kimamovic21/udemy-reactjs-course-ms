import React, { useCallback, useEffect, useReducer, useMemo, } from 'react';
import './Ingredients.css';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';
import useHttp from '../hooks/http';

const ingredientReducer = (currentIngredients, action) => {
  switch(action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error('Should not get there !!!');
  };
};

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const { 
      isLoading, 
      error, 
      data, 
      sendRequest, 
      reqExtra, 
      reqIdentifer,
      clear
  } = useHttp();

  useEffect(() => {
    if (!isLoading && !error && reqIdentifer === 'REMOVE_INGREDIENT') {
      dispatch({type: 'DELETE', id: reqExtra})
    }
    else if (!isLoading && !error && reqIdentifer === 'ADD_INGREDIENT') {
      dispatch({
        type: 'ADD',
        ingredient: { id: data.name, ...reqExtra}
      })
    };
  }, [data, reqExtra, reqIdentifer, isLoading, error]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    dispatch({type: 'SET', ingredients: filteredIngredients});
  }, []);

  const addIngredientHandler = useCallback((ingredient) => {
    sendRequest( `https://udemy-react-28-ms-hooks-default-rtdb.firebaseio.com/ingredients.json`, 'POST', JSON.stringify(ingredient), ingredient, 'ADD_INGREDIENT');
  }, [sendRequest]);

  const removeIngredientHandler = useCallback((ingredientId) => {
    sendRequest(
      `https://udemy-react-28-ms-hooks-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`, 
      'DELETE',
      null,
      ingredientId,
      'REMOVE_INGREDIENT'
    );
  }, [sendRequest]);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList 
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
      />
    );
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App28">
      {error && (<ErrorModal onClose={clear}>{error}</ErrorModal>)}

      <IngredientForm 
            onAddIngredient={addIngredientHandler}
            loading={isLoading}
      />
    
      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
            {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
