import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import myContext from "../context/myContext.js";
import { motion } from "framer-motion";
import "./Projects.css";
import data from "../../portfolio.json";
import { Icon } from "../icons.js";

class Projects extends React.Component {
  static contextType = myContext;

  render() {
    const pageVariants = this.context.pageVariants;
    const pageTransition = this.context.pageTransition;
    return (
      <motion.div exit="out" animate="in" initial="initial" variants={pageVariants} transition={pageTransition}>
        <div className="container">
          <div>
            <h1 className="jumboHeader">More Projects</h1>
          </div>

          <div className="projects">
            {data.moreProjects.map((project) => (
              <div className="project" key={project.title}>
                <div className="container">
                  <div className="box">
                    <div className="imgBx">
                      <img src={project.image} alt={project.title} />
                    </div>
                    <div className="content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="app-features">
                        <h6>FEATURES</h6>
                        <ul className="app-features-list">
                          {project.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="tech-used">
                        <ul>
                          <li>STACK</li>
                          {project.stack.map((tech) => (
                            <li key={tech}>
                              <Icon icon={tech} />
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="jumboButtons">
                        <span className="spanButton">
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            View Project
                          </a>{" "}
                        </span>
                        <span className="spanButton">
                          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                            View Code
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Projects;
