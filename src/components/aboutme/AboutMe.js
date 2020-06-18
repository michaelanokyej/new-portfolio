import React from "react";
import "./AboutMe.css";
import myContext from "../context/myContext.js";
import { motion } from "framer-motion";

const aboutMe = (props) => {
  return (
    <myContext.Consumer>
      {(context) => {
        const pageVariants = context.pageVariants;
        const pageTransition = context.pageTransition;
        return (
          <motion.div
            exit="out"
            animate="in"
            initial="initial"
            variants={pageVariants}
            transition={pageTransition}
            className="resumeDiv"
          >
            <div className="about__me-div">
              <h1>About Me</h1>
              <div className="about__me-div-quote">
                <blockquote>
                  <p>
                    As a first generation college graduate, I always found it
                    very difficult to navigate the corporate world. So I have
                    always been eager to create products that help and uplift
                    people like me. This is the reason why I am working on a
                    personal project that will make mentorship accessible and
                    available to anyone with a cell phone and internet (click{" "}
                    <a href="https://uplift-olive.now.sh/">here</a> to view
                    project). A true team player offering multiple years of
                    experience in the software industry. Proficient in working
                    with diverse languages.
                  </p>
                </blockquote>
              </div>
              <div className="about__me-div-more">
                <p>
                  My passion for software development is so strong that before I
                  actually started writing code, I learnt hardware first just to
                  get know how the whole infrastructure of connected computers
                  work. Now I can confidently say I know how software and
                  hardware seamlessly interact with each other.
                </p>
                <p>
                  I bring 5 years of professional experience: 2 years in network
                  engineering and hardware deployments which makes me very
                  knowledgeable about how best to secure connections and most
                  effective ways to deploy code. And 3 years in the software
                  industry: working with multiple languages such as python, SQL
                  and Javascript and more.
                </p>
              </div>
              <div className="about__me-div-more">
                <p>
                  As the Lead Remote Hands Technician at Digital Realty, among
                  other things, I was responsible for advising customers such as
                  PNC, Starbucks, Symantec, Nutanix etc on what hardware to
                  deploy and also assisted in configuration of these devices.
                </p>
                <p>
                  As a Full Stack Developer at Ringo Cars, I am on the
                  development team to create a new environment for the company
                  using React.js for the client and Node.js for the server
                  architecture with a SQL database. Because of my previous
                  experience at data centers and with deployments, I am sort of
                  a consigliere for the DevOps team.
                </p>
              </div>
              <div className="about__me-div-more">
                <p>
                  Lastly, as a Software Analyst at Legal General America, I
                  assist in the deployment and maintenance of all in-house
                  applications. I also assist in updating our MySQL database
                  when needed and last but not the least, I am solely developing
                  an error logger for my team to be able to log all the errors
                  we get daily so the development team can adequately fix them.
                </p>
                <p>
                  When I'm not coding, I enjoy doing something creative like
                  painting or being physically active in the gym. I hope you
                  enjoy taking a look around my portfolio, and please don't
                  hesitate to reach out or connect.
                </p>
              </div>
            </div>
          </motion.div>
        );
      }}
    </myContext.Consumer>
  );
};

export default aboutMe;
