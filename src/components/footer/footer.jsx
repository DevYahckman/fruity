import React from "react";
import { BsSendFill } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="bg-deepBlack h-auto">
      <div className="gap-10 text-white  p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-9  md:pt-20">
        <div className="font-light">
          <p className="text-white text-2xl font-semibold border-b-8 border-white">
            About us
          </p>
          <p className="text-base font-normal">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            minima cum pariatur corrupti earum maxime facere quisquam cumque
            fugiat assumenda iure labore aliquid nobis recusandae deserunt
            veniam porro totam cupiditate, aperiam accusantium eaque laboriosam
            fuga. Iusto aliquam commodi hic delectus.{" "}
          </p>
        </div>
        <div className="font-light">
          <p className="text-white text-2xl  font-semibold">Get in To</p>
          <p className="text-base font-normal">
            <p>No16 odo oba Moniya Ibadan</p>
            <p> adeniranajibade2014@gmail.com</p>
            <p>+2348146283237</p>
          </p>
        </div>
        <div className="font-light">
          <p className="text-white text-2xl  font-semibold">Pages</p>
          <p className="text-base font-normal">
            <Link
              to="#"
              className="decorat-none no-underline text-white leading-8"
            >
              {" "}
              <LiaExternalLinkAltSolid /> Home
            </Link>{" "}
            <br />
            <Link
              to="#"
              className="decorat-none no-underline text-white leading-8"
            >
              {" "}
              <LiaExternalLinkAltSolid /> About
            </Link>{" "}
            <br />
            <Link
              to="#"
              className="decorat-none no-underline text-white leading-8"
            >
              {" "}
              <LiaExternalLinkAltSolid /> Shop
            </Link>{" "}
            <br />
            <Link
              to="#"
              className="decorat-none no-underline text-white leading-8"
            >
              {" "}
              <LiaExternalLinkAltSolid /> News
            </Link>{" "}
            <br />
            <Link
              to="#"
              className="decorat-none no-underline text-white leading-8"
            >
              {" "}
              <LiaExternalLinkAltSolid /> Contact
            </Link>{" "}
            <br />
          </p>
        </div>
        <div className="font-light">
          <p className="text-white text-2xl font-semibold">Subcribe</p>
          <div className="text-base font-normal">
            <form action="">
              <input
                className="w-3/5 focus:border-red-300 rounded border-none text-white bg-formBg p-5"
                placeholder="Email"
              />{" "}
              <Link
                to="#"
                className="hover:text hover:bg-primary hover:text-formBg
            px-5 py-4 text-primary rounded bg-formBg"
              >
                {" "}
                <BsSendFill />{" "}
              </Link>
            </form>
          </div>
        </div>
      </div>
      <div
        style={{ borderTop: "2px solid white" }}
        className="text-lightWhite2 flex justify-center 
         space-x-5 p-5 mt-5  md:mt-10"
      >
        <Link to="#" className="text-lightWhite2">
          {" "}
          <FaFacebookF />{" "}
        </Link>
        <Link to="#" className="text-lightWhite2">
          {" "}
          <FaTwitter />{" "}
        </Link>
        <Link to="#" className="text-lightWhite2">
          {" "}
          <FaLinkedin />{" "}
        </Link>
        <Link to="#" className="text-lightWhite2">
          {" "}
          <TfiWorld />{" "}
        </Link>
      </div>
    </div>
  );
}

export default Footer;
