import React from "react";

import styled from "styled-components";

const P = styled.p`
  font-size: 3rem;
  color: white;

  @media (min-width: 640px) {
    font-size: 6.8rem;
  }
`;

const MainBigText = ({ mainText = "" }) => {
  return (
    <P>
      <strong>{mainText}</strong>
    </P>
  );
};

export default MainBigText;
