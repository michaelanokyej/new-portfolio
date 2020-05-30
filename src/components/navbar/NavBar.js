import React from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import DrawerToggleButton from "../sidedrawer/DrawerToggleButton";
import myContext from "../context/myContext.js";

class NavBar extends React.Component {
  static contextType = myContext;

  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__logo">
            <Link to="/">
              <img src="nav-logo.png" alt="logo" />
            </Link>
          </div>
          <div className="spacer" />
          <div className="toolbar_navigation_items">
            <ul>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink exact to="/" >Home</NavLink>
              </li>
              <li>
                <NavLink to="/resume">Resume</NavLink>
              </li>
              <li>
                <a
                  href="https://github.com/michaelanokyej"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className="toolbar__toggle-button">
            <DrawerToggleButton />
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
