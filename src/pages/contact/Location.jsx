import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

function Location(props) {
  return (
    <div>
      <div className="bg-deepBlack text-4xl font-bold text-white text-center p-24">
        <MdLocationPin className="text-primary" /> Find Our Location
      </div>
      <div className="h-screen -mb-7">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.2508744244287!2d3.8917257142699344!3d7.547598212505562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039f1cdb2ed5e7b%3A0x133fbb82df2b6282!2sOdo%20Oba%20Rd%2C%20200136%2C%20Mawniya%2C%20Oyo!5e0!3m2!1sen!2sng!4v1680284579983!5m2!1sen!2sng"
          frameborder="0"
          width="100%"
          height="620"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Location;
