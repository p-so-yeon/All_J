import "./App.css";
import Landing from "./Landing";
import Example from "./Example";
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
          <Route path="/Example" element={<Example />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
