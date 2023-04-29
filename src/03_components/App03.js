import React from 'react';
import ExpenseItem from './ExpenseItem';
import Expenses from './Expenses';

function App03() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 104.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
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

  return (
    <div>

        <h1 style={{textAlign: 'center'}}>Expense Tracker</h1>

        <Expenses items={expenses}/>

    </div>
  );
};

export default App03;
