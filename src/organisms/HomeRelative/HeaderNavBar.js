import React from "react";
import styled from "styled-components";
import Logo from "../../atoms/Buttons/Logo";
import Tabs from "../../atoms/Buttons/Tabs";
import Dropdown from "../../atoms/Buttons/Dropdown";

const Header = styled.div`
  height: 15vh;
  display: flex;
  padding: 20px;
`;
const ToLeft = styled.div`
  flex-grow: 4;
`;

const ToRight = styled.div`
  position: relative;
  display: inline-block;
  flex-grow: 0.1;
`;

const HeaderNavBar = ({ MenuWithEndpoint }) => {
  return (
    <Header>
      <ToLeft>
        <Logo endpoint="/" text="riderdash" />
      </ToLeft>
      <ToRight>
        <Dropdown getMenuWithEndpoint={MenuWithEndpoint} mainMenuText="ABOUT" />
        <Tabs endpoint="/WE-HIRING" text="we're hiring" />
      </ToRight>
    </Header>
  );
};

export default HeaderNavBar;
