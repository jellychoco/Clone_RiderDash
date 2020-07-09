import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import Logo from "../../atoms/Buttons/Logo";
import Tabs from "../../atoms/Buttons/Tabs";
import Dropdown from "../../atoms/Buttons/Dropdown";

const Header = styled.div`
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

// const MenuWithEndpoint = [
//   { menuText: "WHAT WE DO", endpoint: "/WHATWEDO" },
//   { menuText: "PROJECTS", endpoint: "/PROJECTS" },
//   { menuText: "PARTNERS", endpoint: "/PARTNERS" },
//   { menuText: "CONTACT", endpoint: "/CONTACT" },
// ];

const HeaderNavBar = ({ MenuWithEndpoint }) => {
  return (
    <Header>
      <ToLeft>
        <Logo endpoint="/" text="riderdash" />
      </ToLeft>
      <ToRight>
        <Dropdown getMenuWithEndpoint={MenuWithEndpoint} mainMenuText="ABOUT" />
        <Tabs endpoint="/" text="we're hiring" />
      </ToRight>
    </Header>
  );
};

export default HeaderNavBar;