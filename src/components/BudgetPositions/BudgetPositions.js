import React from "react";
import "./BudgetPositions.css";

const BudgetPositions = props => {
  const handleDelete = description => {
    props.delete(description);
  };

  return (
    <div className="budget__positions">
      <div className="budget__balance">
        {props.positions.map((position, index) => {
          return position.value >= 0 ? (
            <div
              className="budget__position budget__position--positive"
              key={position.description}
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
          ) : (
            <div
              className="budget__position budget__position--negative"
              key={index}
            >
              <span className="actionName">{position.description}</span>
              <span className="moneyAmount">{position.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetPositions;
