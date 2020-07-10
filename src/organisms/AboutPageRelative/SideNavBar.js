import React from "react";
import NavElement from "../../atoms/Buttons/NavElement";
import styledComponentsCjs from "styled-components";

const Wrapper = styledComponentsCjs.div`
font-size : 1.5em;
display:inline-flex;
flex-direction: column;
text-align:center;
`;

const SideBarTitle = styledComponentsCjs.p`
  font-size :2em;
  color:green;
`;

const SideNavBar = ({ MenuWithEndpoint = [] }) => {
  const sideNavBarMenuCreater = (array) => {
    return array.map((item, i) => {
      return (
        <NavElement key={i} endpoint={item.endpoint} text={item.menuText} />
      );
    });
  };

  return (
    <Wrapper>
      <SideBarTitle>About</SideBarTitle>
      {sideNavBarMenuCreater(MenuWithEndpoint)}
    </Wrapper>
  );
};

export default SideNavBar;
