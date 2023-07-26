import React from "react";
import img from "../../../assets/product-img-1.jpg";
import img2 from "../../../assets/product-img-2.jpg";
import img3 from "../../../assets/product-img-3.jpg";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import Deal from "./deal";

function Produc(props) {
  const products = [
    {
      img: img,
      name: "Strawberry",
      Price: 85,
    },
    {
      img: img2,
      name: "Berry",
      Price: 85,
    },
    {
      img: img3,
      name: "Lemon",
      Price: 85,
    },
  ];
  return (
    <div>

    <div className="p-10 pb-60">
      <p className="text-4xl font-bold text-center text-primary">
        Our <span className="text-deepBlack">Product</span>
      </p>
      <p className="text-center text-lightColor text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, alias
        nihil? Laboriosam?
      </p>

      <div className="mt-10 mx-1 md:mx-4 lg:mx-8 grid gap-12 grid-cols-1 lg:grid-cols-3 md:grid-cols-1">
        {products.map((item, i) => (
          <div className=" p-12 h-30 rounded-xl items-center  shadow-2xl hover:shadow-none cursor-pointer">
            <div className="flex place-items-center justify-center">
              <img src={item.img} width={250} alt="" />
            </div>
            <div className="mt-6 text-center">
              <p className="text-deepBlack text-3xl font-bold">{item.name}</p>
              <p className="font-xs font-normal text-1xl text-lightColor">
                Per Kg
              </p>
              <p className="text-deepBlack text-2xl font-bold">{item.Price}$</p>

              <Link
                to="#"
                className="hover:bg-black hover:text-primary font-semibold mr-10 rounded-full bg-primary text-white py-3 px-7 no-underline "
              >
                <BsCartFill /> Add to cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>


    < Deal/>
    </div>
  );
}

export default Produc;
