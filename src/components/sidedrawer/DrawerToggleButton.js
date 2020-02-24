import React from "react";
import "./DrawerToggleButton.css";
import myContext from "../context/myContext.js";

class DrawerToggleButton extends React.Component {
  static contextType = myContext;

  render() {
    return (
      <button
        className="toggle-button"
        onClick={e => this.context.drawerToggleClickHandler()}
      >
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
      </button>
    );
  }
}

export default DrawerToggleButton;
