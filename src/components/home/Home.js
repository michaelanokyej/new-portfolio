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
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import myContext from "../context/myContext.js";
import "./Home.css";
import { motion } from "framer-motion";
import config from "../../config";
import Swal from "sweetalert2";
import Typical from "react-typical";
import data from "./data.json";

const Icon = ({ icon }) => {
  let res;
  switch (icon) {
    case "faHtml5":
      res = <FontAwesomeIcon icon={faHtml5} />;
      break;
    case "faCss3":
      res = <FontAwesomeIcon icon={faCss3} />;
      break;
    case "faNode":
      res = <FontAwesomeIcon icon={faNode} />;
      break;
    case "faReact":
      res = <FontAwesomeIcon icon={faReact} />;
      break;
    case "faDatabase":
      res = <FontAwesomeIcon icon={faDatabase} />;
      break;

    default:
      break;
  }
  return res;
};
class Home extends React.Component {
  state = {
    blogs: [],
    blogsToShow: [],
  };
  static contextType = myContext;

  // componentWillMount = async () => {
  //   await this.fetchBlogs();
  // };

  // fetchBlogs = async () => {
  //   this.setState({ isLoading: true });
  //   const blogs = await fetch(`${config.API_ENDPOINT}/blogs`, {
  //     method: "Get",
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //     }),
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       this.context.blogs = res;
  //       return res;
  //     })
  //     .catch((err) => {
  //       this.setState({ isLoading: false });
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: "Something went wrong!",
  //         footer: `<p>${err}</p>`,
  //       });
  //     });

  //   const blogsToShow = (await blogs.length) >= 3 ? blogs.splice(0, 3) : blogs;
  //   this.setState({ blogs, blogsToShow });
  // };

  render() {
    const pageVariants = this.context.pageVariants;
    const pageTransition = this.context.pageTransition;
    const blogsToShow = this.state.blogsToShow.map((blog) => {
      const blogLink = `/blogs/${blog._id}`;
      return (
        <div className="project" key={blog._id}>
          <div className="container">
            <div className="box">
              <div className="imgBx">
                <img src={blog.blogimage} alt="blog" />
              </div>
              <div className="content">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <div className="jumboButtons">
                  <span className="spanButton">
                    <Link to={blogLink} key={blog._id}>
                      Go To Blog
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

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
                A Multi-faceted software engineer who is knowledgeable in{" "}
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "JavaScript",
                    1000,
                    "ReactJs",
                    1000,
                    "NodeJs",
                    1000,
                    "Python",
                    1000,
                    "MongoDB",
                    1000,
                    "Ruby",
                    1000,
                    "Rails",
                    1000,
                    "PHP",
                    1000,
                    "Laravel",
                    1000,
                    "RESTful APIs",
                    1000,
                    "GraphQL",
                    1000,
                    "AWS",
                    1000,
                    "SQL",
                    1000,
                    "CI/CD",
                    1000,
                    "HTML",
                    1000,
                    "CSS",
                    1000,
                  ]}
                />
              </p>
            </div>
            <div className="jumboButtons">
              <button className="spanButton">
                <Link to="/me">About Me</Link>{" "}
              </button>
              <button className="spanButton">
                <a href="my-resume.pdf" download="myResume">
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
              {data.skills.map((item, index) => (
                <li key={index}>
                  <span className="framework">{item.category}:</span>
                  <span className="framework-skills">
                    {item.items.join(", ")}
                  </span>
                </li>
              ))}
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
              {data.qualifications.map((item, index) => (
                <li key={index}>
                  <span className="framework">{item.name}</span>
                  {item.link ? (
                    <span className="framework-skills">
                      <a href={item.link}>Verify</a>
                    </span>
                  ) : (
                    <span className="framework-skills">{item.date}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="projectsDiv">
          <h4 className="home-section-header">A Few Projects</h4>
          <h6>
            <span className="PSA">Hover/Tap On A Project For More</span>
          </h6>
          <div className="projects">
            {data.projects.map((project) => (
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
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Project
                          </a>{" "}
                        </span>
                        <span className="spanButton">
                          <a
                            href={project.codeLink}
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
            ))}
            
            
          </div>
          <div className="jumboButtons">
            <button className="spanButton">
              <Link to="/projects">More Projects</Link>
            </button>
          </div>
        </div>
        <div className="blog__div">
          <h4 className="home-section-header">Blog</h4>
          <h6>
            <span className="PSA">Hover/Tap On A Blog For More</span>
          </h6>
          <div className="blog_list">{blogsToShow}</div>
          <div className="jumboButtons">
            <button className="spanButton">
              <Link to="/blogs">More Blogs</Link>
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
