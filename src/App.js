import React, { Component } from "react";
import "./App.css";
import ApexCharts from "./components/ApexCharts/ApexCharts";
import Balance from "./components/Balance/Balance";
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

  calculateBalance = () => {
    let balance = this.state.positions.reduce(
      (acc, position) => acc + parseFloat(position.value),
      0
    );
    return balance;
  };

  calculateIncome = () => {
    let income = this.state.positions
      .filter(position => parseFloat(position.value) >= 0)
      .reduce((acc, pos) => acc + parseFloat(pos.value), 0);
    return income;
  };

  calculateOutcome = () => {
    let outcome = this.state.positions
      .filter(position => parseFloat(position.value) < 0)
      .reduce((acc, pos) => acc + parseFloat(pos.value), 0);
    return outcome;
  };

  render() {
    return (
      <div className="App">
        <ApexCharts />
        <Balance
          balance={this.calculateBalance()}
          income={this.calculateIncome()}
          outcome={this.calculateOutcome()}
        />
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
