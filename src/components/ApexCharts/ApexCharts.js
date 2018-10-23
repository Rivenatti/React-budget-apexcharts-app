import React, { Component } from "react";
import Chart from "react-apexcharts";

class ApexCharts extends Component {
  state = {
    options: {
      chart: {
        background: "#3b3e42",
        foreColor: "#DF8C51"
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
        colors: ["#2a86ff"]
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
          fontSize: "25px",
          color: "#DF8C51"
        }
      }
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5
      }
    }
  };

  render() {
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.props.series}
          type="line"
          height="250"
          width="90%"
        />
      </div>
    );
  }
}

export default ApexCharts;
