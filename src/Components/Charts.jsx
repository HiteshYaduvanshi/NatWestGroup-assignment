import React from "react";
import DonutChart from "./DonutChart";
import { useLocation } from "react-router-dom";
import Linecharts from "./Linecharts";
import Table from "./Table";

function Charts() {
  const location = useLocation();
  const cityName = new URLSearchParams(location.search).get("city");
  console.log(cityName);
  return (
    <>
      <div className="md:flex justify-center items-center mt-10 overflow-x-hidden">
        <div className="basis-1/2">
          <DonutChart cityName={cityName} />
        </div>
        <div className="basis-1/2">
          <Linecharts cityName={cityName} />
        </div>
      </div>
      <div className="mt-5">
        <Table />
      </div>
    </>
  );
}

export default Charts;
