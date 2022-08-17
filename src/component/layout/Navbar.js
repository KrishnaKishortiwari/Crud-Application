import React from "react";
import {Link, NavLink} from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" >
            CrudApp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <NavLink className="nav-link "  to="/">
                  Home
                </NavLink>
                </li>
                <li className="nav-item active">
                <NavLink className="nav-link " to="/About">
                  About
                </NavLink>
                </li>
                <li className="nav-item active">
                <NavLink className="nav-link " to="/Contact">
                 Contact
                </NavLink>
              </li>
              </ul>
          </div>
          <Link className="btn btn-outline-light" to="/users/AddUsers">Add Users</Link>
        </div>
      </nav>
      </>
  );
}

export default Navbar;
