import React from "react";
import "./BudgetPositions.css";
import trash_icon from "../Icons/trash-icon.png";
import edit_icon from "../Icons/edit-icon.png";

const budgetPositions = props => {
  // HANDLE DELETE
  const handleDelete = description => {
    props.delete(description);
  };

  // FILTER IF STYLE OF THE POSITION IS POSITIVE OR NEGATIVE
  const filteredPositionStyle = value => {
    return value >= 0
      ? "budget__position budget__position--positive"
      : "budget__position budget__position--negative";
  };

  return (
    <div className="budget__history">
      <h1>History</h1>
      <div className="budget__history--filter">
        <span>Find: </span>
        <input
          type="text"
          name="filter_description"
          placeholder="description..."
        />
      </div>
      <div className="budget__table">
        <div className="budget__header">
          <div className="budget__header__key">ID</div>
          <div className="budget__header__desc">Description</div>

          <div className="budget__header__cost">Cost</div>

          <div className="budget__header__buttons">Action</div>
        </div>
        {props.positions.map(position => {
          return (
            <div
              key={position.key}
              className={filteredPositionStyle(position.value)}
            >
              <div className="cell budget__position__key">{position.key}.</div>
              <div className="cell budget__position__desc">
                {position.description}
              </div>
              <div className="cell budget__position__cost">
                {position.value}
              </div>
              <div className="cell budget__position__buttons">
                {/* EDIT BUTTON */}
                <button
                  className="button button__edit"
                  onClick={() => handleDelete(position.key)}
                >
                  <img src={edit_icon} alt="edit-icon" />
                </button>

                {/* DELETE BUTTON */}
                <button
                  className="button button__delete"
                  onClick={() => handleDelete(position.key)}
                >
                  <img src={trash_icon} alt="trash-icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default budgetPositions;
