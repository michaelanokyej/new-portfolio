import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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
                Proficient in working with diverse languages. Motivated to stay
                informed of latest industry innovations to provide
                customers/users with most up-to-date solutions.
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
          <div className="project">HELLO</div>
          <div className="project">HELLO</div>
          <div className="project">HELLO</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
