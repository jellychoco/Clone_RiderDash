import React from "react";
import "./MainBigText.css";

const MainBigText = ({ text = "" }) => {
  return (
    <p id="MainText">
      <strong>{text}</strong>
    </p>
  );
};

export default MainBigText;
