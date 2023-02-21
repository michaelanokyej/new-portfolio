import React from "react";
import "./AboutMe.css";
import myContext from "../context/myContext.js";
import { motion } from "framer-motion";
import data from "../../portfolio.json";

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
              <h1>{data.aboutMe.title}</h1>
              <div className="about__me-div-quote">
                <blockquote>
                  <p>{data.aboutMe.quote}</p>
                </blockquote>
              </div>
              {data.aboutMe.more.map((paragraph, i) => (
                <div key={i} className="about__me-div-more">
                  <p>{paragraph}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );
      }}
    </myContext.Consumer>
  );
};

export default aboutMe;
