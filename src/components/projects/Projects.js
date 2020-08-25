import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faReact,
  faNode,
  faJsSquare
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase
} from "@fortawesome/free-solid-svg-icons";
import myContext from "../context/myContext.js";
import { motion } from "framer-motion";
import errorLogger from './new_error-logger.png'
import "./Projects.css";

class Projects extends React.Component {
  static contextType = myContext;

  render() {
    const pageVariants = this.context.pageVariants;
    const pageTransition = this.context.pageTransition;
    return (
      <motion.div
        exit="out"
        animate="in"
        initial="initial"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="container">
          <div>
            <h1 className="jumboHeader">More Projects</h1>
          </div>
          <div className="projects">
            <div className="project">
              <div className="container">
                <div className="box">
                  <div className="imgBx">
                    <img src={errorLogger} alt="error logger" />
                  </div>
                  <div className="content">
                    <h3>Error Logger WebApp</h3>
                    <p>A webApp used to log and generate errors.</p>
                    <div className="app-features">
                      <h6>FEATURES</h6>
                      <ul className="app-features-list">
                        <li>Users can log an error.</li>
                        <li>Users can add a user and a poller.</li>
                        <li>Users can generate a .csv file report.</li>
                      </ul>
                    </div>
                    <div className="tech-used">
                      <ul>
                        <li>STACK</li>
                        <li>
                          <FontAwesomeIcon icon={faHtml5} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCss3} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faNode} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faReact} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faDatabase} />
                        </li>
                      </ul>
                    </div>
                    <div className="jumboButtons">
                      <span className="spanButton">
                        <a
                          href="https://my-error-logger-michael-anokye.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>{" "}
                      </span>
                      <span className="spanButton">
                        <a
                          href="https://github.com/michaelanokyej/error-logger-client"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="container">
                <div className="box">
                  <div className="imgBx">
                    <img
                      src="./project-gifs/private-chat-demo.gif"
                      alt="Private Chat"
                    />
                  </div>
                  <div className="content">
                    <h3>Private Chat App</h3>
                    <p>A webapp for users to instantly chat, privately.</p>
                    <div className="app-features">
                      <h6>FEATURES</h6>
                      <ul className="app-features-list">
                        <li>Users can register.</li>
                        <li>Users can create a room.</li>
                        <li>Any user with a room name can join room.</li>
                        <li>
                          Users are alerted when others join and/or leave.
                        </li>
                      </ul>
                    </div>
                    <div className="tech-used">
                      <ul>
                        <li>STACK</li>
                        <li>
                          <FontAwesomeIcon icon={faHtml5} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCss3} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faNode} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faReact} />
                        </li>
                      </ul>
                    </div>
                    <div className="jumboButtons">
                      <span className="spanButton">
                        <a
                          href="https://private-chat-michael-anokye.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>{" "}
                      </span>
                      <span className="spanButton">
                        <a
                          href="https://github.com/michaelanokyej/instantMessaging-client"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="container">
                <div className="box">
                  <div className="imgBx">
                    <img src="covid-19-tracker.png" alt="covid-19-tracker" />
                  </div>
                  <div className="content">
                    <h3>Covid-19 Tracker</h3>
                    <p>A webapp for Covid 19 globally.</p>
                    <div className="app-features">
                      <h6>FEATURES</h6>
                      <ul className="app-features-list">
                        <li>Users can get global statistics.</li>
                        <li>
                          Users can select a specific country to get statistics
                          from.
                        </li>
                        <li>Users are provided a chart for the statistics.</li>
                      </ul>
                    </div>
                    <div className="tech-used">
                      <ul>
                        <li>STACK</li>
                        <li>
                          <FontAwesomeIcon icon={faHtml5} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCss3} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faReact} />
                        </li>
                      </ul>
                    </div>
                    <div className="jumboButtons">
                      <span className="spanButton">
                        <a
                          href="https://covid-19-tracker-michael-anokye.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>{" "}
                      </span>
                      <span className="spanButton">
                        <a
                          href="https://github.com/michaelanokyej/covid-19-tracker"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="container">
                <div className="box">
                  <div className="imgBx">
                    <img src="news-app.png" alt="News App" />
                  </div>
                  <div className="content">
                    <h3>News App</h3>
                    <p>
                      A webapp that fetches the latest news from Hacker News
                      API.
                    </p>
                    <div className="app-features">
                      <h6>FEATURES</h6>
                      <ul className="app-features-list">
                        <li>Users can go to a news story.</li>
                        <li>Web app has an infinity scroll. </li>
                      </ul>
                    </div>
                    <div className="tech-used">
                      <ul>
                        <li>STACK</li>
                        <li>
                          <FontAwesomeIcon icon={faHtml5} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCss3} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faReact} />
                        </li>
                      </ul>
                    </div>
                    <div className="jumboButtons">
                      <span className="spanButton">
                        <a
                          href="https://my-news-app-michael-anokye.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>{" "}
                      </span>
                      <span className="spanButton">
                        <a
                          href="https://github.com/michaelanokyej/news-app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="container">
                <div className="box">
                  <div className="imgBx">
                    <img
                      src="project-gifs/pdf-gen-demo.gif"
                      alt="PDF Generator"
                    />
                  </div>
                  <div className="content">
                    <h3>PDF Generator</h3>
                    <p>A webapp that generates a pdf file with user input.</p>
                    <div className="app-features">
                      <h6>FEATURES</h6>
                      <ul className="app-features-list">
                        <li>
                          Users can generator pdf files by providing inputs
                        </li>
                        <li>A clean pdf file is generated for users. </li>
                      </ul>
                    </div>
                    <div className="tech-used">
                      <ul>
                        <li>STACK</li>
                        <li>
                          <FontAwesomeIcon icon={faHtml5} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCss3} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faReact} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faNode} />
                        </li>
                      </ul>
                    </div>
                    <div className="jumboButtons">
                      <span className="spanButton">
                        <a
                          href="https://pdf-generator-michael-anokye.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>{" "}
                      </span>
                      <span className="spanButton">
                        <a
                          href="https://github.com/michaelanokyej/pdf-generator-client"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="container">
                <div className="box">
                  <div className="imgBx">
                    <img src="parkfinder.png" alt="parkFinder" />
                  </div>
                  <div className="content">
                    <h3>Park Finder WebApp</h3>
                    <p>An adventure driven web-app that searches for parks.</p>
                    <div className="app-features">
                      <h6>FEATURES</h6>
                      <ul className="app-features-list">
                        <li>Gets weather at the current location</li>
                        <li>Gets parks near user current location</li>
                        <li>User can search for parks anywhere</li>
                        <li>
                          Results of user search is displayed with the weather
                        </li>
                      </ul>
                    </div>
                    <div className="tech-used">
                      <ul>
                        <li>STACK</li>
                        <li>
                          <FontAwesomeIcon icon={faHtml5} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCss3} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faJsSquare} />
                        </li>
                      </ul>
                    </div>
                    <div className="jumboButtons">
                      <span className="spanButton">
                        <a
                          href="https://michaelanokyej.github.io/parkfinder/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>{" "}
                      </span>
                      <span className="spanButton">
                        <a
                          href="https://github.com/michaelanokyej/parkfinder"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="container">
                <div className="box">
                  <div className="imgBx">
                    <img src="calorieCounter.png" alt="calorieCounter" />
                  </div>
                  <div className="content">
                    <h3>Calorie Counter</h3>
                    <p>A webapp for users to keep track of calorie intake.</p>
                    <div className="app-features">
                      <h6>FEATURES</h6>
                      <ul className="app-features-list">
                        <li>Users can register.</li>
                        <li>Users are provided BMI from user info.</li>
                        <li>
                          Users are provided a barchart for calories consumed.
                        </li>
                      </ul>
                    </div>
                    <div className="tech-used">
                      <ul>
                        <li>STACK</li>
                        <li>
                          <FontAwesomeIcon icon={faHtml5} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCss3} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faReact} />
                        </li>
                      </ul>
                    </div>
                    <div className="jumboButtons">
                      <span className="spanButton">
                        <a
                          href="https://calorie-counter-michael-anokye.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>{" "}
                      </span>
                      <span className="spanButton">
                        <a
                          href="https://github.com/michaelanokyej/calorie-counter"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="container">
                <div className="box">
                  <div className="imgBx">
                    <img
                      src="./project-gifs/chuck-norris-demo.gif"
                      alt="wander"
                    />
                  </div>
                  <div className="content">
                    <h3>Chuck Norris Jokes</h3>
                    <p>A webapp that generates random Chuck Norris Jokes.</p>
                    <div className="app-features">
                      <h6>FEATURES</h6>
                      <ul className="app-features-list">
                        <li>Users selecte a category of jokes.</li>
                        <li>Users can go to the next random joke.</li>
                        <li>Users can view the developer.</li>
                      </ul>
                    </div>
                    <div className="tech-used">
                      <ul>
                        <li>STACK</li>
                        <li>
                          <FontAwesomeIcon icon={faHtml5} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCss3} />
                        </li>

                        <li>
                          <FontAwesomeIcon icon={faReact} />
                        </li>
                      </ul>
                    </div>
                    <div className="jumboButtons">
                      <span className="spanButton">
                        <a
                          href="https://chuck-norris-jokes-michael-anokye.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>{" "}
                      </span>
                      <span className="spanButton">
                        <a
                          href="https://github.com/michaelanokyej/chuck-norris-jokes"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="container">
                <div className="box">
                  <div className="imgBx">
                    <img src="./project-gifs/advicely-demo.gif" alt="wander" />
                  </div>
                  <div className="content">
                    <h3>Advicely App</h3>
                    <p>A webapp that generates random advice.</p>
                    <div className="app-features">
                      <h6>FEATURES</h6>
                      <ul className="app-features-list">
                        <li>
                          Users are provided a random advice when page loads.
                        </li>
                        <li>Users can go to the next random advice.</li>
                        <li>Users can go to the developers portfolio.</li>
                      </ul>
                    </div>
                    <div className="tech-used">
                      <ul>
                        <li>STACK</li>
                        <li>
                          <FontAwesomeIcon icon={faHtml5} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCss3} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faNode} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faReact} />
                        </li>
                      </ul>
                    </div>
                    <div className="jumboButtons">
                      <span className="spanButton">
                        <a
                          href="https://advicely-michael-anokye.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>{" "}
                      </span>
                      <span className="spanButton">
                        <a
                          href="https://github.com/michaelanokyej/advicely"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="container">
                <div className="box">
                  <div className="imgBx">
                    <img src="rgb.png" alt="rgb-game" />
                  </div>
                  <div className="content">
                    <h3>RGB Game</h3>
                    <p>A game for users to better understand RGB.</p>
                    <div className="app-features">
                      <h6>FEATURES</h6>
                      <ul className="app-features-list">
                        <li>Displays a color in RGB</li>
                        <li>User clicks on a color to choose</li>
                        <li>User is prompted with results after each click</li>
                        <li>Game can be restarted by user when ended.</li>
                      </ul>
                    </div>
                    <div className="tech-used">
                      <ul>
                        <li>STACK</li>
                        <li>
                          <FontAwesomeIcon icon={faHtml5} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCss3} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faJsSquare} />
                        </li>
                      </ul>
                    </div>
                    <div className="jumboButtons">
                      <span className="spanButton">
                        <a
                          href="https://michaelanokyej.github.io/colorGame/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>{" "}
                      </span>
                      <span className="spanButton">
                        <a
                          href="https://github.com/michaelanokyej/colorGame"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="container">
                <div className="box">
                  <div className="imgBx">
                    <img
                      src="/project-gifs/react-unit-converter-video-demo.gif"
                      alt="unit converter"
                    />
                  </div>
                  <div className="content">
                    <h3>Unit Converter</h3>
                    <p>
                      A react converter that converts temperatures and volumes.
                    </p>
                    <div className="app-features">
                      <h6>FEATURES</h6>
                      <ul className="app-features-list">
                        <li>Users can choose unit to convert.</li>
                        <li>User is provided with options to convert.</li>
                        <li>User is provided with the correct answer.</li>
                        <li>Student input is verified.</li>
                      </ul>
                    </div>
                    <div className="tech-used">
                      <ul>
                        <li>STACK</li>
                        <li>
                          <FontAwesomeIcon icon={faHtml5} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCss3} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faJsSquare} />
                        </li>
                      </ul>
                    </div>
                    <div className="jumboButtons">
                      <span className="spanButton">
                        <a
                          href="https://react-unit-converter-michael-anokye.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>{" "}
                      </span>
                      <span className="spanButton">
                        <a
                          href="https://github.com/michaelanokyej/react-unit-converter"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Projects;
