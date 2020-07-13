import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const GoogleMap = ({ google }) => {
  let myLocation = { lat: 37.5609986, lng: 126.9927573 };

  return (
    <div>
      <Map
        style={{
          width: "500px",
          height: "500px",
          left: "100px",
        }}
        google={google}
        zoom={16}
        initialCenter={myLocation}
      >
        <Marker title={"충무로역"} name={"충무로역"} position={myLocation} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.google_key,
})(GoogleMap);
