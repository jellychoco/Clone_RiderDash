import React, { Fragment } from "react";
import HeaderNavBar from "../organisms/HomeRelative/HeaderNavBar";
import BigTextWithInfoButton from "../organisms/HomeRelative/BigTextWithInfoButton";
const MenuWithEndpoint = [
  { menuText: "WHAT WE DO", endpoint: "/WHATWEDO" },
  { menuText: "PROJECTS", endpoint: "/PROJECTS" },
  { menuText: "PARTNERS", endpoint: "/PARTNERS" },
  { menuText: "CONTACT", endpoint: "/CONTACT" },
];

const Header = ({
  headerBackground_Image,
  endpoint,
  mainText,
  hasButton,
  buttonText,
}) => {
  const backgroundImage = {
    "background-image": `url(${headerBackground_Image})`,
  };
  return (
    <Fragment>
      <header style={backgroundImage}>
        <HeaderNavBar MenuWithEndpoint={MenuWithEndpoint} />
        <BigTextWithInfoButton
          endpoint={endpoint}
          mainText={mainText}
          buttonText={buttonText}
          hasButton={hasButton}
        />
      </header>
    </Fragment>
  );
};

export default Header;
