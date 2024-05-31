import React from "react";
import { IoCall } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-[url('https://vanviharnationalpark.org/public/assets/images/footer_bg.jpg')] bg-cover bg-center">
      <div className="flex justify-evenly p-5 font-font-poppins text-white bg-green-800 opacity-85 w-[80%] mx-auto">
        <div className="w-[30%] m-5">
          <h1 className="mb-4 text-2xl font-bold">About</h1>
          <p>
            Van Vihar is a revered National Park and Zoo located at Bhopal, the
            city of lakes and the capital of Madhya Pradesh. It is known for its
            beautiful landscape comprising of the upper lake, serene forest
            cover with rich floral and faunal diversity.
          </p>
          <h1 className="mt-4 text-yellow-600 font-semibold">Know more</h1>
        </div>
        <div className="m-5 w-[30%]">
          <h1 className="mb-5  text-2xl font-bold">Important for Tourist</h1>
          <ul className="m-2 p-3">
            <li>Display Map →</li>
            <li>Timings % Holidays →</li>
            <li>Gate Charges →</li>
            <li>Do(s) and Don't(s) →</li>
          </ul>
        </div>
        <div className="m-5 w-[30%]">
          <h1 className="mb-5  text-2xl font-bold">Useful Links</h1>
          <ul className="m-2 p-3">
            <li>1. MP Forest Department →</li>
            <li>2. MP Tiger Foundation →</li>
            <li>3. NTCA →</li>
            <li>4. Central Zoo Authority →</li>
          </ul>
        </div>
        <div className="m-5 w-[30%]">
          <h1 className="mb-5  text-2xl font-bold">Contact Info</h1>
          <IoCall className="m-2" /> <span>Call Us - 0755 - 2674278</span>
          <BiMessageDetail className="m-2" />{" "}
          <span>fdvanvnp.bpl@mp.gov.in</span>
          <FaLocationDot className="m-2" />{" "}
          <span>
            Director, Van Vihar National Park and Zoo, Bhadbhada Road, Bhopal –
            462003
          </span>
        </div>
      </div>
      <div className="p-5 font-font-poppins text-white bg-green-800 opacity-85 border-t-2  w-[80%] mx-auto">
        <h1 className="text-center">
          Copyright © 2024{" "}
          <span className="text-yellow-500">Van Vihar National Park & Zoo</span>{" "}
          All Rights Reserved
        </h1>
        <h1 className="text-center">
          Developed by - Blue Ocean Tech Solutions Pvt. Ltd.
        </h1>
        <h1 className="text-center">Total Number of Visitors : 490575</h1>
      </div>
    </div>
  );
};

export default Footer;
