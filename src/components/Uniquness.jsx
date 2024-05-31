import React from "react";
import { animals } from "../../utils/constant";
import AnimalCard from "./AnimalCard";

const Uniquness = () => {
  return (
    <>
      <div className=" bg-gray-100">
        <div className="flex flex-col items-center justify-center w-[80%] mx-auto">
          <h1 className=" font-font-poppins font-bold text-2xl text-green-800 m-7">
            Uniqueness of Van Vihar
          </h1>
          <span className=" font-font-poppins font-normal text-gray-600 mt-2">
            One of it’s kind establishment being a combination of National Park,
            a Zoo, Rescue Centre for wild animals
          </span>
          <span className=" font-font-poppins font-normal text-gray-600">
            and Conservation Breeding Centre for selected vital species
          </span>
          <span className="font-bold font-font-poppins p-1 mt-8">
            ALL IN ONE - NATIONAL PARK - ZOOLOGICAL GARDEN - RESCUE CENTRE -
            CONSERVATION BREEDING CENTRE -
          </span>
          <span className="font-bold font-font-poppins p-1">
            SNAKE INTERPRETATION CENTRE - BIRD INTERPRETATION CENTER - BUTTERFLY
            PARK - WILD CAFE
          </span>
        </div>
        <div className="grid grid-cols-3 gap-10 justify-items-center w-[70%] mx-auto mt-11">
          {animals.map((animal, index) => {
            return (
              <AnimalCard key={animal.imageid || index} animalData={animal} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Uniquness;
