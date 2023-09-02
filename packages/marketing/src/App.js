import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Landing from "./components/Landing.component";
import Pricing from "./components/Pricing.component";
import Header from "./components/Header.component";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
