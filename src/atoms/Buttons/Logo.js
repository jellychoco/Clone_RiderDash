import React from "react";
import { Link } from "react-router-dom";
import styledComponentsCjs from "styled-components";

const StyleLogo = styledComponentsCjs.p`
   display: inline-block;
  font-family: proxima-nova;
  font-weight: 600;
  font-style: normal;
  font-size: 2em;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  line-height: 1em;
  text-decoration: none;
`;

const Logo = ({ endpoint = "", text = "" }) => {
  return (
    <Link to={endpoint}>
      <StyleLogo>{text}</StyleLogo>
    </Link>
  );
};

export default Logo;
