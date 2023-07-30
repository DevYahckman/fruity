import React, { useState, useEffect } from "react";
import Banner from "../../components/banner/banner";
import Loader from "../../components/loader/loader";
import { FaShippingFast } from "react-icons/fa";
import bg from "../../assets/feature-bg.jpg";
import JulySales from "../home/about/julySales";

function About(props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });

  const btmData = [
    {
      icon: (
        <FaShippingFast
          className=" mt-5 mr-4 border-1 border-dotted p-5
     text-primary border-primary
      rounded-full text-xl"
        />
      ),
      title: "Home Delivery",
      sub: ` sit voluptatem accusantium dolore mque laudantium, totam rem
    aperiam, eaque ipsa quae ab illo`,
    },
    {
      icon: (
        <FaShippingFast
          className=" mt-5 mr-4 border-1 border-dotted p-5
     text-primary border-primary
      rounded-full text-xl"
        />
      ),
      title: "Home Delivery",
      sub: ` sit voluptatem accusantium dolore mque laudantium, totam rem
    aperiam, eaque ipsa quae ab illo`,
    },
    {
      icon: (
        <FaShippingFast
          className=" mt-5 mr-4 border-1 border-dotted p-5
     text-primary border-primary
      rounded-full text-xl"
        />
      ),
      title: "Home Delivery",
      sub: ` sit voluptatem accusantium dolore mque laudantium, totam rem
    aperiam, eaque ipsa quae ab illo`,
    },
    {
      icon: (
        <FaShippingFast
          className=" mt-5 mr-4 border-1 border-dotted p-5
     text-primary border-primary
      rounded-full text-xl"
        />
      ),
      title: "Home Delivery",
      sub: ` sit voluptatem accusantium dolore mque laudantium, totam rem
    aperiam, eaque ipsa quae ab illo`,
    },
  ];

  return (
    <div>
      <div>
        {isLoading && <Loader />}
        <Banner title="WE SALE FRESH FRUITS" pageName="ABOUT US" />
      </div>

      <div className="lg:py-20 py-24 pl-5 lg:pl-20 grid lg:grid-cols-2">
        <div className="grid grid-cols-1 md:grid-cols-2 mr-6 lg:mr-1">
          {btmData.map((item, i) => (
            <div className="flex ">
              <div>{item.icon}</div>
              <div>
                <p className="text-deepBlack text-xl font-bold  ">
                  {item.title}
                </p>
                <p className="text-lightColor font-xs font-normal text-1xl ">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="hidden ml-6 lg:flex rounded shadow-2xl bg-center bg-cover"
        ></div>
      </div>

        <div>
          <JulySales />
        </div>
    </div>
  );
}

export default About;
