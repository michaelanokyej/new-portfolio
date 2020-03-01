import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3, faJsSquare } from '@fortawesome/free-brands-svg-icons'

import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="myJumbotron">
          <div className="jumbotronItem profileImgContainer">
            <img
              src="profilePic.jpeg"
              alt="profilePic"
              className="profilePic"
            />
          </div>
          <div className="jumbotronItem">
            <div>
              <h1 className="jumboHeader">Hi, I'm Michael Anokye</h1>
              <p>
                Multi-faceted software engineer who is knowledgeable in
                JavaScript, Python, MySQL, HTML, etc. A true team player
                offering multiple years of experience in the software industry.
                Proficient in working with diverse languages.
              </p>
            </div>
            <div className="jumboButtons">
              <span className="spanButton">
                <Link to="/resume">About Me</Link>{" "}
              </span>
              <span className="spanButton">
                <a href="resume-Jan2020(pdf).pdf" download="myResume">
                  Download Resume
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="skillsDiv">
          <div className="skillsItem skills">
            <h4>Skills</h4>
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
                <span className="framework-skills">MySQL, PostgreSQL</span>
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
                  API development skills (REST)
                </span>
              </li>
            </ul>
            <div className="jumboButtons">
              <span className="spanButton">
                <Link to="/resume">Learn More</Link>
              </span>
            </div>
          </div>
          <div className="skillsItem qualifications">
            <h4>Qualifications</h4>
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
                  Thinkful Web Developer Bootcamp
                </span>
                <span className="framework-skills">March, 2020</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="projectsDiv">
          <h4>Latest Projects</h4>
          <div className="projects">
            <div className="project">
              <div className="container">
                <div className="box">
                  <div className="imgBx">
                    <img src="wander.png" alt="parkFinder" />
                  </div>
                  <div className="content">
                    <h3>Wander WebApp</h3>
                    <p>
                      Multi-faceted software engineer who is knowledgeable in
                      JavaScript, Python, MySQL, HTML, etc. A true team player
                      offering multiple years of experience in the software
                      industry. Seeking the opportunity to provide outstanding,
                      clean code in a collaborative environment. Proficient in
                      working with diverse languages. Motivated to stay informed
                      of the latest industry innovations to provide
                      customers/users with the most up-to-date solutions.
                    </p>
                    <div className="jumboButtons">
                      <span className="spanButton">
                        <a
                          href="https://wander-client.michaelanokyej.now.sh/home"
                          target="_blank"
                        >
                          View Project
                        </a>{" "}
                      </span>
                      <span className="spanButton">
                        <a
                          href="https://github.com/michaelanokyej/wander-client"
                          target="_blank"
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
                    <p>
                      Multi-faceted software engineer who is knowledgeable in
                      JavaScript, Python, MySQL, HTML, etc. A true team player
                      offering multiple years of experience in the software
                      industry. Seeking the opportunity to provide outstanding,
                      clean code in a collaborative environment. Proficient in
                      working with diverse languages. Motivated to stay informed
                      of the latest industry innovations to provide
                      customers/users with the most up-to-date solutions.
                    </p>
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
                        <li><FontAwesomeIcon icon={faHtml5} /></li>
                        <li><FontAwesomeIcon icon={faCss3} /></li>
                        <li><FontAwesomeIcon icon={faJsSquare} /></li>
                      </ul>
                    </div>
                    <div className="jumboButtons">
                      <span className="spanButton">
                        <a
                          href="https://michaelanokyej.github.io/parkfinder/"
                          target="_blank"
                        >
                          View Project
                        </a>{" "}
                      </span>
                      <span className="spanButton">
                        <a
                          href="https://github.com/michaelanokyej/parkfinder"
                          target="_blank"
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
        <div id="contact">
          <h4 className="center contactMessage">Get in touch</h4>
          <div className="contactWrapper animated bounceInLeft">
            <div class="myInfo">
              <h5>Michael Anokye</h5>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faRoad} /> Rockville, MD
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  michaelanokyej@yahoo.com
                </li>
              </ul>
            </div>
            <div class="contactForm">
              <form action="mailto:michaelanokyej@yahoo.com">
                <p>
                  <label>Name</label>
                  <input type="text" name="name" />
                </p>
                <p>
                  <label>Company</label>
                  <input type="email" name="company" />
                </p>
                <p>
                  <label>Email Address</label>
                  <input type="email" name="email" />
                </p>
                <p>
                  <label>Phone Number</label>
                  <input type="Number" name="phone" />
                </p>
                <p class="full">
                  <label>Message</label>
                  <textarea name="message" rows="4"></textarea>
                </p>
                <p class="full">
                  <button>Submit</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
