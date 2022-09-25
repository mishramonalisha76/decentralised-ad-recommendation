import React from "react";
import Logo from "../../assets/DERECOMMEND.png";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo-div">
        <img src={Logo} alt="logo" />
      </div>
      <Link to="login">
        <button>Launch Dapp</button>
      </Link>
    </nav>
  );
}
