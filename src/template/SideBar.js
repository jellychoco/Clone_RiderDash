import React from "react";
import styledComponentsCjs from "styled-components";
import SideNavBar from "../organisms/AboutPageRelative/SideNavBar";

const Wrapper = styledComponentsCjs.div`
position: -webkit-sticky;
position: sticky;
top: 20px;
`;

const MenuWithEndpoint = [
  { menuText: "WHAT WE DO", endpoint: "/WHATWEDO" },
  { menuText: "PROJECTS", endpoint: "/PROJECTS" },
  { menuText: "PARTNERS", endpoint: "/PARTNERS" },
  { menuText: "CONTACT", endpoint: "/CONTACT" },
];

const SideBar = () => {
  return (
    <Wrapper>
      <SideNavBar MenuWithEndpoint={MenuWithEndpoint} />
    </Wrapper>
  );
};

export default SideBar;
