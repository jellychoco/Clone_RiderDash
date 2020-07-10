import React from "react";
import { Link } from "react-router-dom";
import styledComponentsCjs from "styled-components";

const StyledInfoButton = styledComponentsCjs.p`
  display:inline-block;
  font-family: proxima-nova;
  border-radius: 30em;
  font-size:  1.6em;
  text-decoration:  none;
  padding:  1em 1.75em;
  background-color:  #36b3a8;
  display:  inline-block;
  margin:  10px 0;
  color:  #fff;
  border:  none;
`;

const InfoButton = ({ buttonText = "", endpoint = "" }) => {
  return (
    <Link to={endpoint}>
      <StyledInfoButton>{buttonText}</StyledInfoButton>
    </Link>
  );
};

export default InfoButton;
