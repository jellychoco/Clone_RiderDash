import React from "react";
import styledComponentsCjs from "styled-components";

const FooterWrapperStyle = styledComponentsCjs.div`
display:flex;
height:100px;
background-color : black;
 color:white;
 justify-content:center;
align-items:center;
`;

const FooterText = styledComponentsCjs.p`

font-family: "proxima-nova","Helvetica Neue",Helvetica,Arial,sans-serif;
font-size: 1.6em;
font-family: adobe-garamond-pro;
font-weight: 400;
font-style: normal;
font-size: 18px;
letter-spacing: 0px;
line-height: 1.6em;
`;

const Footer = ({ text = "" }) => {
  return (
    <FooterWrapperStyle>
      <FooterText>{text}</FooterText>
    </FooterWrapperStyle>
  );
};

export default Footer;
