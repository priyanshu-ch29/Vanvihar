import React from "react";

const AnimalCard = ({ animalData }) => {
  const { imageUrl, imageName, imageHistory } = animalData;
  return (
    <>
      <div className=" w-[300px] h-[50vh] shadow-lg m-10">
        <img src={imageUrl} className="w-full h-[35vh] hover:scale-110" />
        <h1 className="text-center font-font-poppins font-semibold p-3">
          {imageName}
        </h1>
        <h2 className="text-center font-font-poppins text-green-800">
          {imageHistory}
        </h2>
      </div>
    </>
  );
};

export default AnimalCard;
