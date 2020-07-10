import React, { Fragment } from "react";
import Header from "../../template/Header";
import SideBar from "../../template/SideBar";
import Footer from "../../template/Footer";
import styledComponentsCjs from "styled-components";

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
text-align : left;
 flex-grow: 2
`;
const TextWrapper = styledComponentsCjs.section`

margin:0;
padding-top : 2em;
font-size : 2.5em;
width:701px;
`;

const Section = styledComponentsCjs.section`

  margin : 2em;

`;

const ImageTag = styledComponentsCjs.img`

 width:100%;
 height:100%;
`;

const Projects = () => {
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
            <Section>
              <h1>
                We are relentlessly testing new approaches that we have
                carefully chosen after listening to customers. Our projects
                offer unique solutions that are tailored to customer and dealer
                concerns.
              </h1>
            </Section>
            <Section>
              <ImageTag src={backgroundImage} />
              <h2>ONLINE MARKETPLACE</h2>
              <p>
                Our flagship project has been overhauling the user experience to
                ensure that it is easy and pleasant as possible. More exciting
                news are to come.{" "}
              </p>
            </Section>
            <Section>
              <ImageTag src={backgroundImage} />
              <h2>DEALER PROGRAM</h2>
              <p>
                A dealer is the starting point of the vehicle lifecycle, and
                customers will often look for many upgrade services following
                their purchase. We created an online interface to connect
                dealers and shops.{" "}
              </p>
            </Section>
            <Section>
              <ImageTag src={backgroundImage} />
              <h2>SHOP MANAGEMENT SYSTEM </h2>
              <p>
                We developed an easy-to-use shop management system on the cloud
                that helps service shops’ productivity and efficiency. by
                streamlining the process of creating quotes and communicating
                with customers.{" "}
              </p>
            </Section>
          </TextWrapper>
        </RightWrapper>
      </FlexWrapper>
      <Footer text="RiderDash, Inc." />
    </Fragment>
  );
};

export default Projects;
