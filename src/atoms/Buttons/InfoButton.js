import React from "react";
import { withRouter, Link } from "react-router-dom";

const ButtonStyle = {
  "font-family": "proxima-nova",
  "border-radius": "30em",
  "font-size": " 1.6em",
  "text-decoration": " none",
  padding: " 1em 1.75em",
  "background-color": " #36b3a8",
  display: " inline-block",
  margin: " 10px 0",
  color: " #fff",
  border: " none",
};

const InfoButton = ({ text = "", endpoint = "" }) => {
  return (
    <Link style={ButtonStyle} to={endpoint}>
      {text}
    </Link>
  );
};

export default withRouter(InfoButton);
