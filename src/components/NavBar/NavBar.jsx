import React, { Component } from "react";
import heart from "./heart.png";
import logo from "./logo.png";
import "./NavBar.css";

const NavBar = props => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="nav-icons">
        <div className="donate">
          <a class="navbar-brand" href="https://safeparkingla.networkforgood.com/projects/68953-safe-parking-la" target="_blank" rel="noopener noreferrer">
            <img id="heart-img" src={heart} alt="heart image" />
          </a>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div
          class="collapse navbar-collapse justify-content-end mr-auto mt-2"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="https://www.safeparkingla.org/about" target="_blank" rel="noopener noreferrer">
              About
            </a>
            <a class="nav-item nav-link" href="https://www.safeparkingla.org/green-streets" target="_blank" rel="noopener noreferrer">
              Find Spot
            </a>
            <a class="nav-item nav-link disabled" href="https://www.safeparkingla.org/who-we-serve" target="_blank" rel="noopener noreferrer">
              Stories
            </a>
          </div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
