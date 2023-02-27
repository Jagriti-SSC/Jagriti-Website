import React from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {/* <img src={require("../Assets/logo.png")} /> */}
            <img src="https://www.jagritissc.org/static/media/logo.7d7c0e0ba4298a24ed9b3fb458609d4f.svg"></img>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" data-toggle="collapse" data-target=".navbar-collapse">
            <ul className="navbar-nav ms-auto mb-lg-0  ">
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item d-flex">
                <Link className="nav-link" to="/events">
                  Events
                </Link>
              </li>
              <li className="nav-item d-flex">
                <Link className="nav-link" to="/team">
                  Our Team
                </Link>
              </li>
              <li className="nav-item d-flex">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default Navbar;
