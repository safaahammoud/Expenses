import Chart from '../Chart/Chart.js';

const Expenses = (props) => {
  const chartDataPoints = [
    { label: "January", value: 0 },
    { label: "February", value: 0 },
    { label: "March", value: 0 },
    { label: "April", value: 0 },
    { label: "May", value: 0 },
    { label: "June", value: 0 },
    { label: "July", value: 0 },
    { label: "August", value: 0 },
    { label: "September", value: 0 },
    { label: "October", value: 0 },
    { label: "November", value: 0 },
    { label: "December", value: 0 },
  ];

  for(const expense of props.expenses) {
    const month = expense.date.getMonth();

    chartDataPoints[month].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
}

export default Expenses;