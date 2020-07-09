import React from "react";

import styled, { css } from "styled-components";

const P = styled.p`
  font-size: 3rem;
  color: white;

  @media (min-width: 640px) {
    font-size: 6.8rem;
  }
`;

const MainBigText = ({ text = "" }) => {
  return (
    <P>
      <strong>{text}</strong>
    </P>
  );
};

export default MainBigText;
