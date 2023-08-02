import React, { useEffect, useState } from "react";
import img from '../../assets/news-bg-3.jpg'
import { FaUser } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";



function NewsCard({data, link}) {
  return (
    <div className=" p-5 lg:p-11">
      
      <div className="transition-all duration-300 ease-in delay-100 md:p-10 gap-4 grid grid-cols-1 lg:grid-cols-3 ">
        {data.map((item, i) => (
          <div className=" cursor-pointer hover:shadow-none shadow-2xl my-14  ">
            <img
              src={item.image}
              className="w-full rounded-r-lg rounded-t-lg"
              alt=""
            />
            <div className="p-4">
              <p className="text-xl font-bold ">{item.title}</p>
              <p className="text-sm text-lightColor  ">
                <span className="mr-3">
                  {" "}
                  <FaUser /> Admin{" "}
                </span>
                <span>
                  {" "}
                  <BsCalendar2DateFill className="mr-1" />
                  27 December 2023
                </span>
              </p>

              <p className=" text-lightColor text-base">{item.new.substring(0, 100) + "...."}</p>

              <p>
                <Link
                // blogs/${item._id}`
                  to={`/news/${item._id}`}
                  className=" hover:text-primary  font-semibold no-underline text-sm text-lightColor"
                >
                  {" "}
                  read more <BiChevronRight className="mt-12" />{" "}
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default NewsCard;
