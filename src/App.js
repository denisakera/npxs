import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// NAVIGATION
import Nav from "./components/Navigation";
// PAGES
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import LeaderBoard from "./components/LeaderBoard";
import styled from "styled-components";

const AppWrapper = styled.div`
padding: 0px 80px 0;

@media only screen and (max-width: 800px) {
  padding: 10px;
}
`
const App = () => (
  <Router>
    <AppWrapper style={{ backgroundColor: "#cecece" }}>
    <Nav />
    <Routes className="container">
      <Route path="/" element={<Home />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/LeaderBoard" element={<LeaderBoard />} />
    </Routes>
    </AppWrapper>
  </Router>
);

export default App;
