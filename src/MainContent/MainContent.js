import React, { useState, useEffect } from "react";
import "./MainContent.css";
import CashComponent from "../CashComponents/CashComponent";
import NumberComponent from "../NumberComponents/NumberComponent";
import ClickedNumbers from "../ClickedNumbers/ClickedNumbers";

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
  const [clickedCount, setClickedCount] = useState();
  const [error, setError] = useState(false);
  const [totalCash, setTotalcash] = useState([]);
  const [selectedNum, setSelectedNumber] = useState(false);

  let total_cash;
  const handleCashClick = (amount) => {
    //total_cash += amount;
    if (error) {
      setTotalcash((oldArray) => [...oldArray, amount]);
    }
  };

  const cashTotal = totalCash.reduce(
    (totalCash, newCash) => totalCash + newCash,
    0
  );
  let slNum;

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
      //setClickedNumbers([clickedNumbers]);
      let newArr = clickedNumbers.splice(index, 1);
      //console.log(clickedNumbers);
      document.getElementById(num).style.border = "3px solid #000";
      setSelectedNumber({ clickedNumbers });
      //console.log("cl num is", clickedNumbers);
    } else if (clickedNumbers.length >= 5) {
      console.log(clickedNumbers.length);
      alert("you can not select more than 5 numbers");
    }
  };

  // const rndInt = Math.floor(Math.random() * 6) + 1;
  // console.log(rndInt);
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

  // for (let j = 0; j < clickedNumbers.length; j++) {
  //   console.log("selected num is:", clickedNumbers[j]);
  // }

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
      {/* <div className="cash_section">
        {cashAmounts.map((amount) => (
          <button
            key={amount}
            className="cash_button"
            onClick={() => handleCashClick(amount)}
          >
            <span className="number">${amount}</span>
          </button>
        ))}
      </div> */}
      <CashComponent
        cashAmounts={cashAmounts}
        handleCashClick={handleCashClick}
      />

      <NumberComponent
        handleClickedNumber={handleClickedNumber}
        allNumbers={allNumbers}
        error={error}
        handleCash={handleCash}
        handleClear={handleClear}
        handleRandom={handleRandom}
      />

      {/* {error ? (
        <p style={{ color: "red" }}>You can not select more than 5 numbers</p>
      ) : (
        ""
      )} */}
      <ClickedNumbers clickedNumbers={clickedNumbers} cashTotal={cashTotal} />
    </div>
  );
}

export default MainContent;
