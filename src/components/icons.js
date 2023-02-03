import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faEnvelope, faDatabase, faMapMarkerAlt, faMobileAlt, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3, faReact, faNode } from "@fortawesome/free-brands-svg-icons";

export const Icon = ({ icon }) => {
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
    case "faMapMarkerAlt":
      res = <FontAwesomeIcon icon={faMapMarkerAlt} />;
      break;
    case "faMobileAlt":
      res = <FontAwesomeIcon icon={faMobileAlt} />;
      break;
    case "faDownload":
      res = <FontAwesomeIcon icon={faDownload} />;
      break;
    case "faEnvelope":
      res = <FontAwesomeIcon icon={faEnvelope} />;
      break;
    case "faRoad":
      res = <FontAwesomeIcon icon={faRoad} />;
      break;

    default:
      break;
  }
  return res;
};
