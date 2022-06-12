import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { checkIfWalletIsConnect, updateAccount } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
// NAVIGATION
import Nav from "./components/Navigation";
// PAGES
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import LeaderBoard from "./components/LeaderBoard";
import styled from "styled-components";
import UsersNfts from './components/UsersNfts';
import Ticket from "./components/Ticket";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";

const AppWrapper = styled.div`
  padding: 0px 80px 0;

  @media only screen and (max-width: 768px) {
    padding: 0px 10px 0px;
  }
`
const App = () => {
  const blockchain = useSelector((state) => state.blockchain);
  const dispatch = useDispatch();

  const getData = () => {
    if (blockchain.account !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    dispatch(checkIfWalletIsConnect());
    getData();
  }, [])

  useEffect(() => {

    if (window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      })
      window.ethereum.on('accountsChanged', (accounts) => {
        dispatch(updateAccount(accounts[0]));
      })
    }
  })

  return (
    <Router>
      <AppWrapper style={{ backgroundColor: "#F0C808" }}>
      <s.Screen>
        <Nav />
        <Routes className="container">
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Ticket" element={<Ticket />} />
          <Route path="/Gallery/:signature" element={<UsersNfts />} />
          <Route path="/LeaderBoard" element={<LeaderBoard />} />
        </Routes>
        <Footer />
        </s.Screen>
      </AppWrapper>
    </Router>
  )
};

export default App;
