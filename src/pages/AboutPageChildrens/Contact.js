import React, { Fragment } from "react";
import Header from "../../template/Header";
import SideBar from "../../template/SideBar";
import Footer from "../../template/Footer";
import styledComponentsCjs from "styled-components";
import GoogleMap from "../../template/GoogleMap";

const backgroundImage =
  "https://images.squarespace-cdn.com/content/v1/5cd49b062a42420001fb81d3/1557965615940-MJZU7E7VXBO3AXIV56NC/ke17ZwdGBToddI8pDm48kH-KLY52Ni-jmyubvb-RrKF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UezVMJDQpme8OW23G3zhzKlO9vSU3nRQlTm1zS_UzG0kO1ecLVCJQYy9cMPmyV9Sog/image-asset.jpeg";

const FlexWrapper = styledComponentsCjs.main`
display:flex;
flex-direction: row;
`;

const LeftWrapper = styledComponentsCjs.nav`
 flex-grow: 1;
 text-align: center;

 `;

const RightWrapper = styledComponentsCjs.article`
position:relative;

padding-left:100px;
text-align : center;
 flex-grow: 2
`;
const TextWrapper = styledComponentsCjs.section`

margin:0;
padding-top : 2em;
font-size : 2.5em;
width:701px;
`;

const MapWrapper = styledComponentsCjs.div`
position:relative;
text-align:center;
height:500px;

`;

const Contact = () => {
  return (
    <Fragment>
      <Header
        headerBackground_Image={backgroundImage}
        mainText="PROJECTS"
        hasButton={false}
      />
      <FlexWrapper>
        <LeftWrapper>
          <SideBar />
        </LeftWrapper>
        <RightWrapper>
          <TextWrapper>
            <h1>I AM HERE</h1>
            <MapWrapper>
              <GoogleMap />
            </MapWrapper>
          </TextWrapper>
          <TextWrapper>
            <h2>EMAIL</h2>
            <p>ma88082@gmail.com</p>
          </TextWrapper>
        </RightWrapper>
      </FlexWrapper>

      <Footer text="RiderDash, Inc." />
    </Fragment>
  );
};

export default Contact;
