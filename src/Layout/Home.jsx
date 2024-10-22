import React, { useContext } from "react";
import Banner from "../Component/Banner";
import Special_Dis from "../Component/Special_Dis";
import HealthyFood from "../Component/HealthyFood";
import Video from "../Component/AboutPage/Video";
import Chef from "../Component/Chef";
import Review from "../Component/AboutPage/Review";
import Articels from "../Component/Articels";
import AddToCartPopUp from "../Component/AddToCartPopUp";
import Context from "../Context/Context";

const Home = () => {
  return (
    <div>
      <Banner />
      <Special_Dis />
      <Chef />
    </div>
  );
};

export default Home;
