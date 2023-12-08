import "./App.css";
import Landing from "./Landing";

import Ready from "./Ready";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/use" element={<Ready />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
