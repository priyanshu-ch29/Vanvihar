import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
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
    ],
  },
]);

export default App;
