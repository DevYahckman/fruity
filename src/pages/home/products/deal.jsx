import React from "react";
import bg from "../../../assets/a.jpg";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import {BsCartFill} from 'react-icons/bs'

function Deal(props) {
  const targetDate = new Date("2023-12-31T00:00:00");

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex text-center space-x-2 md:space-x-6">
        <p className=" font-bold md:px-10 md:py-3 px-4 py-2 text-xl border-1 border-solid border-primary text-primary">
          {days} <br />
          <span className="text-deepBlack">Days</span>
        </p>
        <p className=" font-bold md:px-10 md:py-3 px-4 py-2 text-xl border-1 border-solid border-primary text-primary">
          {hours} <br />
          <span className="text-deepBlack">Hours</span>
        </p>
        <p className=" font-bold md:px-10 md:py-3 px-4 py-2 text-xl border-1 border-solid border-primary text-primary">
          {minutes} <br />
          <span className="text-deepBlack">Mins</span>
        </p>
        <p className=" font-bold md:px-10 md:py-3 px-4 py-2 text-xl border-1 border-solid border-primary text-primary">
          {seconds} <br />
          <span className="text-deepBlack">Secs</span>
        </p>
      </div>
    );
  };

  return (
    <div className="bg-lightBg p-3 md:p-16 grid h-auto lg:grid-cols-2 grid-cols-1">
      <div
        className=" h-80 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <p
          style={{ borderRadius: "70%" }}
          className="text-center w-20 px-5 py-9 border-8 border-solid
           border-red-500 bg-primary text-deepBlack font-bold   "
        >
          30% <br /> off per kg{" "}
        </p>
      </div>
      <div>
        <p className="text-5xl font-bold text-deepBlack">
          {" "}
          <span className="text-primary">Deal</span> of the month
        </p>
        <p className="font-medium font-xl text-lg text-deepBlack ">
          HIKAN STRWABERRY
        </p>

        <p className="font-xl text-sm">
          Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam
          similique! Beatae, minima quisquam molestias facere ea. Perspiciatis
          unde omnis iste natus error sit voluptatem accusant
        </p>

        <div className="mb-8">
          <Countdown date={targetDate} renderer={renderer} />
        </div>

        <Link
          to="#"
          className="hover:bg-black  hover:text-primary font-semibold mr-10 rounded-full bg-primary text-white py-3 px-7 no-underline "
        >
          <BsCartFill /> Add to cart
        </Link>
      </div>
    </div>
  );
}

export default Deal;
