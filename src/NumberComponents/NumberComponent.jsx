import React from "react";

const NumberComponent = ({
  handleClickedNumber,
  allNumbers,
  error,
  handleCash,
  handleClear,
  handleRandom
}) => {
  return (
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
  );
};

export default NumberComponent;
