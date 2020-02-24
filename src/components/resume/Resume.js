import React from "react";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <h1>Download Resume</h1>
        <a href="resume-Jan2020(pdf).pdf" download="myResume">
          RESUME
        </a>
      </div>
    );
  }
}

export default Resume;