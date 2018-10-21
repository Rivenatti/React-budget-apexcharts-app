import React, { Component } from "react";
import "./Balance.css";

class Balance extends Component {
  render() {
    return (
      <div className="balance">
        <div className="totalBalance">Balance: {this.props.balance}</div>
        <div className="row">
          <div className="income">Income: {this.props.income}</div>
          <div className="outcome">Outcome: {this.props.outcome}</div>
        </div>
      </div>
    );
  }
}

export default Balance;
