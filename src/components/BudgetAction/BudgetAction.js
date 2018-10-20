import React, { Component } from "react";
import "./BudgetActions.css";

class BudgetAction extends Component {
  state = {
    description: "",
    value: 0
  };

  onChangeDescriptionHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
  };

  render() {
    return (
      <div className="budget--action">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="description"
            name="description"
            onChange={this.onChangeDescriptionHandler}
            className="description__input"
          />
          <input
            type="text"
            name="value"
            pattern="^-?[0-9]\d*(\.\d+)?$"
            onChange={this.onChangeDescriptionHandler}
            className="value__input"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default BudgetAction;
