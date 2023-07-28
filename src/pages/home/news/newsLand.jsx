import React, { useEffect, useState } from "react";
import img from "../../../assets/news-bg-1.jpg";
import img2 from "../../../assets/news-bg-2.jpg";
import img3 from "../../../assets/news-bg-3.jpg";
import { FaUser } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CommonButton } from "../../../utils/buttons";
import config from '../../../config.json'
import http from '../../../services/httpService'

function NewsLand(props) {
  const [news,setNews] = useState([])

useEffect(()=>{
  async function getData(){
    const {data} = await http.get(`${config.apiUrl}/news?_limited=3`,)
   setNews(data);
 console.log(data);

  }

  getData()
},[])

  const data1 = [
    {
      img: img,
      title: " A man's worth has its season, like tomato.",
      news: ` Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
            nisi. Praesent vitae mattis nunc, egestas viverra eros.`,
    },
    {
      img: img2,
      title: " A man's worth has its season, like tomato.",
      news: ` Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
            nisi. Praesent vitae mattis nunc, egestas viverra eros.`,
    },
    {
      img: img3,
      title: " A man's worth has its season, like tomato.",
      news: ` Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
            nisi. Praesent vitae mattis nunc, egestas viverra eros.`,
    },
  ];
  return (
    <div className="p-5 lg:p-11">
      <p className="sm:text-2xl  md:text-4xl text-center font-bold text-deepBlack">
        Our <span className="text-primary">News</span>{" "}
      </p>
      <p className="px-10 text-center text-deepBlack">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga
        quas itaque eveniet beatae optio.
      </p>

      <div className=" md:p-10 gap-4 grid grid-cols-1 lg:grid-cols-3 ">
        {news.slice(0,3).map((item, i) => (
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

              <p className=" text-lightColor text-base">{item.new}</p>

              <p>
                <Link
                  to="#"
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
      <div className="mt-20 md:mt-0 flex justify-center">
        <CommonButton name="more news" />
      </div>
    </div>
  );
}

export default NewsLand;
