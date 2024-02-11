import React, { useState } from "react";
import Chart from "react-apexcharts";

function Linecharts() {
  const [state, setState] = useState({
    options: {
      chart: {
        height: 350,
        type: 'line', 
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis: {
        categories: [2014,2015,2016,2017,2018,2019,2020],
      }
    },
    series: [{
      name: "Desktops",
      data: [15000,17000,20000,25000,30000,20000,]
    }]
  });

  return (
    <>
      <Chart
        options={state.options}
        series={state.series}
        type="line" 
        height={550}
        width="100%"
      />
    </>
  )
}

export default Linecharts;
