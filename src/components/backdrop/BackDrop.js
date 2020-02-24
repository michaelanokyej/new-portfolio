import React from "react";
import "./BackDrop.css";
import myContext from "../context/myContext.js";

class BackDrop extends React.Component {
  static contextType = myContext;

  render() {
    return (
      <div
        className="backdrop"
        onClick={e => this.context.backDropClickHandler()}
      />
    );
  }
}

export default BackDrop;
