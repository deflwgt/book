/* eslint-disable no-unused-vars */
import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>What new ?</li>
          <li>Books </li>
          <li>Podcasts</li>
          <li>Motivations</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className="icons" />
        <img src={bell_icon} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className="icons" />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p>Sign Out accout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
