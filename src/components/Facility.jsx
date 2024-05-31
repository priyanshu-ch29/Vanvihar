import React from "react";
import { facility } from "../../utils/constant";
import FacilityCard from "./FacilityCard";

const Facility = () => {
  return (
    <>
      <h1 className="font-bold font-font-poppins text-center text-2xl text-green-800 mt-11">
        New Attractions & Visitor Facility At Vanvihar
      </h1>

      <div className="grid grid-cols-3 gap-10 justify-items-center w-[70%] mx-auto ">
        {facility.map((fac) => {
          return <FacilityCard key={fac.id} info={fac} />;
        })}
      </div>
    </>
  );
};

export default Facility;
