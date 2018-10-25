import React, { Component } from "react";
import "./BudgetAction.css";

class BudgetAction extends Component {
  state = {
    description: "",
    value: "",
    key: 0
  };

  getKey = () => {
    return this.state.key + 1;
  };

  onInputChangeHandler = event => {
    if (event.target.name === "description" && event.target.value.length > 30) {
      alert(
        "Warning: given description is too long and has ben shrinked to 30 characters."
      );
    } else if (event.target.name === "value" && event.target.value.length > 9) {
      alert(
        "Error: You're trying to add an action with too big value, max. 9 digits."
      );
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.description && this.state.value) {
      this.setState({
        ...this.state,
        key: this.getKey()
      });
      this.props.handleSubmit(this.state);
      this.setState({
        description: "",
        value: "",
        key: this.getKey()
      });
    } else {
      alert("Error: You're trying to add an action with an empty input data.");
    }
  };

  componentDidMount = () => {
    let getLocalKey = JSON.parse(localStorage.getItem("key")) + 1;

    this.setState({
      ...this.state,
      key: getLocalKey === null ? 0 : getLocalKey
    });
  };

  render() {
    return (
      <div className="budget--action">
        <h1>Add new action</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="description..."
            name="description"
            onChange={this.onInputChangeHandler}
            className="description__input"
            value={this.state.description}
          />
          <input
            type="text"
            placeholder="value..."
            name="value"
            pattern="^-?[1-9]\d*(\.\d+)?$"
            onChange={this.onInputChangeHandler}
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
