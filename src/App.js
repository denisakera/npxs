import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// NAVIGATION
import Nav from "./components/Navigation";
// PAGES
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import LeaderBoard from "./components/LeaderBoard";


const App = () => (
  <Router>
    <Nav />
    <Routes className="container">
      <Route path="/" element={<Home />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/LeaderBoard" element={<LeaderBoard />} />
    </Routes>
  </Router>
);

export default App;
