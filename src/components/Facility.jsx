import React, { useState } from "react";
import { adoption, facility } from "../../utils/constant";
import FacilityCard from "./FacilityCard";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import AdoptionCard from "./AdoptionCard";

const Facility = () => {
  const [slide, setSlide] = useState(0);

  const prevCard = () => {
    setSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : adoption.length - 1
    );
  };

  const nextCard = () => {
    setSlide((prevSlide) =>
      prevSlide < adoption.length - 1 ? prevSlide + 3 : 0
    );
  };

  return (
    <>
      <h1 className="font-bold font-poppins text-center text-2xl text-green-800 mt-11">
        New Attractions & Visitor Facility At Vanvihar
      </h1>

      <div className="grid grid-cols-3 gap-10 justify-items-center w-[70%] mx-auto">
        {facility.map((fac) => {
          return <FacilityCard key={fac.id} info={fac} />;
        })}
      </div>

      <div className="flex mt-10">
        <div className="w-[25%] h-[65vh] bg-gray-800">
          <div className="m-8 pt-5 text-2xl">
            <h1 className="font-poppins font-bold">
              <span className="text-lime-600">Animal </span>
              <span className="text-white">Adoption</span>
            </h1>
            <span className="text-white">Scheme</span>
          </div>

          <p className="text-white m-8">
            An Adoption scheme with the objective of creating awareness and
            affection towards wildlife and further the cause of wildlife
            conservation. Any individual or organization can adopt one or more
            animals as per the scheme. More details can be found on Animal
            Adoption page.
          </p>
          <div className="flex items-center justify-center text-[30px] p-2">
            <BsArrowLeftSquareFill
              className="text-lime-500 m-4 cursor-pointer"
              onClick={prevCard}
            />
            <BsArrowRightSquareFill
              className="text-lime-500 cursor-pointer"
              onClick={nextCard}
            />
          </div>
        </div>
        <div className="w-[75%] overflow-hidden relative">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${slide * 11}%)` }}
          >
            {adoption.map((animal) => {
              return (
                <div key={animal.id}>
                  <AdoptionCard info={animal} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Facility;
