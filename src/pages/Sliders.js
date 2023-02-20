import { useState } from "react";
import './ppf.css';

function Slider() {
  const [value, setValue] = useState(500);
  const [month, setMonth] = useState("");
  const [totalSum, setTotalSum] = useState(0);
  const [interestAmt, setInterestAmt] = useState(0);

  const calculateInterest = () => {
    const interestRate = 0.071; // 7.1% annual interest rate
    const totalSavings = parseInt(totalSum) + parseInt(totalSum) * interestRate;
    setInterestAmt(totalSavings - parseInt(totalSum));
  };

  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / 150000}% 100%`,
    };
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  const handleCalculation = (event) => {
    event.preventDefault();
    setTotalSum(value * parseInt(month));
    calculateInterest();
  };

  return (
    <div className="container">
      <h1 className="ppf-calc">PPF Calculator</h1>
      <form onSubmit={handleCalculation}>
        <div>
          <label htmlFor="month">Select Month:</label>
          <select id="month" value={month} onChange={handleMonthChange}>
            <option value="">Select a month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div>
          <label htmlFor="range">Select Amount:</label>
          <input
            type="range"
            id="range"
            name="range"
            min="500"
            max="150000"
            step="10"
            value={value}
            onChange={handleSliderChange}
            style={getBackgroundSize()}
          />
          {value}
        </div>
        <div>
          <button type="submit">Calculate</button>
        </div>
        <div>
          <p>Total Sum: {totalSum}</p>
          <p>PPF Interest Amount: {interestAmt}</p>
        </div>
      </form>
    </div>
  );
}

export default Slider;