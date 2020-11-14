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
import dashBoard from './oper-dashboard.png'
import Swal from "sweetalert2";
import Typical from "react-typical";

class Home extends React.Component {
  state = {
    blogs: [],
    blogsToShow: [],
  };
  static contextType = myContext;

  componentWillMount = async () => {
    await this.fetchBlogs();
  };

  fetchBlogs = async () => {
    this.setState({ isLoading: true });
    const blogs = await fetch(`${config.API_ENDPOINT}/blogs`, {
      method: "Get",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.context.blogs = res;
        return res;
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: `<p>${err}</p>`,
        });
      });

    const blogsToShow = (await blogs.length) >= 3 ? blogs.splice(0, 3) : blogs;
    this.setState({ blogs, blogsToShow });
  };

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
                    "Python",
                    1000,
                    "MongoDB",
                    1000,
                    "RESTful APIs",
                    1000,
                    "GraphQL",
                    1000,
                    "AWS",
                    1000,
                    "React",
                    1000,
                    "Node",
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
                    <img src="evently.png" alt="evently" />
                  </div>
                  <div className="content">
                    <h3>Evently WebApp</h3>
                    <p>A webapp for users to book and manage events</p>
                    <div className="app-features">
                      <h6>FEATURES</h6>
                      <ul className="app-features-list">
                        <li>Users can sign up/in</li>
                        <li>Users can book events.</li>
                        <li>Users can create events.</li>
                        <li>Users can cancel events.</li>
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
                          href="https://evently-michael-anokye.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>{" "}
                      </span>
                      <span className="spanButton">
                        <a
                          href="https://github.com/michaelanokyej/event-booking-client"
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
                    <img src={dashBoard} alt="error logger" />
                  </div>
                  <div className="content">
                    <h3>Oper Dashboard</h3>
                    <p>A dashboard to log and generate error reports.</p>
                    <div className="app-features">
                      <h6>FEATURES</h6>
                      <ul className="app-features-list">
                        <li>Users can log an error.</li>
                        <li>Users can view all operations.</li>
                        <li>Users are presented with 2 charts.</li>
                        <li>Users can add a user and an operation.</li>
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
                          href="https://oper-dashboard-michael-anokye.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>{" "}
                      </span>
                      <span className="spanButton">
                        <a
                          href="https://github.com/michaelanokyej/oper-dashboard"
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
