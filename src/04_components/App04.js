import React from 'react';
import './App04.css';
import Expenses from './Expenses/Expenses';
import NewExpense from './NewExpense/NewExpense';

function App04() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 104.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450.21,
      date: new Date(2021, 5, 12),
    },
  ];
  // console.log(expenses);

  const addExpenseHandler = (expense) => {
    console.log(`In App.js`);
    console.log(expense);
  };

  return (
    <div>

        <h1 style={{textAlign: 'center'}}>Expense Tracker</h1>

        {/* <NewExpense/> */}
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>

    </div>
  );
};

export default App04;
