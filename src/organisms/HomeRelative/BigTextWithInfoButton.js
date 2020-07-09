import React, { Fragment } from "react";
import MainBigText from "../../atoms/Text/MainBigText";

import styled, { css } from "styled-components";
import InfoButton from "../../atoms/Buttons/InfoButton";

const MainWrapper = styled.div`
  z-index: 1;
  width: 100vw;
  height: 50vh;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  align-self: center;
  width: 60%;
  height: 90%;
`;

const text = "REIMAGINE \nAUTOMOTIVE SERVICE ";

const BigTextWithInfoButton = () => {
  return (
    <MainWrapper>
      <InnerWrapper>
        <MainBigText text={text} />
        <p>
          <InfoButton text="LEARN MORE" endpoint="" />
        </p>
      </InnerWrapper>
    </MainWrapper>
  );
};

export default BigTextWithInfoButton;
