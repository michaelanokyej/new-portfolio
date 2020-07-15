import React from "react";
import "./Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faMapMarkerAlt,
  faEnvelope,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import myContext from "../context/myContext.js";

class Resume extends React.Component {
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
        className="resumeDiv"
      >
        <header className="major">
          <h1>MICHAEL ANOKYE</h1>
          <address>
            {" "}
            <span id="address">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Rockville, MD
            </span>{" "}
            |{" "}
            <span id="address">
              <FontAwesomeIcon icon={faMobileAlt} />{" "}
              <a href="tel:+15715528289">+15715528289</a>
            </span>
            |{" "}
            <span id="address">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:michaelanokyej@yahoo.com">
                {" "}
                michaelanokyej@yahoo.com{" "}
              </a>
            </span>
            |{" "}
            <span id="resume">
              <FontAwesomeIcon icon={faDownload} />{" "}
              <a href="my-resume.pdf" download="myResume">
                Resume
              </a>
            </span>
          </address>
        </header>
        <h2 className="resumeHeader">Summary</h2>
        <p className="summaryPara">
          Multi-faceted software engineer who is knowledgeable in JavaScript,
          Python, MySQL, HTML, etc. A true team player offering multiple years
          of experience in the software industry. Seeking the opportunity to
          provide outstanding, clean code in a collaborative environment.
          Proficient in working with diverse languages. Motivated to stay
          informed of latest industry innovations to provide customers/users
          with most up-to-date solutions. Capable of working in high-pressure
          environments while meeting business needs and project expectations​.{" "}
        </p>
        <hr className="section" />
        <h2 className="resumeHeader">SKILLS</h2>
        <div className="row">
          <div className="col-6 col-12-small">
            <ul className="resumeSkills">
              <li>
                Extensive knowledge in HTML, CSS, JavaScript, React.js,
                Express.js, Node.js and others
              </li>
              <li>
                Extensive knowledge in Databases; MongoDB, PostgreSQL, Oracle
                DB, MySQL etc
              </li>
              <li>Experience scripting in python, batch and bash</li>
            </ul>
          </div>
          <div className="col-6 col-12-small">
            <ul className="resumeSkills">
              <li>Experience working with Git and Github</li>
              <li>
                Experience with testing technologies such as Mocha, Chai,
                Jasmine, Karma, Webpack, Browserify, Heroku, Enzyme.
              </li>
              <li>Hosting, Deployment & Maintenance</li>
            </ul>
          </div>
        </div>

        <hr className="section" />

        <h2 className="resumeHeader">Experience</h2>
        <h5>
          Software Analyst | Legal General America | October, 2019 TO PRESENT
        </h5>
        <ul>
          <li>Deploying in-house applications</li>
          <li>
            Developing an in-house error logger for all in house applications
          </li>
          <li>
            Designing and developing a scalable virtual environment for
            Operations team.
          </li>
          <li>Updating and maintaining an SQL database.</li>
          <li>Create and troubleshoot scripts to automate redundant tasks.</li>
        </ul>

        <hr className="experience-separator" />

        <h5>
          Full Stack Developer - REMOTE | RingoCars & Autoparts | April, 2019
          –Present
        </h5>
        <ul>
          <li>
            Developing and Designing Solutions using Agile Software Development
            Methodology (Scrum and Kanban)
          </li>
          <li>Using React for the front end client</li>
          <li>
            Building the API/Backend of company website with NODEJS / EXPRESS​
            ​Building the company database with POSTGRESQL
          </li>
          <li>
            Collaborate with the rest of the engineering team using Git to
            design and launch new features.
          </li>
        </ul>

        <hr className="experience-separator" />

        <h5>
          Remote Hands Technician - LEAD | Digital Realty | July,2017 –
          October,2019
        </h5>
        <ul>
          <li>
            Assisted customers with the basic-mid level configuration assistance
            of routers, servers and switches to include naming, IP addressing,
            service turn ups, vlan creations, etc.
          </li>
          <li>
            Monitored the data center's mission critical infrastructure with the
            use of monitoring systems and inventory databases
          </li>
          <li>
            Provided timely customer and internal updates using a computer based
            ticketing system
          </li>
          <li>
            Assist customers with the diagnosis of hardware and software to
            include but not limited to iLO, iDrac, IOS configurations; server
            components such as WCM, WCB, motherboards, CPUs, fan modules, heat
            sinks, etc. on their network equipment
          </li>
        </ul>

        <hr className="section" />

        <h2 className="resumeHeader">Certifications</h2>
        <h5>CISCO CCNA</h5>
        <ul>
          <li>
            <a href="https://www.youracclaim.com/badges/9599f28d-0590-4708-bec9-1fdca5129810/public_url">
              ROUTING AND SWITCHING - Verify
            </a>
          </li>
        </ul>

        <hr className="experience-separator" />

        <h5>AMAZON WEB SERVICES</h5>
        <ul>
          <li>
            <a href="https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=Z8VB12F21E141YSM">
              CERTIFIED DEVELOPER(ASSOCIATE DVA) - Verify
            </a>
          </li>
        </ul>

        <hr className="section" />

        <h2 className="resumeHeader">EDUCATION</h2>
        <h5>
          GEOGRAPHY | JUNE 2013 | KWAME NKRUMAH UNIVERSITY OF SCIENCE AND
          TECHNOLOGY
        </h5>
        <ul>
          <li>Major: Geographic Information Systems</li>
          <li>Minor: Economics</li>
        </ul>

        <hr className="experience-separator" />

        <h5>THINKFUL | Engineering: Nights and Weekends</h5>
        <ul>
          <li>Javascript (React.js, JQuery, NODE.js, EXPRESS.js etc)</li>
          <li>SQL (MySQL and PostgreSQL)</li>
          <li>Testing</li>
          <li>Data Structures and Algorithms</li>
        </ul>

        <hr className="section" />

        <h2 className="resumeHeader">Volunteering / Community Service</h2>
        <ul>
          <li>
            Vice President of the Groove phi Groove SFI (Garden City Chapter.),
            Kumasi, Ghana.
          </li>
          <li>
            Head of the mentor-ship programs of Groove Phi Groove S.F.I Kumasi ,
            Ashanti.
          </li>
          <li>
            Organize Charity events such as book drives, feed the hungry etc.
          </li>
          <li>
            Community work; environmental sanitation and public education.
          </li>
        </ul>
      </motion.div>
    );
  }
}

export default Resume;
