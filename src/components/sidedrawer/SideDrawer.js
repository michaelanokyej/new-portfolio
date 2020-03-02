import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/">Home</Link>
          </li>
          {/* <li
            onClick={() => {
              this.context.backDropClickHandler();
            }}
          >
            <Link to="/projects">Projects</Link>
          </li> */}
          <li
            onClick={() => {
              this.context.backDropClickHandler();
            }}
          >
            <Link to="/resume">Resume</Link>
          </li>
          <li
            onClick={() => {
              this.context.backDropClickHandler();
            }}
          >
            <a href="https://github.com/michaelanokyej" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
