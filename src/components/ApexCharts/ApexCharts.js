import React, { Component } from "react";
import Chart from "react-apexcharts";

class ApexCharts extends Component {
  state = {
    options: {
      chart: {
        background: "f4f4f4",
        foreColor: "#ddd"
      },
      xaxis: {
        categories: [" "]
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      fill: {
        colors: ["#f44336"]
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "BALANCE",
        align: "center",
        margin: 20,
        offsetY: 20,
        style: {
          fontSize: "25px"
        }
      }
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5
      }
    },
    series: [
      {
        name: "balance",
        data: []
      }
    ]
  };

  componentWillReceiveProps = () => {
    const { balance } = this.props;
    console.log(balance);
    this.setState({
      ...this.state,
      series: [
        {
          data: [this.props.balance]
        }
      ]
    });
  };

  render() {
    // console.log("state", this.state.series[0]);
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="line"
        height="250"
        width="90%"
      />
    );
  }
}

export default ApexCharts;
