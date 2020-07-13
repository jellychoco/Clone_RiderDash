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
text-align : center;
flex-grow: 2
`;

const TextWrapper = styledComponentsCjs.section`

margin:0;
padding-top : 2em;
font-size : 2.5em;
width:701px;
`;

const PragraphWrapper = styledComponentsCjs.section`
   padding-top : 3em;
   padding-bottom : 3em;
   border-bottom : solid 1px grey;
`;

const UlWrapper = styledComponentsCjs.div`
text-align : left;
 display : flex

`;
const InnerUlWrapper = styledComponentsCjs.ul`
margin : 1em;
padding: 1em;
 flex-grow : 1;
 
`;

const WhatWeDo = () => {
  return (
    <Fragment>
      <Header
        headerBackground_Image={backgroundImage}
        mainText="WHAT WE DO"
        hasButton={false}
      />
      <FlexWrapper>
        <LeftWrapper>
          <SideBar />
        </LeftWrapper>
        <RightWrapper>
          <TextWrapper>
            <h1>
              Why is it still so painful to find a good mechanic? Why do we
              waste our time for making calls? Why isn’t there an easier way for
              customers to find the automotive service they are looking for?
              These questions were the beginning of our journey.
            </h1>
            <h2>OUR VISION AND MISSION</h2>
            <PragraphWrapper>
              We deliver the ultimate automotive service experience to everyone.
              Combining our in-depth understanding of the industry with the
              right technology, we connect customers with automotive service
              providers. Using RiderDash, customers will get a wealth of
              information at their fingertips to help them make informed
              decisions quickly and easily. At the same time, mechanics can
              spend less time on marketing and more time on their work.
            </PragraphWrapper>
            <PragraphWrapper>
              “ RiderDash has helped my company gain a 20% of sales increase. It
              is eye-opening progress that I didn’t expect. — Sun Yeom, LLumar
              Authorized Dealer
            </PragraphWrapper>
            <PragraphWrapper>
              <h2>WHAT WE BELIEVE</h2>
              <UlWrapper>
                <InnerUlWrapper>
                  <li>
                    With more information, options, and transparency, customers
                    succeed more.
                  </li>
                  <li>
                    Using the right technology can help the brick-and-mortar
                    businesses.
                  </li>
                  <li>
                    The RiderDash marketplace is not a mere intermediary, but
                    rather, a value-adding service provider itself.
                  </li>
                  <li>
                    A healthy marketplace will eventually help weed out
                    unscrupulous actors.
                  </li>
                </InnerUlWrapper>
                <InnerUlWrapper>
                  <li>
                    Sustainability is the key to make both customers and
                    providers happy.
                  </li>
                  <li>Quality of service matters just as much as price. </li>
                  <li>
                    A vehicle is not only a means of mobility but, but also a
                    private space that reflects one’s lifestyle.
                  </li>
                  <li>
                    Legal car modification is a unique opportunity to show your
                    creativity.
                  </li>
                </InnerUlWrapper>
              </UlWrapper>
            </PragraphWrapper>
          </TextWrapper>
        </RightWrapper>
      </FlexWrapper>
      <Footer text="RiderDash, Inc." />
    </Fragment>
  );
};

export default WhatWeDo;
