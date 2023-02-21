import React from "react";
import "./Resume.css";
import { motion } from "framer-motion";
import myContext from "../context/myContext.js";
import data from "../../portfolio.json";
import { Icon } from "../icons";

class Resume extends React.Component {
  static contextType = myContext;

  render() {
    const pageVariants = this.context.pageVariants;
    const pageTransition = this.context.pageTransition;
    return (
      <motion.div exit="out" animate="in" initial="initial" variants={pageVariants} transition={pageTransition} className="resumeDiv">
        <header className="major">
          <h1>{data.name}</h1>
          <address>
            <span id="address">
              <Icon icon={data.icons.location} /> {data.address}
            </span>
            |
            <span id="address">
              <Icon icon={data.icons.phone} /> <a href={`tel:${data.phone}`}>{data.phone}</a>
            </span>
            |
            <span id="address">
              <Icon icon={data.icons.envelope} />
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </span>
            |
            <span id="resume">
              <Icon icon={data.icons.download} />{" "}
              <a href={data.resumepdf} download="myResume">
                Resume
              </a>
            </span>
          </address>
        </header>

        <h2 className="resumeHeader">{data.resume.section1.title}</h2>
        <p className="summaryPara">{data.resume.section1.text}</p>
        <hr className="section" />
        <h2 className="resumeHeader">{data.resume.section2.title}</h2>
        <div className="row">
          <div className="col-6 col-12-small">
            <ul className="resumeSkills">
              {data.resume.section2.list1.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-12-small">
            <ul className="resumeSkills">
              {data.resume.section2.list2.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="section" />

        <h2 className="resumeHeader">{data.resume.section3.title}</h2>
        {data.resume.section3.content.map((item, index) => (
          <>
            <h5>{item.title}</h5>
            <ul className="resume_UL">
              {item.list.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul>
            <hr className="experience-separator" />
          </>
        ))}

        <hr className="section" />

        <h2 className="resumeHeader">{data.resume.section4.title}</h2>
        {data.resume.section4.content.map((certification, index) => (
          <>
            <h5 key={index}>{certification.title}</h5>
            <ul className="resume_UL">
              <li>
                <a href={certification.link} className="verification_link">
                  {certification.verification} - Verify
                </a>
              </li>
            </ul>
            {index !== data.resume.section4.length - 1 && <hr className="experience-separator" />}
          </>
        ))}

        <hr className="section" />

        <h2 className="resumeHeader">{data.resume.section5.title}</h2>
        {data.resume.section5.content.map((school, index) => (
          <>
            <h5 key={index}>
              {school.name} | {school.monthYear} | {school.university}
            </h5>
            <ul className="resume_UL">
              {school.majors.map((major, i) => (
                <li key={i}>{major}</li>
              ))}
            </ul>
            {index !== data.resume.section5.length - 1 && <hr className="experience-separator" />}
          </>
        ))}

        <h2 className="resumeHeader">{data.resume.section6.title}</h2>
        <ul className="resume_UL">
          {data.resume.section6.content.map((volunteer, index) => (
            <li key={index}>{volunteer}</li>
          ))}
        </ul>
      </motion.div>
    );
  }
}

export default Resume;
