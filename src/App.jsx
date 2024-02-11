import { useState } from "react";
import WeatherApp from "./Components/WeatherApp";
import Result from "./Components/Result";
import CityList from "./Components/CityList";
import Charts from "./Components/Charts";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <WeatherApp />
      {/* <Result /> */}
      {/* <CityList /> */}
      {/* <Charts /> */}
    </>
  );
}

export default App;
