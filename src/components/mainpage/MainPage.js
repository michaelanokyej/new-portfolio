import React from "react";
import { Route, Switch } from "react-router-dom";
import Resume from "../resume/Resume";
import Projects from "../projects/Projects";
import Blog from "../blog/Blog";
import BlogDetailsPage from "../blog/BlogDetailsPage";
import Home from "../home/Home";
import "./MainPage.css";
import { AnimatePresence } from "framer-motion";

class MainPage extends React.Component {
  render() {
    return (
      <AnimatePresence exitBeforeEnter>
        <main className="App__main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:blogId" component={BlogDetailsPage} />
          </Switch>
        </main>
      </AnimatePresence>
    );
  }
}

export default MainPage;
