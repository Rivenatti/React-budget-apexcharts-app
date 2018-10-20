import React, { Component } from "react";
import "./App.css";
import BudgetAction from "./components/BudgetAction/BudgetAction";
import BudgetPositions from "./components/BudgetPositions/BudgetPositions";

class App extends Component {
  state = {
    positions: []
  };

  handleSubmit = data => {
    this.setState({
      positions: [...this.state.positions, data]
    });
  };

  handleDelete = description => {
    this.setState({
      positions: this.state.positions.filter(
        pos => pos.description !== description
      )
    });
  };

  render() {
    return (
      <div className="App">
        <BudgetAction handleSubmit={this.handleSubmit} />
        <BudgetPositions
          positions={this.state.positions}
          delete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
