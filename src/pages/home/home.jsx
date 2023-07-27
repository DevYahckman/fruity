import React from "react";
import Banner from "./baner/banner";
import Produc from "./products/produc";
import AboutLand from "./about/aboutLand";
import NewsLand from "./news/newsLand";

function Home(props) {
  return (
    <div>
      <Banner />
      <Produc />
      <AboutLand />
      <NewsLand />
    </div>
  );
}

export default Home;
