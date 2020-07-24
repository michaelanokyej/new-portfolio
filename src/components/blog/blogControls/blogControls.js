import React from "react";
import "./blogControls.css";

const BlogControls = (props) => {
  return (
    <>
      <div className="blogListControls">
        <button
          className={props.activeOutputType === "all" ? "active" : ""}
          onClick={props.onChange.bind(this, "all")}
        >
          All Stories
        </button>
        <button
          className={props.activeOutputType === "code" ? "active" : ""}
          onClick={props.onChange.bind(this, "code")}
        >
          Code Stories
        </button>
        <button
          className={props.activeOutputType === "other" ? "active" : ""}
          onClick={props.onChange.bind(this, "other")}
        >
          Other Stories
        </button>
      </div>
    </>
  );
};

export default BlogControls;
