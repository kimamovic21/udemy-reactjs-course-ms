import React, { useState, useEffect } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(undefined);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(`https://udemy-react-16-ms-meals-default-rtdb.firebaseio.com/meals.json`);
      console.log(response);

      if(!response.ok) {
        throw new Error(`Something went wrong`);
      };

      const responseData = await response.json();
      console.log(responseData);

      const loadedMeals = [];
      console.log(loadedMeals);

      for (const key in responseData) {
        console.log(key);
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      };
      console.log(loadedMeals);

      setMeals(loadedMeals);
      setIsLoading(false);
    };
   
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if(isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  };

  if(httpError) {
    return (
      <section className={classes.mealsError}>
         <p>{httpError}</p>
      </section>
    );
  };
  
  const mealsList = meals.map((meal) => (
      <MealItem key={meal.id}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
      />
  ));  

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
