import React from "react";
import { BsSendFill } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="gap-4 text-white bg-deepBlack h-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-20">
      <div className="font-light">
        <p className="text-white text-2xl  underline">About us</p>
        <p className="text-base text-lightWhite ">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          minima cum pariatur corrupti earum maxime facere quisquam cumque
          fugiat assumenda iure labore aliquid nobis recusandae deserunt veniam
          porro totam cupiditate, aperiam accusantium eaque laboriosam fuga.
          Iusto aliquam commodi hic delectus.{" "}
        </p>
      </div>
      <div className="font-light">
        <p className="text-white text-2xl  underline">Get in To</p>
        <p className="text-base text-lightWhite ">
          <p>No16 odo oba Moniya Ibadan</p>
          <p> adeniranajibade2014@gmail.com</p>
          <p>+2348146283237</p>
        </p>
      </div>
      <div className="font-light">
        <p className="text-white text-2xl  underline">Pages</p>
        <p className="text-base text-lightWhite ">
          <Link to="#"> Home</Link> <br />
          <Link to="#"> About</Link> <br />
          <Link to="#"> Shop</Link> <br />
          <Link to="#"> News</Link> <br />
          <Link to="#"> Contact</Link> <br />
        </p>
      </div>
      <div className="font-light">
        <p className="text-white text-2xl  underline">Subcribe</p>
        <div className="text-base text-lightWhite ">
          <form action="">
            <input
              className="w-3/5 focus:border-red-300 rounded border-none text-white bg-formBg p-5"
              placeholder="Email"
            />{" "}
             <Link to='#' className="px-5 py-4 text-primary rounded bg-formBg"> <BsSendFill /> </Link> 
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
