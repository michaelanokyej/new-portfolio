import React from "react";
import { Route } from "react-router-dom";
import Resume from "../resume/Resume";
import Projects from "../projects/Projects";
import Home from "../home/Home";
import "./MainPage.css";
class MainPage extends React.Component {
  render() {
    return (
      <main className="App__main">
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
      </main>
    );
  }
}

export default MainPage;
