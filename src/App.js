import React, { Component } from "react";
import "./App.css";
import ApexCharts from "./components/ApexCharts/ApexCharts";
import Balance from "./components/Balance/Balance";
import BudgetAction from "./components/BudgetAction/BudgetAction";
import BudgetPositions from "./components/BudgetPositions/BudgetPositions";

class App extends Component {
  state = {
    positions: [],
    series: [
      {
        name: "balance",
        data: [0]
      }
    ]
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

  handleSubmit = position => {
    let balanceAdd =
      this.state.series[0].data[this.state.series[0].data.length - 1] +
      parseFloat(position.value);

    this.setState({
      ...this.state,
      positions: [...this.state.positions, position],
      series: [
        {
          ...this.state.series[0],
          data: [...this.state.series[0].data, balanceAdd]
        }
      ]
    });
  };

  handleDelete = key => {
    let position = this.state.positions.filter(pos => pos.key === key);
    let positionValue = position[0].value;

    let balanceDelete =
      this.state.series[0].data[this.state.series[0].data.length - 1] -
      positionValue;

    this.setState({
      positions: this.state.positions.filter(pos => pos.key !== key),

      series: [
        {
          ...this.state.series[0],
          data: [...this.state.series[0].data, balanceDelete]
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <ApexCharts series={this.state.series} />
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
