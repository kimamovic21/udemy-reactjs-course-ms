import React, { useCallback, useEffect, useState, useReducer, useMemo } from 'react';
import './Ingredients.css';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';

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

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return { loading: true, error: null };
    case 'RESPONSE':
      // return { loading: false, error: null};
      return { ...currentHttpState, loading: false };
    case 'ERROR':
      return { loading: false, error: action.errorMessage };
    case 'CLEAR':
      return { ...currentHttpState, error: null };
    default:
        throw new Error('Should not get there !!!');
  };
};

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {loading: false, error: null});
  // const [ userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  useEffect(() => {
    console.log('Rendering Ingredients', userIngredients);
  }, [userIngredients]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    // setUserIngredients(filteredIngredients);
    dispatch({type: 'SET', ingredients: filteredIngredients});
  }, []);

  const addIngredientHandler = useCallback((ingredient) => {
    // setIsLoading(true);
    dispatchHttp({type: 'SEND'});
    fetch(`https://udemy-react-28-ms-hooks-default-rtdb.firebaseio.com/ingredients.json`, {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type' : 'application/json' },
    })
      .then(response => {
        // setIsLoading(false);
        dispatchHttp({type: 'RESPONSE'});
        return response.json();
    })
      .then(responseData => {
        // setUserIngredients(prevIngredients => [
        //   ...prevIngredients,
        //   { id: responseData.name, ...ingredient }  // id + title + amount
        // ])
        dispatch({ type: 'ADD', ingredient: { id: responseData.name, ...ingredient }});
    }); 
  }, []);

  const removeIngredientHandler = useCallback((ingredientId) => {
    // setIsLoading(true);
    dispatchHttp({type: 'SEND'});
    fetch(`https://udemy-react-28-ms-hooks-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE',
    })
      .then(response => {
        dispatchHttp({type: 'RESPONSE'});
        // setIsLoading(false);
        // setUserIngredients(prevIngredients => 
        //     prevIngredients.filter((ingredient) => ingredient.id !== ingredientId)
        // );
        dispatch({type: 'DELETE', id: ingredientId});
    })
      .catch(error => {
        // setError(error.message);  // error object has a message property
        // setIsLoading(false);
        dispatchHttp({type: 'ERROR', errorMessage: error.message});
    });
  }, []);

  const clearError = useCallback(() => {
    // setError(null);
    dispatchHttp({type: 'CLEAR'});
  }, []);

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
      {
      httpState.error &&
         (<ErrorModal onClose={clearError}>
            {httpState.error}
          </ErrorModal>)
      }

      <IngredientForm 
            onAddIngredient={addIngredientHandler}
            // loading={isLoading}
            loading={httpState.loading}
      />
    
      <section>
        <Search 
            onLoadIngredients={filteredIngredientsHandler}
        />
            {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
