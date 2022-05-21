import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// NAVIGATION
import Nav from "./components/Navigation";
// PAGES
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import LeaderBoard from "./components/LeaderBoard";
import styled from "styled-components";
import { useSelector } from "react-redux";

const AppWrapper = styled.div`
  padding: 0px 80px 0;

  @media only screen and (max-width: 768px) {
    padding: 0px 10px 0px;
  }
`
const App = () => {
  const address = useSelector((state) => state.blockchain.account);

  return (
    <Router>
      <AppWrapper style={{ backgroundColor: "#cecece" }}>
        {address !== null && <Nav />}
        <Routes className="container">
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/LeaderBoard" element={<LeaderBoard />} />
        </Routes>
      </AppWrapper>
    </Router>
  )
};

export default App;
