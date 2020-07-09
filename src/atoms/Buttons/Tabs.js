import React from "react";
import { withRouter, Link } from "react-router-dom";

const TabsStyle = {
  "padding-left": "25px",
  "font-size": "2em",
  "font-family": "proxima-nova",
  "font-weight": "600",
  "font-style": "normal",
  "letter-spacing": "2px",
  "text-transform": "uppercase",
  "text-decoration": "none",
  color: "white",
  //   padding: "1em 1.5em !important",
};

const Tabs = ({ text = "", endpoint = "" }) => {
  return (
    <Link style={TabsStyle} to={endpoint}>
      {text}
    </Link>
  );
};

export default withRouter(Tabs);
