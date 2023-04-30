import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      enteredTitle,
      enteredAmount: +enteredAmount,
      enteredDate,
    };

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    props.onSaveExpenseHandler(expenseData);
  };

  return (
    <div>
      {
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>

              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>

            <div className="new-expense__control">
              <label>Amount</label>

              <input
                type="number"
                min="0"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>

            <div className="new-expense__control">
              <label>Date</label>

              <input
                type="date"
                min="2019-04-01"
                max="2023-05-01"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>

          <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      }
    </div>
  );
};

export default ExpenseForm;
