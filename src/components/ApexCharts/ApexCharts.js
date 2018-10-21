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
        categories: ["asdad", "asdas", "asdasd", "asdasdas", "asdasd"]
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
        text: "Title",
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
        name: "population",
        data: [123123123, 12313123, 123124152, 345345346, 356425432]
      }
    ]
  };

  render() {
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
