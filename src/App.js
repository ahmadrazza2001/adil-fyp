import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./home";
import Admission from "./admission";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/admission" element={<Admission />} exact />
      </Routes>
    </Router>
  );
}

export default App;
