import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import LatestNews from "./components/LatestNews";
import LatestEvent from "./components/LatestEvent";
import Map from "./components/Map";
import { LoadScript } from "@react-google-maps/api";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Navbar />
      <LoadScript
        googleMapsApiKey="AIzaSyBn2U4uuM6cYvUiqtpv9njvPWhYH7veyXo"
        libraries={["places"]}
      >
        <Outlet />
      </LoadScript>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "https://play.google.com/store/apps/details?id=in.netlegends.vanviharapp&hl=en-IN",
        element: <Navbar />,
      },
      {
        path: "https://forest.mponline.gov.in/Tier2Forest/SelectTripCategoryEntryNew.aspx?T=Tier2&ParkID=VVNP",
        element: <Navbar />,
      },
      {
        path: "https://vanviharnationalpark.org/news/newses",
        element: <LatestNews />,
      },
      {
        path: "https://vanviharnationalpark.org/events/events",
        element: <LatestEvent />,
      },
      {
        path: "/location",
        element: (
          <ChakraProvider>
            <Map />
          </ChakraProvider>
        ),
      },
    ],
  },
]);

export default App;
