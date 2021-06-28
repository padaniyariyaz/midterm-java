import React from "react";

const ClickedNumbers = ({ clickedNumbers, cashTotal }) => {
  return (
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
  );
};

export default ClickedNumbers;
