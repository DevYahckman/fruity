import React, { useState } from "react";

import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
// import Deal from "./deal";
import { CommonButton } from "../../utils/buttons";

function Goods({ products,setSelectedCategory,selectedCategory }) {
  // const [selectedCategory, setSelectedCategory] = useState("All");

  const button = [
    {
      btnName: "All",
      link: "#",
    },
    {
      btnName: "Strawberry",
      link: "#",
    },
    {
      btnName: "Berry",
      link: "#",
    },
    {
      btnName: "Lemon",
      link: "#",
    },
  ];
  return (
    <div>
      <div className="text-center mt-16">
        {button.map((item, i) => (
          <Link
            onClick={() => setSelectedCategory(item.btnName)}
            to={item.link}
            className={`${
              selectedCategory === item.btnName ? "bg-black" : ""
            } text-white border mr-7 border-solid no-underline hover:bg-black bg-primary md:px-5 px-3 md:py-3 py-2 rounded-full md:text-xl text-base md:font-bold font-semibold`}
          >
            {" "}
            {item.btnName}{" "}
          </Link>
        ))}
      </div>
      <div className="p-5 md:p-10 pb-60">
        <div className="mt-10 mx-1 md:mx-4 lg:mx-8 grid gap-12 grid-cols-1 lg:grid-cols-3 md:grid-cols-1">
          {products
            .filter(
              (item) =>
                selectedCategory == "All" || item.name == selectedCategory
             
                )
            .map((item, i) => (
              <div
                className="p-6 md:p-12 h-30 
            rounded-xl items-center  shadow-2xl hover:shadow-none cursor-pointer"
              >
                <div className="flex place-items-center justify-center">
                  <img src={item.imagePath} width={250} alt="" />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-deepBlack text-3xl font-bold">
                    {item.name}
                  </p>
                  <p className="font-xs font-normal text-1xl text-lightColor">
                    Per Kg
                  </p>
                  <p className="text-deepBlack text-2xl font-bold">
                    {item.price}$
                  </p>

                  <CommonButton
                    link={`/shop/${item._id}`} 
                    name="Add to Cart"
                    icon={<BsCartFill />}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Goods;
