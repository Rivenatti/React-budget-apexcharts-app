import React, { Component } from "react";
import "./BudgetPositions.css";
import trash_icon from "../Icons/trash-icon.png";

class BudgetPositions extends Component {
  state = {
    filterDesc: null,
    filteredPositions: []
  };

  // HANDLE DELETE
  handleDelete = description => {
    if (window.confirm("Delete this position?")) {
      this.props.delete(description);
    }
  };

  // FILTER IF STYLE OF THE POSITION IS POSITIVE OR NEGATIVE
  filteredPositionStyle = value => {
    return value >= 0
      ? "budget__position budget__position--positive"
      : "budget__position budget__position--negative";
  };

  filterDesc = event => {
    this.setState({
      ...this.state,
      filterDesc: event.target.value
    });
  };

  filterPositions = () => {
    // CREATE COPY OF THE POSITIONS FROM PROPS
    let positions = this.props.positions;

    // IF FILTERED DESCRIPTION GIVEN THEN FILTER THE POSITIONS
    if (this.state.filterDesc !== null) {
      return positions.filter(position =>
        position.description.includes(this.state.filterDesc)
      );
    } else {
      return positions;
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="budget__history">
        <h1>History</h1>
        <div className="budget__history__filter">
          <span className="budget__history__filter__span">Filter: </span>
          <input
            type="text"
            name="filter_description"
            placeholder="description..."
            onChange={this.filterDesc}
          />
        </div>
        <div className="budget__table">
          <div className="budget__header">
            <div className="budget__header__key">ID</div>
            <div className="budget__header__desc">Description</div>

            <div className="budget__header__cost">Cost</div>

            <div className="budget__header__button">Delete</div>
          </div>
          {this.filterPositions().map(position => {
            return (
              <div
                key={position.key}
                className={this.filteredPositionStyle(position.value)}
              >
                <div className="cell budget__position__key">
                  {position.key}.
                </div>
                <div className="cell budget__position__desc">
                  {position.description}
                </div>
                <div className="cell budget__position__cost">
                  {position.value}
                </div>
                <div className="cell budget__position__button">
                  {/* DELETE BUTTON */}
                  <button
                    className="button button__delete"
                    onClick={() => this.handleDelete(position.key)}
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
  }
}

export default BudgetPositions;
