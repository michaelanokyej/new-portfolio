import React from "react";
import { Route, Switch } from "react-router-dom";
import Resume from "../resume/Resume";
import Projects from "../projects/Projects";
import Blog from "../blog/Blog";
import BlogDetailsPage from "../blog/BlogDetailsPage";
import AboutMe from "../aboutme/AboutMe";
import Home from "../home/Home";
import Admin from "../admin/Admin";
import "./MainPage.css";
import { AnimatePresence } from "framer-motion";

class MainPage extends React.Component {
  render() {
    return (
      <AnimatePresence exitBeforeEnter>
        <main className="App__main">
          <Switch>
            <Route exact path="/" component={Home} />
            {process.env.NODE_ENV === "development" && <Route exact path="/admin" component={Admin} />}
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/me" component={AboutMe} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/blogs" component={Blog} />
            <Route exact path="/blogs/:blogId" component={BlogDetailsPage} />
          </Switch>
        </main>
      </AnimatePresence>
    );
  }
}

export default MainPage;
