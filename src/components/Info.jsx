import React from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoPaw } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaUsers } from "react-icons/fa";

const Info = () => {
  return (
    <div className=" h-[35vh] bg-green-700 flex justify-evenly items-center">
      <div className="text-center">
        <FaEarthAmericas className=" text-lime-500 text-[35px] ml-[100px]" />
        <h1 className="text-white font-font-poppins font-semibold text-[21px] mt-5">
          40+
        </h1>
        <h1 className="text-white font-font-poppins font-semibold text-[21px]">
          YEARS OF
        </h1>
        <h1 className="text-white font-font-poppins font-semibold text-[21px]">
          CONSERVATION WORK
        </h1>
      </div>
      <div className="text-center">
        <IoPaw className="text-lime-500 text-[35px] ml-[55px]" />
        <h1 className="text-white font-font-poppins font-semibold text-[21px] mt-5">
          1400+
        </h1>
        <h1 className="text-white font-font-poppins font-semibold text-[21px]">
          FREE RANGING{" "}
        </h1>
        <h1 className="text-white font-font-poppins font-semibold text-[21px]">
          ANIMALS
        </h1>
      </div>
      <div className="text-center">
        <SlCalender className="text-lime-500 text-[35px] ml-[85px]" />
        <h1 className="text-white font-font-poppins font-semibold text-[21px] mt-5">
          50+
        </h1>
        <h1 className="text-white font-font-poppins font-semibold text-[21px]">
          AWARENESS EVENTS{" "}
        </h1>
        <h1 className="text-white font-font-poppins font-semibold text-[21px]">
          LAST YEAR
        </h1>
      </div>
      <div className="text-center">
        <FaUsers className="text-lime-500 text-[35px] ml-[90px]" />
        <h1 className="text-white font-font-poppins font-semibold text-[21px] mt-5">
          6Lakh+
        </h1>
        <h1 className="text-white font-font-poppins font-semibold text-[21px]">
          TOURIST IN LAST YEAR{" "}
        </h1>
      </div>
    </div>
  );
};

export default Info;
