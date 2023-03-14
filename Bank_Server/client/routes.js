import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./src/pages/dashboard";

const Routing = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  </BrowserRouter>;
};

export default Routing;
