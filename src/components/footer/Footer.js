import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


class Footer extends React.Component {
  render() {
    return (
      <footer>
        © Michael Anokye - Connect with me: {" "}
        <a
          href="https://www.linkedin.com/in/michael-anokye/"
        >
        <FontAwesomeIcon icon={faLinkedin} />
        </a>{"  "}

        {"  "}<a
          href="https://github.com/michaelanokyej"
        >
         <FontAwesomeIcon icon={faGithub} />
        </a>
        
      </footer>
    );
  }
}

export default Footer;
