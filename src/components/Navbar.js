import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="light-blue">
        <div className="nav-wrapper">
          <div className="container">
            <NavLink to='/' class="brand-logo">Hello World
              <i className="material-icons">apps</i>
            </NavLink>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <NavLink
                  className="nav-link"
                  to="/"
                  exact
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="/about"
                  activeClassName="active"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="/courses"
                  activeClassName="active"
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="/products"
                  activeClassName="active"
                >
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">Javascript</a>
        </li>
        <li>
          <a href="mobile.html">Mobile</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
