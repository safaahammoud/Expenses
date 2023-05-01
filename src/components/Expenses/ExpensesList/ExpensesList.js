import ExpenseItem from '../ExpenseItem/ExpenseItem.js';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if(props.items.length === 0) {
    return <p className="expenses-list__fallback">No expenses available</p>
  }

  return (
    <div className="expenses-list">
      {(props.items.map(expense => 
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />)
      )}
    </div>
  );
};

export default ExpensesList;