import React from "react";
import { Link } from "react-router-dom";

const LatestEvent = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div>
          <h1 className="text-center mt-10 p-5 text-green-800 font-font-poppins font-bold text-2xl">
            Latest Events
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-10 w-[70%] mx-auto mt-5">
          <div className=" w-[300px] h-[60vh] shadow-lg m-10">
            <img
              src="https://vanviharnationalpark.org/public/storage/event_image/17056502571.jpeg"
              className="w-[270px] mx-auto h-[35vh] hover:scale-110 p-2"
            />
            <h1 className="font-font-poppins font-semibold p-2">
              वन विहार राष्ट्रीय उद्यान-जू में अनुभूति शिविर का आयोजन
            </h1>
            <h2 className="font-font-poppins text-green-800 p-2">
              मध्यप्रदेश शासन वन विभाग द्वारा अनुभूति कार्यक्रम 2023-24 के
              अंतर्गत वन, वन्यप्राणी एवं पर्यावरण संरक्षण के प्रति संवेदनशीलता
              विकसित करने के उद्देश्य...
            </h2>
          </div>
          <div className=" w-[300px] h-[60vh] shadow-lg m-10">
            <img
              src="https://vanviharnationalpark.org/public/storage/event_image/16938089072h%20(1).jpeg"
              className="w-[270px] mx-auto h-[35vh] hover:scale-110 p-2"
            />
            <h1 className="font-font-poppins font-semibold p-2">
              अंर्तराष्ट्रीय गिद्ध दिवस पर पर्यटकों को जागरूक करने हेतु ‘‘...
            </h1>
            <h2 className="font-font-poppins text-green-800 p-2">
              अंर्तराष्ट्रीय गिद्ध दिवस माह सितम्बर के प्रथम शनिवार को मनाया
              जाता है। इस वर्ष माह सितम्बर पहला शनिवार दो सितम्बर को होने से वन
              विहार में विभिन्न कार...
            </h2>
          </div>
          <div className=" w-[300px] h-[60vh] shadow-lg m-10">
            <img
              src="https://vanviharnationalpark.org/public/storage/event_image/16938087151h%20(1).jpeg"
              className="w-[270px] mx-auto h-[35vh] hover:scale-110 p-2"
            />
            <h1 className="font-font-poppins font-semibold p-2">
              गिद्ध संरक्षण एवं संर्वधन विषय पर एक कार्यशाला का आयोजन
            </h1>
            <h2 className="font-font-poppins text-green-800 p-2">
              अंर्तराष्ट्रीय गिद्ध दिवस दिनांक 02.09.2023 के अवसर पर वन विहार
              राष्ट्रीय उद्यान, भोपाल में गिद्ध संरक्षण एवं संर्वधन विषय पर एक
              कार्यशाला का आयोजन कि...
            </h2>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link to="https://vanviharnationalpark.org/events/events">
            <button className="text-center font-light font-font-poppins border-2 p-2 border-green-700 mb-10">
              VIEW ALL EVENTS
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LatestEvent;
