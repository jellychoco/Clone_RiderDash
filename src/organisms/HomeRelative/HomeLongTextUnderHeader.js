import React, { Fragment } from "react";
import styledComponentsCjs from "styled-components";
const Wrapper = styledComponentsCjs.div`
padding-bottom:10em;
text-align: -webkit-center;
`;

const TitleText = styledComponentsCjs.h1`
width:706px;
font-size:3.2em

`;

const NormalText = styledComponentsCjs.p`
width:650px;
font-size : 1.8em
`;

const HomeLongText = ({ titleText, normalText }) => {
  return (
    <Fragment>
      <Wrapper>
        <TitleText>{titleText}</TitleText>
        <NormalText>{normalText}</NormalText>
      </Wrapper>
    </Fragment>
  );
};

export default HomeLongText;
