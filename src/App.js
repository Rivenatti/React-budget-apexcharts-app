import React, { Component } from "react";
import ApexCharts from "./components/ApexCharts/ApexCharts";
import Balance from "./components/Balance/Balance";
import BudgetAction from "./components/BudgetAction/BudgetAction";
import BudgetPositions from "./components/BudgetPositions/BudgetPositions";
import Footer from "./components/Footer/Footer";

class App extends Component {
  // APP STATE
  state = {
    positions: [],
    series: [
      {
        name: "balance",
        data: [0]
      }
    ]
  };

  // ADD NEW ACTION SUBMIT HANDLER
  handleSubmit = position => {
    // GET LAST POSITION BALANCE VALUE FROM STATE AND ADD NEW VALUE, THEN SET NEW POSITION AND NEW BALANCE IN THE STATE
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

  // CALCULATE BALANCE METHOD
  calculateBalance = () => {
    let balance = this.state.positions.reduce(
      (acc, position) => acc + parseFloat(position.value),
      0
    );
    return balance;
  };

  // CALCULATE INCOME METHOD
  calculateIncome = () => {
    let income = this.state.positions
      .filter(position => parseFloat(position.value) >= 0)
      .reduce((acc, pos) => acc + parseFloat(pos.value), 0);
    return income;
  };

  // CALCULATE OUTCOME METHOD
  calculateOutcome = () => {
    let outcome = this.state.positions
      .filter(position => parseFloat(position.value) < 0)
      .reduce((acc, pos) => acc + parseFloat(pos.value), 0);
    return outcome;
  };

  // DELETE ACTION HANDLER
  handleDelete = key => {
    // GET POSITON FROM THE STATE
    let position = this.state.positions.filter(pos => pos.key === key);
    let positionValue = position[0].value;

    let indexOfPosition =
      this.state.positions.findIndex(i => i.key === position[0].key) + 1;

    // CREATE COPY OF BALANCE HISTORY, THEN REMOVE THE SAME INDEX AS POSITION INDEX IN STATE
    let balanceDel = this.state.series[0].data.slice();

    balanceDel.splice(indexOfPosition, 1);

    // UPDATE NEXT BALANCE HISTORY POSITIONS REMOVING THE GIVEN VALUE
    for (let i = indexOfPosition; i < balanceDel.length; i++) {
      balanceDel[i] -= positionValue;
    }

    let positionsKeys = this.state.positions.slice();
    let updatePositions = positionsKeys
      .filter(pos => pos.key !== key)
      .map(
        position =>
          position.key > key ? { ...position, key: position.key - 1 } : position
      );

    this.setState({
      positions: updatePositions,

      series: [
        {
          ...this.state.series[0],
          data: balanceDel
        }
      ]
    });
  };

  // AFTER UPDATING THE STATE, SET IN IN LOCAL STORAGE
  componentDidUpdate = () => {
    localStorage.setItem("state", JSON.stringify(this.state));
    this.state.positions[0]
      ? localStorage.setItem(
          "key",
          JSON.stringify(
            this.state.positions[this.state.positions.length - 1].key
          )
        )
      : localStorage.setItem("key", 0);
  };

  // ON COMPONENT MOUNT GET DATA FROM LOCAL STORAGE
  componentDidMount = () => {
    let localState = JSON.parse(localStorage.getItem("state"));

    this.setState({
      ...localState
    });
  };

  render() {
    return (
      <div>
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
        <Footer />
      </div>
    );
  }
}

export default App;
