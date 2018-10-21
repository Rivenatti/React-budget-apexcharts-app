import React from "react";
import "./BudgetPositions.css";

const budgetPositions = props => {
  // HANDLE DELETE
  const handleDelete = description => {
    props.delete(description);
  };

  // FILTER POSITIVE AND NEGATIVE BUDGET POSITIONS
  const filteredPositions = value => {
    return value >= 0
      ? "budget__position budget__position--positive"
      : "budget__position budget__position--negative";
  };

  return (
    <div className="budget__positions">
      <div className="budget__balance">
        {props.positions.map(position => {
          return (
            <div
              key={position.description}
              className={filteredPositions(position.value)}
            >
              <span className="actionName">{position.description}</span>
              <span className="moneyAmount">{position.value}</span>
              <button
                className="delete"
                onClick={() => handleDelete(position.description)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default budgetPositions;
