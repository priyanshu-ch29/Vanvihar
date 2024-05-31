import React from "react";

const About = () => {
  return (
    <>
      <div className=" flex justify-around items-center w-[80%] mx-auto m-10">
        <div>
          <h1 className="text-center text-orange-600 font-font-poppins font-bold p-1 text-2xl">
            A Documentary On
          </h1>
          <h1 className="text-center font-font-poppins font-bold p-1 text-2xl">
            Van Vihar National Park & Zoo
          </h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/q4v1rXmXt98"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="ml-10">
          <span className=" font-medium">Know more about</span>
          <h1 className=" font-font-poppins font-bold text-green-800 text-2xl">
            Van Vihar National Park & Zoo
          </h1>
          <p className="pt-2 font-font-poppins font-normal">
            Van Vihar National Park and Zoo is one of the most revered National
            Park and Zoo of Central India and is a shining beacon in the field
            of conservation. It is an amazing world of winged creatures, free
            ranging ungulates and captive carnivores in the midst of greenery.
          </p>
          <p className="pt-4 font-font-poppins font-normal">
            The park which is more popularly known as just “Van Vihar” is
            considered as a “must see” destination for tourists visiting Bhopal.
            The characteristic combination of rich wetland areas, meadows, pools
            of water at different places, rugged slopes, mixed bamboo vegetation
            along with grass covered plateau and areas of mixed plantations
            support the rich floral and faunal diversity in the area.
          </p>
          <p className="pt-4 font-font-poppins font-normal">
            This green oasis amidst the city of lakes also plays a very vital
            role as a carbon sink contributing to environmental health of
            Bhopal. It is situated right next to the famous Upper Lake of Bhopal
            also known as the “Bada Talab” which is a Ramsar Site and one of the
            two lakes of Bhoj Wetland.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
