import React from "react";
import { withRouter, Link } from "react-router-dom";

const TabsStyle = {
  "font-weight": "700",
  "letter-spacing": "1px",
  "font-family": "proxima-nova",
  "font-weight": "600",
  "font-style": "normal",
  "letter-spacing": "2px",
  "text-transform": "uppercase",
  "text-decoration": "none",
  "margin-left": "1em",
  padding: "1em 1.5em !important",
  //   display: "block",
  "background-color": "#fff",
  "-moz-osx-font-smoothing": "auto",
  "-webkit-font-smoothing": "subpixel-antialiased",
  //   color: "#fff",
  "-webkit-transition":
    "background-color .1s 0s ease-in-out,color .1s 0s ease-in-out",
  "-moz-transition":
    "background-color .1s 0s ease-in-out,color .1s 0s ease-in-out",
  "-ms-transition":
    "background-color .1s 0s ease-in-out,color .1s 0s ease-in-out",
  "-o-transition":
    "background-color .1s 0s ease-in-out,color .1s 0s ease-in-out",
  transition: "background-color .1s 0s ease-in-out,color .1s 0s ease-in-out",
};

const Tabs = ({ text = "", endpoint = "" }) => {
  return (
    <Link style={TabsStyle} to={endpoint}>
      {text}
    </Link>
  );
};

export default withRouter(Tabs);
