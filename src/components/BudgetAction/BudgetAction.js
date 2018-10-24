import React, { Component } from "react";
import "./BudgetAction.css";

class BudgetAction extends Component {
  state = {
    description: "",
    value: 0,
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
      key: this.getKey()
    });
    this.props.handleSubmit(this.state);
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
            onChange={this.onChangeDescriptionHandler}
            className="description__input"
            ref="description"
          />
          <input
            type="text"
            placeholder="value..."
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
