import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
];

const citiesTwo = [
  {
    name: "Bangluru",
    color: "bg-[#5463FF]",
    width: "col-span-8",
    height: "row-span-2",
    index:4
  },
  {
    name: "Pune",
    color: "bg-[#22559C]",
    width: "col-span-4",
    height: "row-span-2",
    index:5
  },
  {
    name: "Chennai",
    color: "bg-red-900",
    width: "col-span-4",
    height: "row-span-9",
    index:6
  },
  {
    name: "Surat",
    color: "bg-[#556FB5]",
    width: "col-span-3",
    height: "row-span-7",
    index:7
  },
  {
    name: "hyderabad",
    color: "bg-red-700",
    width: "col-span-5",
    height: "row-span-7",
    index:8
  },
  {
    name: "lucknow",
    color: "bg-[#A7C5EB]",
    width: "col-span-3",
    height: "row-span-3",
    index:9
  },
  {
    name: "Indore",
    color: "bg-[#84B9EF]",
    width: "col-span-2",
    height: "row-span-3",
    index:10
  },
  {
    name: "Kanpur",
    color: "bg-[#CDDEFF]",
    width: "col-span-3",
    height: "row-span-3",
    index:11
  },
  {
    name: "Jaipur",
    color: "bg-[#00BCD4]",
    width: "col-span-4",
    height: "row-span-1",
    index:12
  },
];

function Result() {
  return (
    <>
      <div className="md:flex flex-wrap w-full h-screen justify-start items-start">
        <div className="basis-1/2 p-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 grid-rows-12 gap-3 h-[95vh]">
            {cities.map((city, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 ${city.width} ${city.height} ${city.color} flex justify-center items-center`}
              >
                <NavLink to={`/NatWestGroup-assignment/charts?city=${city.index}`}>
                  <h2 className="text-xl font-bold mb-1">{city.name}</h2>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        <div className="basis-1/2 p-3 pl-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 grid-rows-12 gap-3 h-[95vh]">
            {citiesTwo.map((city, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 ${city.width} ${city.height} ${city.color} flex justify-center items-center`}
              >
                <NavLink to={`/NatWestGroup-assignment/charts?city=${city.index}`}>
                  <h2 className="text-xl font-bold mb-1">{city.name}</h2>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
