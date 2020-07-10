import React from "react";
import { withRouter, Link } from "react-router-dom";
import styledComponentsCjs from "styled-components";

const StyleTabs = styledComponentsCjs.p`
display:inline-block;
padding-left: 25px;
font-size: 2em;
font-family: proxima-nova;
font-weight: 600;
font-style: normal;
letter-spacing: 2px;
text-transform: uppercase;
text-decoration: none;
color: white;
`;

const Tabs = ({ text = "", endpoint = "" }) => {
  return (
    <Link to={endpoint}>
      <StyleTabs>{text}</StyleTabs>
    </Link>
  );
};

export default withRouter(Tabs);
