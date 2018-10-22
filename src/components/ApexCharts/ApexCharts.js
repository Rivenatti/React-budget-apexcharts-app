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
    }
  };

  render() {
    // console.log("Apex props", this.props);
    // console.log("Apex state series", this.state.series);
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.props.series}
          type="line"
          height="250"
          width="90%"
        />
        {/* <button onClick={this.handleRefresh}>Refresh</button> */}
      </div>
    );
  }
}

export default ApexCharts;
