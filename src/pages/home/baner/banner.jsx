import React from "react";
import styles from "./banner.module.scss";
import { Link } from "react-router-dom";

function Banner(props) {
  return (
    <div className={styles.banner}>
      <div className=" sm:pt-100 pt-40 text-center ">
        <p className="text-primary text-xl tracking-wider font-bold font-sans">
          FRESH & ORGANIC
        </p>
        <p className="text-white font-bold text-5xl">
          Delicious Seasonal Fruits
        </p>
        <Link
          to="#"
          className="rounded-full bg-primary text-white py-3 px-7 no-underline border-primary border-solid border-1  hover:bg-black hover:text-primary mr-10 "
        >
          Fruit Collection
        </Link>
        <Link
          to="#"
          className="rounded-full bg-transparent text-white py-3 px-7 no-underline border-primary border-solid border-1 hover:bg-primary hover:text-white "
        >
          Fruit Collection
        </Link>
      </div>
    </div>
  );
}

export default Banner;
