import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import View from "./file/View";
import Pomorodo from "./file/Pomorodo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/pomorodo" element={<Pomorodo />} />
      </Routes>
    </Router>
  );
}

export default App;
