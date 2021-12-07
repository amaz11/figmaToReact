import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="gtp3__navbar">
      <div className="gtp3__navbar-links">
        <div className="gtp3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gtp3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gtp3__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gtp3__navbar-menu">
        {toggle ? (
          <i
            className="far fa-times-circle"
            size={27}
            onClick={() => settoggle(false)}
          ></i>
        ) : (
          <i
            className="fas fa-ellipsis-v"
            size={27}
            onClick={() => settoggle(true)}
          ></i>
        )}
        {toggle && (
          <div className="gtp3__navbar-menu_container scale-up-center">
            <div className="gtp3__navbar-menu_container-links">
              <Menu />
              <div className="gtp3__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
