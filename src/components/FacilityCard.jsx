import React from "react";

const FacilityCard = ({ info }) => {
  return (
    <div className="w-[330px] h-[46vh] shadow-lg m-10">
      <div className=" bg-gray-200">
        <img
          src={info.imageURL}
          className="w-[250px] mx-auto h-[35vh] hover:scale-x-150 "
        />
      </div>

      <h1 className="text-center font-font-poppins font-semibold p-3 m-4">
        {info.info}
      </h1>
    </div>
  );
};

export default FacilityCard;
