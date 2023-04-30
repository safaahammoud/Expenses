import { useState } from 'react';

import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css';

const NewExpense = (props) => {
  const submitExpenseForm = (data) => {
    props.onAddExpenseHandler({
      id: Math.random,
      title: data.enteredTitle,
      amount: data.enteredAmount,
      date: new Date(data.enteredDate),
    });

    stopEditingHandler();    
  };
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  if(!isEditing) {
    return (
      <div className="new-expense">
        <button onClick={startEditingHandler}>Add new Expense</button>
      </div>
    );
  }
  
  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseHandler={submitExpenseForm}
        onCancel={stopEditingHandler}
      />
    </div>
  )
};

export default NewExpense;