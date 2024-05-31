import React from "react";
import logo from "../assets/logo.webp";
import google from "../assets/Google.webp";
import safari from "../assets/safari.webp";
import vanvihar from "../assets/vanvihar-logo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-around shadow-xl p-1">
          <div className="flex items-center">
            <Link
              to={
                "https://play.google.com/store/apps/details?id=in.netlegends.vanviharapp&hl=en-IN"
              }
              target="_blank"
            >
              <img
                src={logo}
                className=" w-[50px] rounded-full border border-green-700"
              />
            </Link>
            <Link
              to={
                "https://play.google.com/store/apps/details?id=in.netlegends.vanviharapp&hl=en-IN"
              }
              target="_blank"
            >
              <h1 className="p-5 font-font-poppins font-bold text-green-700">
                Van Vihar Bhopal Booking App
              </h1>
            </Link>
          </div>
          <Link
            to={
              "https://play.google.com/store/apps/details?id=in.netlegends.vanviharapp&hl=en-IN"
            }
            target="_blank"
          >
            <img src={google} className="w-[170px] h-[50px] rounded" />
          </Link>
        </div>
        <div className="shadow-xl p-3 h-[15vh] ">
          <div className=" flex items-center justify-between w-[68%] mx-auto ">
            <Link to="/">
              <img src={vanvihar} className=" w-[150px] h-[10vh]" />
            </Link>

            <Link
              to={
                "https://forest.mponline.gov.in/Tier2Forest/SelectTripCategoryEntryNew.aspx?T=Tier2&ParkID=VVNP"
              }
              target="_blank"
            >
              <img src={safari} className=" w-[120px]" />
            </Link>
          </div>
        </div>

        <ul className="flex justify-evenly items-center h-[8vh] bg-gradient-to-r from-green-800 via-green-700 to-yellow-500">
          <li className="text-white font-font-poppins font-semibold cursor-pointer">
            HOME
          </li>
          <li className="text-white font-font-poppins font-semibold cursor-pointer">
            {" "}
            ABOUT
          </li>
          <li className="text-white font-font-poppins font-semibold cursor-pointer">
            TOURIST INFORMATION
          </li>
          <li className="text-white font-font-poppins font-semibold cursor-pointer">
            MANAGEMENT
          </li>
          <li className="text-white font-font-poppins font-semibold cursor-pointer">
            GALLERY
          </li>
          <li className="text-white font-font-poppins font-semibold cursor-pointer">
            INFO CORNER
          </li>
          <li className="text-white font-font-poppins font-semibold cursor-pointer">
            CONTACT US
          </li>
          <li className="text-white font-font-poppins font-semibold cursor-pointer">
            FAQS
          </li>
          <li className="text-white font-font-poppins font-semibold cursor-pointer">
            FEEDBACK
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
