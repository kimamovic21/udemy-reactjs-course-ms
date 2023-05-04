import React, { useState } from 'react';
import './ExpenseForm.css';

// const ExpenseForm = () => {
const ExpenseForm = (props) => {
 
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
 
  const titleChangeHandler = (event) => {
    // console.log(`Title changed`);
    // console.log(event);
    // console.log(event.target.value);
    // console.log(enteredTitle);
    // console.log(setEnteredTitle);
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    // console.log(`Submit form`);
    // console.log(event);
    event.preventDefault();
    console.log(`Submit form`);

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
    };
    // console.log(expenseData);

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>

        <div className='new-expense__controls'>
            <div className="new-expense__control">
                <label>Title</label>
                <input id="title" 
                       type="text" 
                       value={enteredTitle}
                       onChange={titleChangeHandler}
                />
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input id="amount" 
                       type="number" 
                       min="0.01" 
                       step="0.01"
                       value={enteredAmount}
                       onChange={amountChangeHandler}
                />
            </div>
            
            <div className="new-expense__control">
                <label>Date</label>
                <input id="date" 
                       type="date" 
                       min="2019-01-01" 
                       max="2023-12-31"
                       value={enteredDate}
                       onChange={dateChangeHandler}
                />
            </div>
        </div>

        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>

    </form>
  );
};

export default ExpenseForm;
