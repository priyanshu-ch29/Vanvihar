import React from "react";
import About from "./About";
import Uniquness from "./Uniquness";
import Info from "./Info";
import Facility from "./Facility";
import ImageSlider from "./ImageSlider";
import LatestNews from "./LatestNews";
import LatestEvent from "./LatestEvent";
import Footer from "./Footer";

const Body = () => {
  return (
    <>
      <ImageSlider />
      <About />
      <Uniquness />
      <Info />
      <Facility />
      <LatestNews />
      <LatestEvent />
      <Footer />
    </>
  );
};

export default Body;
