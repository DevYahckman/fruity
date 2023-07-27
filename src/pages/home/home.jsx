import React from "react";
import Banner from "./baner/banner";
import Produc from "./products/produc";
import AboutLand from "./about/aboutLand";

function Home(props) {
  return (
    <div>
      <Banner />
      <Produc />
      <AboutLand />
    </div>
  );
}

export default Home;
