import React from "react";
import { Link } from "react-router-dom";
const LatestNews = () => {
  return (
    <>
      <div className="mt-10">
        <h1 className="text-center mt-6 text-green-800 font-font-poppins font-bold text-2xl">
          Latest News
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-10 w-[70%] mx-auto mt-5">
        <div className=" w-[300px] h-[60vh] shadow-lg m-10">
          <img
            src="https://vanviharnationalpark.org/public/storage/news_image/1695537896wlw23.png"
            className="w-[270px] mx-auto h-[35vh] hover:scale-110 p-2"
          />
          <h1 className="font-font-poppins font-semibold p-2">
            Wildlife Week 2023
          </h1>
          <h2 className="font-font-poppins text-green-800 p-2">
            Want to participate in various 'Learn and Fun' events? The most
            anticipated Wildlife Week 20...
          </h2>
        </div>
        <div className=" w-[300px] h-[60vh] shadow-lg m-10">
          <img
            src="https://vanviharnationalpark.org/public/storage/news_image/1681290798summer-camp-hi.jpg"
            className="w-[270px] mx-auto h-[35vh] hover:scale-110 p-2"
          />
          <h1 className="font-font-poppins font-semibold p-2">
            वन विहार राष्ट्रीय उद्यान में समर कैंप क...
          </h1>
          <h2 className="font-font-poppins text-green-800 p-2">
            भोपाल के वन विहार राष्ट्रीय उद्यान एवं चिड़ियाघर में समर कैंप का
            आयोजन किया जा रहा है। कृपया पोस्...
          </h2>
        </div>
        <div className=" w-[300px] h-[60vh] shadow-lg m-10">
          <img
            src="https://vanviharnationalpark.org/public/storage/news_image/16793967771.jpg"
            className="w-[270px] mx-auto h-[35vh] hover:scale-110 p-2"
          />
          <h1 className="font-font-poppins font-semibold p-2">
            मध्य प्रदेश में वल्चर कंजर्वेशन एवं रिइं...
          </h1>
          <h2 className="font-font-poppins text-green-800 p-2">
            आर.सी.वी.पी. नरोन्हा प्रशासन अकादमी भोपाल में वन विहार राष्ट्रीय
            उद्यान एवं बॉम्बे नेचुरल हिस्ट्री स...
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link to="https://vanviharnationalpark.org/news/newses">
          <button className="text-center font-light font-font-poppins border-2 p-2 border-green-700">
            VIEW ALL NEWS
          </button>
        </Link>
      </div>
    </>
  );
};

export default LatestNews;
