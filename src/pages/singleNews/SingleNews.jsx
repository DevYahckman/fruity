import React, { useEffect, useState } from "react";
import Banner from "../../components/banner/banner";
import bg from "../../assets/news-bg-3.jpg";
import { FaUser } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import Comments from "./comments";
import CommentForm from "./commentForm";
import { useParams } from "react-router-dom";
import http from "../../services/httpService";
import config from '../../config.json'

function SingleNews(props) {
 


  const [singleNews, setSingleNews] =useState({})
  const params =useParams()
  const id = params.id


  useEffect(()=>{
    async function getData(){
      const res = await http.get(`${config.apiUrl}/news/${id}`)

     setSingleNews(res.data);
    }
    getData()
  },[])

  return (
    <div>
      <div>
        <Banner title="READ THE DETAILS" pageName="Single Article" />
      </div>
      <div className="p-5 md:p-20">
        <div
          className=" gap-4 grid grid-cols-1 lg:grid-cols-3 h-auto"
          style={{ height: "auto" }}
        >
          <div className="col-span-2">
            <div
              // style={{ backgroundImage: `url(${bg})` }}
              className="w-full  bg-no-repeat bg-cover bg-center rounded-xl"
            >
              <img src={singleNews.image} className=" w-full h-full rounded-xl" alt="" />
            </div>
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

            <p className="text-4xl font-bold">
              Pomegranate can prevent heart disease
            </p>
            <p className="text-base font-light ">
              {singleNews.new}
            </p>
           
            <Comments />
            <CommentForm />
          </div>

          <div className="hidden lg:inline-block">advertize here</div>
        </div>
      </div>
    </div>
  );
}

export default SingleNews;
