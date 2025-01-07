import { useState } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(true);
  const titleChangeHandler = (event) => {
    if(event.target.value?.trim().length === 0) {
      setIsTitleValid(false);
      
      return;
    }

    setIsTitleValid(true);
    setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountChangeHandler = (event) => {
    if(event.target.value === 0) {
      setIsAmountValid(false);
      
      return;
    }

    setIsAmountValid(true);
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const [isDateValid, setIsDateValid] = useState(true);
  const dateChangeHandler = (event) => {
    if(event.target.value?.trim().length === 0) {
      setIsDateValid(false);
      
      return;
    }

    setIsDateValid(true);
    setEnteredDate(event.target.value);
  };

  const checkIfInvalidFormInputs = () => {
    const isTitleValid = enteredTitle?.trim().length > 0;
    const isDateValid = enteredDate?.trim().length > 0;
    const isAmountValid = enteredAmount > 0;
    setIsTitleValid(isTitleValid);
    setIsDateValid(isDateValid);
    setIsAmountValid(isAmountValid);

    return isTitleValid && isDateValid && isAmountValid;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const isFormValid = checkIfInvalidFormInputs();

    if(isFormValid) {
      const expenseData = {
        enteredTitle,
        enteredAmount: +enteredAmount,
        enteredDate,
      };
  
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
  
      props.onSaveExpenseHandler(expenseData);
    }
  };

  return (
    <div>
      {
        <form onSubmit={submitHandler}>
          <div className={styles['new-expense__controls']}>
            <div className={`${styles['new-expense__control']} ${ !isTitleValid && styles.invalid }`}>
              <label>Title</label>

              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>

            <div className={`${styles['new-expense__control']} ${ !isAmountValid && styles.invalid }`}>
              <label>Amount</label>

              <input
                type="number"
                min="0"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>

            <div className={`${styles['new-expense__control']} ${ !isDateValid && styles.invalid }`}>
              <label>Date</label>

              <input
                type="date"
                min="2019-04-01"
                max="2024-12-31"
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
