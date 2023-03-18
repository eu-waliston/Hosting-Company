import React from "react";
import "./Nav.css"

const Nav = () => {
  return (
    <>
      <nav class="navbar flex">
        <div class="container flex">
          <a href="index.html" class="navbar-brand flex">
            <img src="../images/site-logo.png" alt="site logo" />
            <span>WebGeek</span>
          </a>
          <button type="button" class="navbar-toggler flex">
            <img src={require("../images/ham-menu-icon.png")} alt="icon"/>
          </button>

          <div class="navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#header" class="nav-link">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="#services" class="nav-link">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a href="#features" class="nav-link">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a href="#testimonials" class="nav-link">
                  Testimonials
                </a>
              </li>
              <li class="nav-item">
                <a href="#pricing" class="nav-link">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
