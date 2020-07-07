import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Dropdown = ({ getMenuWithEndpoint = [], mainMenuText = "" }) => {
  let dropdownMenuCreater = (array) => {
    return getMenuWithEndpoint.map((a) => {
      return (
        <li>
          <Link to={a.endpoint}>{a.menuText}</Link>
        </li>
      );
    });
  };

  return (
    <ul id="atoms_dropdown_ul">
      <Link to={getMenuWithEndpoint[0].endpoint}>{mainMenuText}</Link>
      {dropdownMenuCreater(getMenuWithEndpoint)}
    </ul>
  );
};

export default Dropdown;
