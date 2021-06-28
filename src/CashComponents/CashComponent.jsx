import React from "react";

const CashComponent = ({ cashAmounts, handleCashClick }) => {
  return (
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
  );
};

export default CashComponent;
