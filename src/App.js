import React from "react";
import Logo from "./atoms/Buttons/Logo";
import Tabs from "./atoms/Buttons/Tabs";
import Dropdown from "./atoms/Buttons/Dropdown";
import InfoButton from "./atoms/Buttons/InfoButton";
import MainBigText from "./atoms/Text/MainBigText";
import PTagForText from "./atoms/Text/PTagForText";

function App() {
  const TEST_getMenuWithEndpoint = [
    { menuText: "WHAT WE DO", endpoint: "/WHATWEDO" },
    { menuText: "PROJECTS", endpoint: "/PROJECTS" },
    { menuText: "PARTNERS", endpoint: "/PARTNERS" },
    { menuText: "CONTACT", endpoint: "/CONTACT" },
  ];

  const imageUrl1 =
    "https://images.squarespace-cdn.com/content/v1/5cd49b062a42420001fb81d3/1557965905034-XDOIVVYMFNKA33RAWP7O/ke17ZwdGBToddI8pDm48kGTwa0DaBZshQgkeEkeDMc97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mhydAgiKdIfeAoxVgE7c7r2BDGMUIEj2GKI6-SlxUKIB2BBwUwakurT28vNsLINpQ/image-asset.jpeg";
  const imageUrl2 =
    "https://images.squarespace-cdn.com/content/v1/5cd49b062a42420001fb81d3/1557966224529-PESZ3C89AAWHLW3JK9W5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg";

  const mainImage =
    "https://images.squarespace-cdn.com/content/v1/5cd49b062a42420001fb81d3/1557965615940-MJZU7E7VXBO3AXIV56NC/ke17ZwdGBToddI8pDm48kH-KLY52Ni-jmyubvb-RrKF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UezVMJDQpme8OW23G3zhzKlO9vSU3nRQlTm1zS_UzG0kO1ecLVCJQYy9cMPmyV9Sog/image-asset.jpeg";
  return (
    <div>
      <Logo endpoint="/" text="RiderDash" />
      <Tabs endpoint="/" text="we're hiring" />
      <Dropdown
        getMenuWithEndpoint={TEST_getMenuWithEndpoint}
        mainMenuText="ABOUT"
      />
      <InfoButton endpoint="/" text="LEARN MORE" />
      <MainBigText text="REIMAGINE AUTOMOTIVE SERVICE" />
      <PTagForText text="Find Out about our teams" fontSize="3.2em" />
      <PTagForText text="Find Out about our teams" fontSize="2.256vw" />
      <PTagForText text="Find Out about our teams" fontSize="1.8em" />
      <img src={imageUrl1} alt="" />
      <img src={imageUrl2} alt="" />

      <img src={mainImage} alt="" />
    </div>
  );
}

export default App;
