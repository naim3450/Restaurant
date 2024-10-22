import React, { useContext } from "react";
import SpecialCard from "./SpecialCard";
import Container from "./Container";
import Slider from "react-slick";
import Button from "./Button";
import Context from "../Context/Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Special_Dis = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    // infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    height: 1000,
  };

  const { featureFood } = useContext(Context);

  return (
    <div className="h-[100vh] w-full bg-group bg-center bg-no-repeat bg-contain">
      <h1 className="text-center font-serif font-bold text-prh2 text-[55px] pt-[90px] pb-[60px]">
        Our Special Dishes
      </h1>

      <Container>
        <Slider {...settings}>
          {featureFood.map((el) => (
            <SpecialCard key={el.id} item={el} />
          ))}
        </Slider>

        <div className="flex items-center justify-center">
          <Button
            text={"See All"}
            className={`px-[56px] py-[16px] bg-black text-white mt-[50px] `}
          />
        </div>
      </Container>
    </div>
  );
};

export default Special_Dis;
