import React from "react";
import bg from "../../assets/breadcrumb-bg.jpg";
import styles from "./banner.module.scss";
import AppHeader from "../appHeader/header";

function Banner({ title, pageName }) {
  return (
    <div
      // style={{height:'75vh', backgroundImage:`url(${bg})`}}
      className={`${styles.header} w-full bg-red-600 from-slate-50`}
    >
        <AppHeader />
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
