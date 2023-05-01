import './ExpenseDate.css';


const ExpenseDate = (props) => {
  //transform the date to human readable
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.toLocaleString('en-US', { year: 'numeric' });

  return (
    <h1 className='expense-date'>
      <span className='expense-date__day'>
        {day}
      </span>
    
      <span className='expense-date__month'>
        {month}
      </span>
    
      <span className='expense-date__year'>
        {year}
      </span>
    </h1>
  );
}

export default ExpenseDate;