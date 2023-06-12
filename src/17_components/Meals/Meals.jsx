import React from 'react';
import classes from './Meals.module.css';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
