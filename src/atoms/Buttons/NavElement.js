import React from "react";
import { NavLink } from "react-router-dom";

const beforeClick = {
  "text-decoration-line": "none",
  "font-size": "2em",
  color: "darkgrey",
};

const afterClick = {
  "text-decoration-line": "none",
  "font-size": "2em",
  color: "black",
};

const NavElement = ({ text, endpoint }) => {
  return (
    <NavLink style={beforeClick} activeStyle={afterClick} to={endpoint}>
      {text}
    </NavLink>
  );
};

export default NavElement;
