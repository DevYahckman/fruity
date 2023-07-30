import React from 'react';
import { CommonButton } from "../../../utils/buttons";
import bg1 from "../../../assets/1.jpg";

function JulySales(props) {
    return (
        <div>
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

export default JulySales;