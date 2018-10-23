import React, { Component } from "react";
import "./BudgetActions.css";

class BudgetAction extends Component {
  state = {
    description: null,
    value: null,
    key: 0
  };

  getKey = () => {
    return this.state.key + 1;
  };

  onChangeDescriptionHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      key: this.getKey(),
      description: null,
      value: 0
    });
  };

  render() {
    return (
      <div className="budget--action">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="description..."
            name="description"
            onChange={this.onChangeDescriptionHandler}
            className="description__input"
            value={this.state.description}
          />
          <input
            type="text"
            placeholder="value..."
            name="value"
            pattern="^-?[0-9]\d*(\.\d+)?$"
            onChange={this.onChangeDescriptionHandler}
            className="value__input"
            value={this.state.value}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default BudgetAction;
