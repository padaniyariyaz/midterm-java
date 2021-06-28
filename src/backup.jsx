import React, { useState, useEffect } from "react";
import "./MainContent.css";
import CashComponent from "../CashComponents/CashComponent";

const cashAmounts = [1, 5, 10, 20];
const allNumbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];

function MainContent() {
  const [clickedNumbers, setClickedNumbers] = useState([]);
  const [error, setError] = useState(false);
  const [totalCash, setTotalcash] = useState([]);
  const [selectedNum, setSelectedNumber] = useState(false);

  const handleCashClick = (amount) => {
    if (error) {
      setTotalcash((oldArray) => [...oldArray, amount]);
    }
  };

  const cashTotal = totalCash.reduce(
    (totalCash, newCash) => totalCash + newCash,
    0
  );

  const handleClickedNumber = (num) => {
    if (!error && clickedNumbers.indexOf(num) === -1) {
      setSelectedNumber(true);

      document.getElementById(num).style.border = "3px solid red";
      let newElement = num;
      setClickedNumbers((oldArray) => [...oldArray, newElement]);
    } else if (clickedNumbers.indexOf(num) !== -1) {
      //setSelectedNumber(false);
      setError(false);
      let index = clickedNumbers.indexOf(num);
      clickedNumbers.splice(index, 1);
      document.getElementById(num).style.border = "3px solid #000";
      setSelectedNumber({ clickedNumbers });
    } else if (clickedNumbers.length >= 5) {
      alert("you can not select more than 5 numbers");
    }
  };

  let arr = [];
  const handleRandom = () => {
    handleClear();
    while (arr.length < 5) {
      let r = Math.floor(Math.random() * 20) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
      document.getElementById(r).style.border = "3px solid red";
    }
    setClickedNumbers(arr);
  };

  const handleClear = () => {
    setTotalcash([]);
    clickedNumbers.map((num) => {
      document.getElementById(num).style.border = "none";
    });
    setClickedNumbers([]);
    setError(false);
  };

  const handleCash = () => {
    if (clickedNumbers.length < 5) {
      // setError(true);
      setTotalcash([]);
      alert("Please select exact 5 numbers");
    } else if (clickedNumbers.length === 5 && cashTotal !== 0) {
      alert("transaction completed");
      setClickedNumbers([]);
      setTotalcash([]);
      handleClear();
    } else if (clickedNumbers.length === 5 && cashTotal === 0) {
      alert("please select cash");
    }
  };

  useEffect(() => {
    if (clickedNumbers.length > 4) {
      setError(true);
    }
    // if (clickedNumbers.length >= 5) {
    //   alert("You can not select more than 5 numbers");
    // }
  }, [handleClickedNumber]);

  return (
    <div className="main_content">
      <div className="cash_section">
        {cashAmounts.map((amount) => (
          <button
            key={amount}
            className="cash_button"
            onClick={() => handleCashClick(amount)}
          >
            <span className="number">${amount}</span>
          </button>
        ))}
      </div>
      <CashComponent handleCashClick={handleCashClick(amount)} />

      <ul className="numbers">
        {allNumbers.map((num, index) => (
          <button
            id={num}
            className="number"
            style={{
              backgroundColor: "#000",
              cursor: error ? "default" : "pointer",
              border: "3px solid #000"
            }}
            onClick={() => handleClickedNumber(num, index)}
            // disabled={error ? "true" : ""}
          >
            {num}
          </button>
        ))}
        <button className="cashBtn" onClick={handleCash}>
          Cash
        </button>
        <button className="clearBtn" onClick={handleClear}>
          Clear
        </button>
        <button className="clearBtn" onClick={handleRandom}>
          Random
        </button>
      </ul>
      <div
        style={{
          backgroundColor: "#ee82da",
          border: "15px solid #ffffff",
          position: "relative"
        }}
      >
        <div>
          <p>Numbers Selected:</p>
          {clickedNumbers.length <= 0 && <p>No number is selected</p>}
          {clickedNumbers.map((num) => (
            <p>Selected Number is: {num}</p>
          ))}
          <p style={{ bottom: "5%", position: "absolute" }}>
            Total Cash: {cashTotal}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
