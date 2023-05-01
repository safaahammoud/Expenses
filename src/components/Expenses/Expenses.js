import { useState } from 'react';
import ExpensesList from './ExpensesList/ExpensesList';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = new useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear() === +filteredYear;
  });

  return (
    <div>
      <div>
        <span>Date selected {filteredYear}</span>

        <ExpensesFilter
          filteredYear={filteredYear}
          onYearChangeHandler={filterChangeHandler}
        />

        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList items={filteredExpenses}/>
      </div>
    </div>
  );
}

export default Expenses;