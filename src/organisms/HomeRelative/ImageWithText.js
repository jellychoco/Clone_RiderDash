import React from "react";
import styledComponentsCjs from "styled-components";
import InfoButton from "../../atoms/Buttons/InfoButton";

const WrapperForDisplay = styledComponentsCjs.div`
padding-bottom:10em;
display:flex;
flex-direction : row;
${(props) =>
  props.reverse &&
  `
flex-direction : row-reverse;
  `};
justify-content:center;
align-items:center;
`;

// const ContentWrapper = styledComponentsCjs.div`
// `;

const Image = styledComponentsCjs.img`
max-width:468.438px;
max-height:346.172px;
`;

const TextBox = styledComponentsCjs.div`
text-align:center;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
width:468.438px;
height:346.172px;
`;

const TitleText = styledComponentsCjs.div`
text-align:center;
font-size : 1.4em;
@media (max-width: 980px) {
    font-size: 13px;
  };
align-items: center;
display:flex;
flex-grow:1;   
font-family: proxima-nova;
font-weight: 600;
font-style: normal;
letter-spacing: .3em;
text-transform: uppercase;
line-height: 1.1em;`;

const NormalText = styledComponentsCjs.div`
font-size : 2.5em;
@media (max-width: 621px) {
    font-size: 13px;
  };

align-items: center;
display:flex;
flex-grow:1;
`;

const ImageWithText = ({
  titleText = "",
  normalText = "",
  ImageUrl = "",
  reverse,
}) => {
  return (
    <WrapperForDisplay reverse={reverse}>
      {/* <ContentWrapper> */}
      <Image src={ImageUrl} alt="" />
      {/* </ContentWrapper> */}
      {/* <ContentWrapper> */}
      <TextBox>
        <TitleText>{titleText}</TitleText>
        <NormalText>{normalText}</NormalText>
        <InfoButton text="LEARN MORE" />
      </TextBox>
      {/* </ContentWrapper> */}
    </WrapperForDisplay>
  );
};

export default ImageWithText;
