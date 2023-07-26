import React from "react";
import styles from "./banner.module.scss";
import { Link } from "react-router-dom";
import { FaShippingFast } from "react-icons/fa";
import {FiPhoneCall} from 'react-icons/fi'
import {TfiReload} from 'react-icons/tfi'


function Banner(props) {
  const btnData = [
    {
      icon: (
        <FaShippingFast className=" mt-5 mr-10 border-1 border-dotted p-5 text-primary border-primary rounded-full text-3xl" />
      ),
      main: "Free Shipping",
      sub: "When order over $75",
    },
    {
      icon: (
        <FiPhoneCall className=" mt-5 mr-10 border-1 border-dotted p-5 text-primary border-primary rounded-full text-3xl" />
      ),
      main: "24/7 Support",
      sub: "Get support all day",
    },
    {
      icon: (
        <TfiReload className=" mt-5 mr-10 border-1 border-dotted p-5 text-primary border-primary rounded-full text-3xl" />
      ),
      main: "Refund",
      sub: "Get refund within 3 days!",
    },
  ];
  return (
    <div>
      <div className={styles.banner}>
        <div className=" sm:pt-20 md:pt-40 pt-40 text-center ">
          <p className="text-primary text-xl tracking-wider font-bold font-sans">
            FRESH & ORGANIC
          </p>
          <p className="text-white font-bold text-5xl">
            Delicious Seasonal Fruits
          </p>
          <Link
            to="#"
            className="rounded-full bg-primary text-white py-3
             px-7 no-underline border-primary border-solid border-1 
              hover:bg-black hover:text-primary mr-10 "
          >
            Fruit Collection
          </Link>
          <Link
            to="#"
            className="rounded-full bg-transparent text-white py-3 px-7 no-underline border-primary border-solid border-1 hover:bg-primary hover:text-white "
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="bg-lightWhite pt-14 p-10 
      grid gap-4 h-50 sm:grid-cols-1 md:grid-cols-2
       lg:grid-cols-3 ">
        {btnData.map((item,i)=>(

        <div className="flex">
          {" "}
         { item.icon}
          <div>
            <p className="text-deepBlack text-xl font-bold  ">{item.main}</p>
            <p className="text-lightColor font-xs font-normal text-1xl ">{item.sub}</p>
          </div>
        </div>
        ))}

      </div>
    </div>
  );
}

export default Banner;
