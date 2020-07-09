import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const displayBlock = {
  "text-decoration": "none",
  display: "block",
  "margin-top": "1em",
};

const Dropdown = ({ getMenuWithEndpoint = [], mainMenuText = "" }) => {
  let dropdownMenuCreater = (array) => {
    return getMenuWithEndpoint.map((a) => {
      return (
        <Link style={displayBlock} to={a.endpoint}>
          {a.menuText}
        </Link>
      );
    });
  };

  const textColor = {
    color: "white",
    "text-decoration": "none",
    "font-family": "proxima-nova",
    "font-weight": "600",
    "font-style": "normal",
  };

  return (
    <ul className="atoms_dropdown">
      <Link style={textColor} to={getMenuWithEndpoint[0].endpoint}>
        {mainMenuText}
      </Link>
      <li className="atoms_dropdown_content">
        {dropdownMenuCreater(getMenuWithEndpoint)}
      </li>
    </ul>
  );
};

export default Dropdown;
