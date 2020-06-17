import React from "react";
import { NavLink } from "react-router-dom";
import "./SideDrawer.css";
import myContext from "../context/myContext.js";

class SideDrawer extends React.Component {
  static contextType = myContext;

  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }

    return (
      <nav className={drawerClasses}>
        <ul>
          <li
            onClick={() => {
              this.context.backDropClickHandler();
            }}
          >
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li
            onClick={() => {
              this.context.backDropClickHandler();
            }}
          >
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li
            onClick={() => {
              this.context.backDropClickHandler();
            }}
          >
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li
            onClick={() => {
              this.context.backDropClickHandler();
            }}
          >
            <NavLink to="/me">About Me</NavLink>
          </li>
          <li
            onClick={() => {
              this.context.backDropClickHandler();
            }}
          >
            <NavLink to="/resume">Resume</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
