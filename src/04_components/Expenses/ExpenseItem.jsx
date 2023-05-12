import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // console.log(props);

  // let title = props.title;
  // console.log(title);

  // const clickHandler = () => {
  //   title = `Updated`;
  //   console.log(`Clicked!`);
  //   console.log(title);
  // };
  

  // ReactJS useState hook

  // console.log(useState());  // (2) [undefined, ƒ]
  // console.log(useState(props.title));  // (2) ['...', ƒ]
  const [title, setTitle] = useState(props.title);
  // console.log(`Expense Item evaluated by React`);
  // console.log(title);  // Toilet Paper, New TV, Car Insurance, New Desk(Wooden)
  // console.log(setTitle);  // function dispatchSetState(fiber, queue, action) {

  const clickHandler = () => {
    setTitle(`Updated`);
    // console.log(title);
    // console.log(setTitle);
    // console.log(`Updated`);
  };

  return (
    <Card className='expense-item'>

      {/* Left  */}
      <ExpenseDate date={props.date}/>

      {/* Right */}
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>

      <button 
            // onClick={() => console.log(`Clicked`)}
            onClick={clickHandler}>Change
      </button>

    </Card>
  );
};

export default ExpenseItem;
