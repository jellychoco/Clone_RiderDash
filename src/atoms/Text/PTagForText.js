import React from "react";

const PTagForText = ({ text = "", fontSize = "" }) => {
  const textStyle = {
    "font-size": fontSize,
    "font-family": "adobe-garamond-pro",
  };

  return <p style={textStyle}>{text}</p>;
};

export default PTagForText;
