import React from "react";
import "./ContactForm.css";
import {
  faRoad,
  faEnvelope,
  faDatabase
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class ContactForm extends React.Component {
  render() {
    return (
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
                  <FontAwesomeIcon icon={faEnvelope} /> michaelanokyej@yahoo.com
                </li>
              </ul>
            </div>
            <div class="contactForm">
              <form name="contact" netlify netlify-honeypot="bot-field" hidden>
                <p>
                  <label>Name</label>
                  <input type="text" name="name" />
                </p>
                <p>
                  <label>Company</label>
                  <input type="text" name="company" />
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
                <p>
                  <input
                    type="file"
                    name="myfile"
                    id="myfile"
                    placeholder="Upload File"
                    rows="7"
                  />
                </p>
                <p>
                  <div data-netlify-recaptcha="true"></div>
                </p>
                <p class="full">
                  <button type="submit">Submit</button>
                </p>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default ContactForm;