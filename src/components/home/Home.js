import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoad,
  faEnvelope,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import myContext from "../context/myContext.js";
import "./Home.css";
import { motion } from "framer-motion";

class Home extends React.Component {
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
        <div className="myJumbotron">
          <div className="jumbotronItem profileImgContainer">
            <img src="profilePic.jpg" alt="profilePic" className="profilePic" />
          </div>
          <div className="jumbotronItem">
            <div>
              <h1 className="jumboHeader">Hi, I'm Michael Anokye</h1>
              <p>
                Multi-faceted software engineer who is knowledgeable in
                JavaScript, Python, SQL, HTML, etc. A true team player offering
                multiple years of experience in the software industry.
                Proficient in working with diverse languages. When I'm not
                coding, I enjoy doing something creative like painting or being
                physically active in the gym.
              </p>
            </div>
            <div className="jumboButtons">
              <button className="spanButton">
                <Link to="/resume">About Me</Link>{" "}
              </button>
              <button className="spanButton">
                <a
                  href="Michael-Anokye-Resume-Apr-2020.docx"
                  download="myResume"
                >
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="skillsDiv">
          <div className="skillsItem skills">
            <h4 className="home-section-header">Skills</h4>
            <ul className="skills-qualif-list">
              <li>
                <span className="framework">JavaScript Frameworks:</span>{" "}
                <span className="framework-skills">
                  ReactJS, Node.js, Jquery, ExpressJS etc.
                </span>
              </li>
              <li>
                <span className="framework">Testing Frameworks:</span>
                <span className="framework-skills">
                  Jasmine, Karma, Mocha, Chai
                </span>
              </li>
              <li>
                <span className="framework">Scripting Technology:</span>{" "}
                <span className="framework-skills">Python, BASH, Batch</span>
              </li>
              <li>
                <span className="framework">Database:</span>{" "}
                <span className="framework-skills">
                  MySQL, PostgreSQL, MongoDB
                </span>
              </li>
              <li>
                <span className="framework">Amazon Web Services:</span>{" "}
                <span className="framework-skills">
                  EC2, ELB, API Gateway, S3 etc
                </span>
              </li>
              <li>
                <span className="framework">Additional Skills:</span>{" "}
                <span className="framework-skills">
                  API development skills (REST) etc
                </span>
              </li>
            </ul>
            <div className="jumboButtons">
              <button className="spanButton">
                <Link to="/resume">Learn More</Link>
              </button>
            </div>
          </div>
          <div className="skillsItem qualifications">
            <h4 className="home-section-header">Qualifications</h4>
            <ul className="skills-qualif-list">
              <li>
                <span className="framework">
                  Amazon AWS Certified Developer
                </span>
                <span className="framework-skills">
                  <a href="https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=Z8VB12F21E141YSM">
                    Verify
                  </a>
                </span>
              </li>
              <li>
                <span className="framework">
                  Cisco Certified Network Associate (CCNA)
                </span>
                <span className="framework-skills">
                  <a href="https://www.youracclaim.com/badges/9599f28d-0590-4708-bec9-1fdca5129810/public_url">
                    Verify
                  </a>
                </span>
              </li>
              <li>
                <span className="framework">
                  Thinkful Engineering Immersion Program
                </span>
                <span className="framework-skills">March, 2020</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="projectsDiv">
          <h4 className="home-section-header">A Few Projects</h4>
          <h6>
            <span className="PSA">Hover/Tap On A Project For More</span>
          </h6>
          <div className="projects">
            <div className="project">
              <div className="container">
                <div className="box">
                  <div className="imgBx">
                    <img src="wander.png" alt="wander" />
                  </div>
                  <div className="content">
                    <h3>Wander WebApp</h3>
                    <p>A webapp for users that wander and find new places.</p>
                    <div className="app-features">
                      <h6>FEATURES</h6>
                      <ul className="app-features-list">
                        <li>
                          Users can search for tours in every state in the USA
                        </li>
                        <li>New users can sign up to book tours.</li>
                        <li>Old users can sign in too book tours.</li>
                        <li>
                          A registered user can become a guide by posting a
                          tour.
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
                        <li>
                          <FontAwesomeIcon icon={faDatabase} />
                        </li>
                      </ul>
                    </div>
                    <div className="jumboButtons">
                      <span className="spanButton">
                        <a
                          href="https://wander-client.michaelanokyej.now.sh/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>{" "}
                      </span>
                      <span className="spanButton">
                        <a
                          href="https://github.com/michaelanokyej/wander-client"
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
                    <img src="upLift-home.png" alt="upLift" />
                  </div>
                  <div className="content">
                    <h3>UpLift WebApp</h3>
                    <p>A webapp to make mentorship accessible to users.</p>
                    <div className="app-features">
                      <h6>FEATURES</h6>
                      <ul className="app-features-list">
                        <li>Users can sign up/sign in.</li>
                        <li>Users can post something.</li>
                        <li>Users can comment on posts</li>
                        <li>Users can send messages</li>
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
                          href="https://uplift-olive.now.sh/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>{" "}
                      </span>
                      <span className="spanButton">
                        <a
                          href="https://github.com/irodriguez20/team-mike-india-client"
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
                    <img
                      src="project-gifs/pdf-gen-demo.gif"
                      alt="PDF Generator"
                    />
                  </div>
                  <div className="content">
                    <h3>PDF Generator</h3>
                    <p>A webapp that generats a pdf file with user input.</p>
                    <div className="app-features">
                      <h6>FEATURES</h6>
                      <ul className="app-features-list">
                        <li>
                          Users can can generator pdf files by providing inputs
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
          </div>
          <div className="jumboButtons">
            <button className="spanButton">
              <Link to="/projects">More Projects</Link>
            </button>
          </div>
        </div>
        <div id="contact">
          <h4 className="center contactMessage">Get in touch</h4>
          <div className="contactWrapper animated bounceInLeft">
            <div className="myInfo">
              <h5>Michael Anokye</h5>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faRoad} /> Rockville, MD
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} /> michaelanokyej@yahoo.com
                </li>
              </ul>
            </div>
            <div className="contactForm">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-recaptcha="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label>Name</label>
                  <input type="text" name="name" />
                </div>
                <div>
                  <label>Company</label>
                  <input type="text" name="company" />
                </div>
                <div>
                  <label>Email Address</label>
                  <input type="email" name="email" />
                </div>
                <div>
                  <label>Phone Number</label>
                  <input type="Number" name="phone" />
                </div>
                <div className="full">
                  <label>Message</label>
                  <textarea name="message" rows="4"></textarea>
                </div>
                <div>
                  <div data-netlify-recaptcha="true"></div>
                </div>
                <div className="full">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Home;
