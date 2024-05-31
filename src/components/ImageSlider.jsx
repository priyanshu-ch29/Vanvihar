import React, { useState } from "react";
import { images } from "../../utils/constant";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

const ImageSlider = () => {
  const [curr, setCurr] = useState(0);

  const nextImage = () => {
    setCurr((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  const prevImage = () => {
    setCurr((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  return (
    <>
      <div
        key={curr}
        className=" duration-300 flex flex-col justify-center items-center absolute left-[30%] bottom-[20%] "
      >
        <h1 className=" font-font-poppins font-semibold text-[30px] m-4">
          <span className=" text-yellow-500">Welcome to</span>{" "}
          <span className="text-white">Van Vihar National Zoo & Park</span>
        </h1>
        <button className="w-[300px] h-[5vh] bg-green-800 border border-white text-white font-font-poppins font-normal p-2">
          KNOW MORE ABOUT VAN VIHAR
        </button>
      </div>
      <div>
        {images.map((val, index) => {
          return (
            curr == index && (
              <div key={val.id}>
                <FaCircleArrowLeft
                  className="absolute text-2xl bottom-[170px] text-white left-5 cursor-pointer"
                  onClick={prevImage}
                />
                <img src={val.imageUrl} className=" duration-300 ease-in-out" />
                <FaCircleArrowRight
                  className="absolute right-5 bottom-[170px] text-2xl text-white cursor-pointer"
                  onClick={nextImage}
                />
              </div>
            )
          );
        })}
      </div>
    </>
  );
};

export default ImageSlider;
