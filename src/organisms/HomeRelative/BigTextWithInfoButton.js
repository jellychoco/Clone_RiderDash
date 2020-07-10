import React from "react";
import MainBigText from "../../atoms/Text/MainBigText";

import styled from "styled-components";
import InfoButton from "../../atoms/Buttons/InfoButton";

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  align-self: center;
  width: 60%;
  height: 90%;
`;

const BigTextWithInfoButton = ({
  mainText,
  buttonText,
  endpoint,
  hasButton = true,
}) => {
  if (hasButton) {
    return (
      <MainWrapper>
        <InnerWrapper>
          <MainBigText mainText={mainText} />
          <p>
            <InfoButton buttonText={buttonText} endpoint={endpoint} />
          </p>
        </InnerWrapper>
      </MainWrapper>
    );
  }

  if (!hasButton) {
    return (
      <MainWrapper>
        <InnerWrapper>
          <MainBigText mainText={mainText} />
        </InnerWrapper>
      </MainWrapper>
    );
  }
};

export default BigTextWithInfoButton;
