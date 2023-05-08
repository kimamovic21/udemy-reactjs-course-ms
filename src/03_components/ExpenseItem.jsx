import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  console.log(props);  // { ... }
  
  return (
    <Card className='expense-item'>

      {/* Left  */}
      <ExpenseDate date={props.date}/>

      {/* Right */}
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>

    </Card>
  );
};

export default ExpenseItem;
