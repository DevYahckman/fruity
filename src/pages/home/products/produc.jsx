import React from "react";
import img from '../../../assets/product-img-1.jpg'



function Produc(props) {
 
  return (
    <div className="p-10 h-80">
      <p className="text-4xl font-bold text-center text-primary">
        Our <span className="text-deepBlack">Product</span>
      </p>
      <p className="text-center text-lightColor text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, alias
        nihil? Laboriosam?
      </p>


      <div className="mt-10 grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-1">
        <div className=" items-center border-1 border-solid">
          <div className=" h-10 bg-no-repeat bg-top" style={{ backgroundImage: `url(${img})` }} ></div>

        </div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  );
}

export default Produc;
