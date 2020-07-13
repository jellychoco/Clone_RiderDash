import React, { Fragment } from "react";
import Header from "../template/Header";
import Footer from "../template/Footer";
import InfoButton from "../atoms/Buttons/InfoButton";
import styledComponentsCjs from "styled-components";
const backgroundImage =
  "https://images.squarespace-cdn.com/content/v1/5cd49b062a42420001fb81d3/1557965615940-MJZU7E7VXBO3AXIV56NC/ke17ZwdGBToddI8pDm48kH-KLY52Ni-jmyubvb-RrKF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UezVMJDQpme8OW23G3zhzKlO9vSU3nRQlTm1zS_UzG0kO1ecLVCJQYy9cMPmyV9Sog/image-asset.jpeg";

const mainText =
  "At RiderDash, we are reimagining the automotive service industry and challenging the status quo. By looking at an outdated industry with a fresh set of eyes, we are breaking barriers and exploring uncharted territory. We build together and grow together.";
const MainWrapper = styledComponentsCjs.main`
display:flx;
align-items:center;
   text-align:center;
   height:55vh;
`;

const PtagWrapper = styledComponentsCjs.p`

font-size:1.5em;
width:40%;
display:inline-block`;

const WeHiring = () => {
  return (
    <Fragment>
      <Header headerBackground_Image={backgroundImage} hasButton={false} />
      <MainWrapper>
        <PtagWrapper>
          <h1 style={{ "margin-bottom": "100px" }}>{mainText}</h1>
          <InfoButton buttonText="VIEW OPEN POSITIONS " />
        </PtagWrapper>
      </MainWrapper>
      <Footer text="RiderDash, Inc." />
    </Fragment>
  );
};

export default WeHiring;
