import React, { useEffect, useState } from "react";
import img from "../../../assets/product-img-1.jpg";
import img2 from "../../../assets/product-img-2.jpg";
import img3 from "../../../assets/product-img-3.jpg";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import Deal from "./deal";
import { CommonButton } from "../../../utils/buttons";
import http from '../../../services/httpService'
import config from '../../../config.json'

function Produc(props) {
  const [products, setProducts] = useState([])
// const [selectedCategory,setSelectedCategory] = useState('All')

  useEffect(()=>{
    async function getData(){
const {data} =await http.get(`${config.apiUrl}/fruits`)
setProducts(data);
console.log(data);
    }
    getData()
  },[])

  return (
    <div>
      <div className="p-5 md:p-10 pb-60">
        <p className="text-4xl font-bold text-center text-primary">
          Our <span className="text-deepBlack">Product</span>
        </p>
        <p className="text-center text-lightColor text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, alias
          nihil? Laboriosam?
        </p>

        <div className="mt-10 mx-1 md:mx-4 lg:mx-8 grid gap-12 grid-cols-1 lg:grid-cols-3 md:grid-cols-1">
          {products.slice(0,3).map((item, i) => (
            <div className="p-6 md:p-12 h-30 
            rounded-xl items-center  shadow-2xl hover:shadow-none cursor-pointer">
              <div className="flex place-items-center justify-center">
                <img src={item.imagePath} width={250} alt="" />
              </div>
              <div className="mt-6 text-center">
                <p className="text-deepBlack text-3xl font-bold">{item.name}</p>
                <p className="font-xs font-normal text-1xl text-lightColor">
                  Per Kg
                </p>
                <p className="text-deepBlack text-2xl font-bold">
                  {item.price}$
                </p>
              <div className="ml-10">

                <CommonButton
                  link={`/shop/${item._id}`}
                  name="Add to Cart"
                  icon={<BsCartFill />}
                />
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Deal />
    </div>
  );
}

export default Produc;
