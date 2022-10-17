import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Services.scss";

const BoxServices = (props) => {
  return (
    <div className="boxServices">
      <FontAwesomeIcon icon={props.icon} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};
  
export default BoxServices;
