import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { shortenAddress } from "../util";

const Navigation = styled.header`
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;

  .logo a {
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;

    p {
      display: block;
    }
    em {
      font-size: 1em;
      float: left;
      display: block;
      color: blue;
      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  }
  .gray {
    color: #ccc;
  }
  a {
    color: #222;
    opacity: 0.55;
    transition: all 0.6s;
    color: #222;
    font-size: 1em;
  }
  a:hover {
    opacity: 1;
  }
  .fa-bars {
    display: none;
    color: #222;
    font-size: 2rem;
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #222;
    }
  }

  @media only screen and (max-width:  768px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      a {
        padding: 20px 0px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 32px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

function Nav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const blockchain = useSelector((state) => state.blockchain);

  function handleToggle() {
    setIsExpanded(!isExpanded);
  }

  return (
    <Navigation>
      <div className="logo">
        <Link to="/">
          <p>NFT PINTXO</p>
          <em>
            <div className="letterhead">
              <span className="name">
                {blockchain.account !== null && shortenAddress(blockchain.account)}
              </span>
            </div>
          </em>
        </Link>
      </div>
      <nav className="nav">
        {blockchain.account !== null && (
          <>
          <GiHamburgerMenu
          className="fa fa-bars"
          aria-hidden="true"
          onClick={handleToggle}
        />
        <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <NavLink to="/">
            <li>Mint</li>
          </NavLink>
          <NavLink to="/Gallery">
            <li>Gallery</li>
          </NavLink>
          <NavLink to="/LeaderBoard">
            <li>LeaderBoard</li>
          </NavLink>
        </ul>
        </>
        )}
        
      </nav>
    </Navigation>
  );
}

export default Nav;
