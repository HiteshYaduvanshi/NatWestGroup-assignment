import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import WeatherApp from "./Components/WeatherApp.jsx";
import Result from "./Components/Result.jsx";
import Layout from "./Layout.jsx";
import Charts from "./Components/Charts.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/NatWestGroup-assignment" element={<Layout />}>
      <Route index exact="true" element={<WeatherApp />} />
      <Route path="AssignmentTwo" exact element={<Result />} />
      <Route path="charts" exact element={<Charts />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
