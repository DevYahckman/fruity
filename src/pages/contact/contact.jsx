import React from "react";
import Banner from "../../components/banner/banner";
import ContactForm from "./ContactForm";
import { FaMap } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import Location from "./Location";

function Contact(props) {
  return (
    <div>
      <div>
        <Banner title="GET 24/7 SUPPORT" pageName="CONTACT US" />
      </div>

      <div className="lg:p-20 md:10 p-5">
        <div className=" lg:grid gird-cols-1 md:grid-cols-3">
          <div className="col-span-2">
            <p className="text-3xl font-bold">Have you any question? </p>
            <p className="text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iste
              aut quaerat quo quidem earum explicabo corrupti magni temporibus
              dolorum consequuntur, et vitae
            </p>

            <div>
              <ContactForm />
            </div>
          </div>
          <div>
            <div
              style={{ backgroundColor: "#FBFBFB" }}
              className="p-5 h-auto mt-10 lg:mt-0 lg:ml-9"
            >
              <div className="flex space-x-6 mb-5">
                <div>
                  <FaMap className="text-2xl text-primary" />
                </div>
                <div style={{ lineHeight: "1" }} className="text-deepBlack">
                  <p className="font-bold text-xl -mt-0">Shop Address</p>
                  <p> 34/8, East Hukupara</p>
                  <p>Gifirtok, Sadan.</p>
                  <p>Country Name</p>
                </div>
              </div>
              <div className="flex space-x-6 mb-5">
                <div>
                  <MdOutlineWatchLater className="text-2xl text-primary" />
                </div>
                <div style={{ lineHeight: "1" }} className="text-deepBlack">
                  <p className="font-bold text-xl -mt-0">Shop Hours</p>
                  <p> MON-FRIDAY: 8am to 9pm</p>
                  <p> SAT-SUN: 10am to 8pm</p>
                </div>
              </div>
              <div className="flex space-x-6 mb-5">
                <div>
                  <BiSolidContact className="text-2xl text-primary" />
                </div>
                <div style={{ lineHeight: "1" }} className="text-deepBlack">
                  <p className="font-bold text-xl -mt-0">Shop Address</p>
                  <p> Phone: +2348146283237</p>
                  <p>Email: infintytech1212@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Location />
    </div>
  );
}

export default Contact;
