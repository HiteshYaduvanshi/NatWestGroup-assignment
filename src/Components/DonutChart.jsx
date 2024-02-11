import React, { useState } from "react";
import Chart from "react-apexcharts";

const cities = [
  {
    name: "Delhi",
    color: "bg-[#588DA8]",
    width: "col-span-7",
    height: "row-span-5",
    donutData: [48, 10, 12, 30],
    index: 0
  },
  {
    name: "Mumbai",
    color: "bg-red-300",
    width: "col-span-5",
    height: "row-span-7",
    donutData: [12,30,10,48],
    index: 1
  },
  {
    name: "Kolkata",
    color: "bg-[#84B9EF]",
    width: "col-span-7",
    height: "row-span-7",
    donutData: [30,10,12,48],
    index:2
  },
  {
    name: "Ahmedabad",
    color: "bg-[#3DB2FF]",
    width: "col-span-5",
    height: "row-span-5",
    donutData: [10, 12, 30,48],
    index:3
  },
  {
    name: "Bangluru",
    color: "bg-[#5463FF]",
    width: "col-span-8",
    height: "row-span-2",
    donutData: [10, 12, 30,48],
    index:4
  },
  {
    name: "Pune",
    color: "bg-[#22559C]",
    width: "col-span-4",
    height: "row-span-2",
    donutData: [10, 12, 30,48],
    index:5
  },
  {
    name: "Chennai",
    color: "bg-red-900",
    width: "col-span-4",
    height: "row-span-9",
    donutData: [10, 12, 30,48],
    index:6
  },
  {
    name: "Surat",
    color: "bg-[#556FB5]",
    width: "col-span-3",
    height: "row-span-7",
    donutData: [10, 12, 30,48],
    index:7
  },
  {
    name: "hyderabad",
    color: "bg-red-700",
    width: "col-span-5",
    height: "row-span-7",
    donutData: [10, 12, 30,48],
    index:8
  },
  {
    name: "lucknow",
    color: "bg-[#A7C5EB]",
    width: "col-span-3",
    height: "row-span-3",
    donutData: [10, 12, 30,48],
    index:9
  },
  {
    name: "Indore",
    color: "bg-[#84B9EF]",
    width: "col-span-2",
    height: "row-span-3",
    donutData: [10, 12, 30,48],
    index:10
  },
  {
    name: "Kanpur",
    color: "bg-[#CDDEFF]",
    width: "col-span-3",
    height: "row-span-3",
    donutData: [10, 12, 30,48],
    index:11
  },
  {
    name: "Jaipur",
    color: "bg-[#00BCD4]",
    width: "col-span-4",
    height: "row-span-1",
    donutData: [10, 12, 30,48],
    index:12
  },
];

const DonutChart = ({ cityName }) => {
  // console.log(cityName);
  const [donutData,setDonutData] = useState(cities[cityName].donutData)
  // console.log(donutData);
  const [state, setState] = useState({
    options: { labels: ["Domestic", "International", "Bonds", "Cash"] },
    series: donutData,
  });
  return (
    <Chart
      options={state.options}
      series={state.series}
      type="donut"
      width="100%"
    />
  );
};

export default DonutChart;
