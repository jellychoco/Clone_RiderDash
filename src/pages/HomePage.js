import React, { Fragment } from "react";
import ImageWithText from "../organisms/HomeRelative/ImageWithText";
import Footer from "../template/Footer";
import HomeLongTextUnderHeader from "../organisms/HomeRelative/HomeLongTextUnderHeader";

import Header from "../template/Header";

const imageUrl1 =
  "https://images.squarespace-cdn.com/content/v1/5cd49b062a42420001fb81d3/1557965905034-XDOIVVYMFNKA33RAWP7O/ke17ZwdGBToddI8pDm48kGTwa0DaBZshQgkeEkeDMc97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mhydAgiKdIfeAoxVgE7c7r2BDGMUIEj2GKI6-SlxUKIB2BBwUwakurT28vNsLINpQ/image-asset.jpeg";

const imageUrl2 =
  "https://images.squarespace-cdn.com/content/v1/5cd49b062a42420001fb81d3/1557966224529-PESZ3C89AAWHLW3JK9W5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg";

const backgroundImage =
  "https://images.squarespace-cdn.com/content/v1/5cd49b062a42420001fb81d3/1557965615940-MJZU7E7VXBO3AXIV56NC/ke17ZwdGBToddI8pDm48kH-KLY52Ni-jmyubvb-RrKF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UezVMJDQpme8OW23G3zhzKlO9vSU3nRQlTm1zS_UzG0kO1ecLVCJQYy9cMPmyV9Sog/image-asset.jpeg";

const h1Text =
  "We are changing the automotive service industry to create a better user experience.";
const pText =
  "The automotive service industry has been broken for quite a while. Customers spend a lot of time trying to find a good service at a reasonable price. Shop owners are too busy to educate customers. Hence, customers think owners lack transparency so they end up spending more time searching for other mechanics.    ";

const mainText = "REIMAGINE AUTOMOTIVE SERVICE";

const buttonText = "LEARN MORE";

const HomePage = () => {
  return (
    <Fragment>
      <Header
        endpoint="/WHATWEDO"
        headerBackground_Image={backgroundImage}
        buttonText={buttonText}
        mainText={mainText}
        hasButton={true}
      />

      <main>
        <section>
          <HomeLongTextUnderHeader titleText={h1Text} normalText={pText} />
        </section>
        <section>
          <ImageWithText
            endpoint="/WHATWEDO"
            titleText="ABOUT"
            normalText="Find out about our team,
mission, and the status of our endeavor."
            ImageUrl={imageUrl1}
            buttonText="LEARN MORE"
          />
          <ImageWithText
            titleText="JOIN US"
            normalText="Ready to join our journey?
Find the open positions."
            ImageUrl={imageUrl2}
            reverse={true}
            buttonText="LEARN MORE"
          />
        </section>
      </main>
      <footer>
        <Footer text="RiderDash, Inc." />
      </footer>
    </Fragment>
  );
};

export default HomePage;
