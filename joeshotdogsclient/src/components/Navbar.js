import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Joe's Hot Dogs
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link" href="#">
              Menu
            </a>
            <a class="nav-link" href="#">
              Cart
            </a>
            <a class="nav-link" href="#">
              Orders
            </a>
            <a class="nav-link" href="#">
              Log Out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
