import React from "react";
import bg from "../../../assets/a.jpg";

function Deal(props) {
  return (
    <div className="bg-lightBg p-3 md:p-16 grid h-auto grid-cols-1">
      <div
        className=" bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <p
          style={{ borderRadius: "70%" }}
          className="text-center w-20 px-5 py-9 border-8 border-solid
           border-red-500 bg-primary text-deepBlack font-bold   "
        >
          30% <br /> off per kg{" "}
        </p>
      </div>
      <div>
        <p className="text-5xl font-bold text-deepBlack"> <span className="text-primary">Deal</span> of the month</p>
        <p className="font-medium font-xl text-lg text-deepBlack ">HIKAN STRWABERRY</p>

        <p className="font-xl text-sm">
          Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam
          similique! Beatae, minima quisquam molestias facere ea. Perspiciatis
          unde omnis iste natus error sit voluptatem accusant
        </p>

        <div className="flex space-x-2 md:space-x-6 ">
            <p className=" font-bold md:px-10 md:py-3 px-4 py-2 text-xl border-1 border-solid border-primary text-primary">
                7860 <br />
                <span className="text-deepBlack">Days</span>
            </p>
            <p className=" font-bold md:px-10 md:py-3 px-4 py-2 text-xl border-1 border-solid border-primary text-primary">
                7860 <br />
                <span className="text-deepBlack">Days</span>
            </p>
            <p className=" font-bold md:px-10 md:py-3 px-4 py-2 text-xl border-1 border-solid border-primary text-primary">
                7860 <br />
                <span className="text-deepBlack">Days</span>
            </p>
            <p className=" font-bold md:px-10 md:py-3 px-4 py-2 text-xl border-1 border-solid border-primary text-primary">
                7860 <br />
                <span className="text-deepBlack">Days</span>
            </p>
            
           
        </div>
      </div>
    </div>
  );
}

export default Deal;
