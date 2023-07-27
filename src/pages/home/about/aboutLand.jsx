import React from "react";
import bg from "../../../assets/abt.jpg";
import bg1 from "../../../assets/1.jpg";
import { CommonButton } from "../../../utils/buttons";

function AboutLand(props) {
  return (
    <div>
      <div className="overflow-x-hidden h-96  p-5 md:p-10 lg:p-24 grid gap-5 grid-cols-1 lg:grid-cols-2">
        <div
          className=" h-0 lg:h-full invisible lg:visible
            lg:bg-no-repeat  lg:bg-cover bg-top"
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/* www.youtube.com/watch?v=T0qagA4_eVQ */}

          <iframe
            className="lg:w-full lg:h-full"
            //   src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
            src="https://www.youtube.com/embed/Ibgb2eKGnys"
          ></iframe>
        </div>
        <div className="text-deepBlack">
          <p className="text-sm  font-normal">Since Year 1999</p>

          <p className="text-5xl font-bold">
            We are <span className="text-primary">Fruity</span>{" "}
          </p>

          <p className="text-base font-normal mb-8">
            Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa
            porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit
            amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum
            velit. Nam eu molestie lorem. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Sapiente facilis illo repellat
            veritatis minus, et labore minima mollitia qui ducimus.
          </p>

          <CommonButton name="Know more" link="#" />
        </div>
      </div>

      <div
        className="mt-10 mb-10 
        bg-cover h-80 md:h-fit p-5 md:p-10  bg-no-repeat"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <p className="text-4xl md:text-6xl font-bold text-deepBlack">
          July sale is on! <br />
          with big <span className="text-primary">Discount...</span>
        </p>

        <p className="text-4xl md:text-6xl font-bold text-deepBlack">
          sales upto <span className="text-primary">50%</span> off
        </p>

        <CommonButton name="Shop now!!!" link="#" />

      </div>
    </div>
  );
}

export default AboutLand;
