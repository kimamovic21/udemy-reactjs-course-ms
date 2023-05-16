import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  // console.log(props);

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    // console.log(expense.date.getFullYear().toString() === filteredYear);
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
        <Card className='expenses'>
            <ExpensesFilter 
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />

            <ExpensesChart expenses={filteredExpenses}/>

            <ExpensesList items={filteredExpenses}/>

        </Card>
    </div>
  );
};

export default Expenses;