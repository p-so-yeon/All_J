import "./App.css";
import Landing from "./Landing";
import ReactGA from "react-ga4";
import Ready from "./Ready";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const gaTrackingId = process.env.REACT_APP_GOOGLE_ANALYTICS;
ReactGA.initialize(gaTrackingId, { debug: true });
function App() {
  useEffect(() => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.event({
      category: "Navigation",
      action: "PageView",
      label: window.location.pathname,
    });
  }, []);
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
