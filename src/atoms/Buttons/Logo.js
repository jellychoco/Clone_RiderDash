import React from "react";
import { Link } from "react-router-dom";

const LogoStyle = {
  "font-family": "proxima-nova",
  "font-weight": "600",
  "font-style": "normal",
  "font-size": "20px",
  "letter-spacing": "2px",
  "text-transform": "uppercase",
  //   color: "#fff",
  margin: "0",
  "padding-top": "0",
  "padding-bottom": "0",
  "line-height": "1em",
  "text-decoration": "none",
};

const Logo = ({ endpoint = "", text = "" }) => {
  return (
    <Link style={LogoStyle} to={endpoint}>
      {text}
    </Link>
  );
};

export default Logo;
