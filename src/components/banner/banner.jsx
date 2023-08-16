import React, { useEffect, useState } from "react";
import bg from "../../assets/breadcrumb-bg.jpg";
import styles from "./banner.module.scss";


function Banner({ title, pageName }) {


  return (
    <div
      className={`${styles.header} w-full bg-red-600 from-slate-50`}
    >
      <div className="p-5 pt-36 text-center">
        <p
          style={{ letterSpacing: ".5rem" }}
          className="font-bold text-sm text-primary tracking-widest"
        >
          {title}
        </p>
        <p className="text-white text-5xl font-extrabold leading-0 ">
          {pageName}
        </p>
      </div> 
    </div>
  );
}

export default Banner;
