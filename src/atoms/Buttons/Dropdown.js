import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import styledComponentsCjs from "styled-components";

const WrapperMenu = styledComponentsCjs.p`
  margin-top: 1em;
`;
const WrapperAbout = styledComponentsCjs.p`
color: white;
font-family: proxima-nova;
font-weight: 600;
font-style: normal;
`;

const Dropdown = ({ getMenuWithEndpoint = [], mainMenuText = "" }) => {
  const dropdownMenuCreater = (array) => {
    return array.map((item, i) => {
      return (
        <Link key={i} className="dropdown_removeDecoration" to={item.endpoint}>
          <WrapperMenu>{item.menuText}</WrapperMenu>
        </Link>
      );
    });
  };

  return (
    <ul className="atoms_dropdown">
      <Link
        className="dropdown_removeDecoration"
        to={getMenuWithEndpoint[0].endpoint}
      >
        <WrapperAbout>{mainMenuText}</WrapperAbout>
      </Link>
      <li className="atoms_dropdown_content">
        {dropdownMenuCreater(getMenuWithEndpoint)}
      </li>
    </ul>
  );
};

export default Dropdown;
