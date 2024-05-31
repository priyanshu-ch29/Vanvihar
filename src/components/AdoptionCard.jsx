import React from "react";

const AdoptionCard = ({ info }) => {
  const { url, halfYearly, yearly, name, des } = info;
  return (
    <div className=" w-[300px] h-[65vh] shadow-lg mx-10">
      <img src={url} className="w-full h-[35vh] hover:scale-110" />
      <h1 className="font-font-poppins font-semibold p-2">
        Half Yearly: {halfYearly}
      </h1>
      <h2 className="font-font-poppins font-semibold pl-2 ">
        Yearly: {yearly}
      </h2>
      <h1 className="font-font-poppins font-semibold p-2">{name}</h1>
      <p className=" font-font-poppins font-light p-2">{des}</p>
    </div>
  );
};

export default AdoptionCard;
