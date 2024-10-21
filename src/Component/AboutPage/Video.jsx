import React from "react";
import TitleDes from "../../Common/TitleDes";
import img1 from "../../assets/restaurant-menu 1.png";
import img2 from "../../assets/order.png";
import img3 from "../../assets/clock.png";
import { IoIosPlay } from "react-icons/io";

const Video = () => {
  return (
    <div>
      <div className="relative bg-[url('./src/assets/videoBg.png')] w-full h-[690px] object-cover bg-center">
        <a id="play-video" className="video-play-button" href="#">
          <span className="text-red-700 relative z-50 text-4xl">
            <IoIosPlay />
          </span>
        </a>
        <div id="video-overlay" className="video-overlay">
          <a className="video-overlay-close">&times;</a>
        </div>
        <div className="flex items-center justify-center w-full absolute top-[65%] left-[50%] -translate-x-[50%] -translate-y-[60%]">
          <TitleDes
            mainTitle={"Feel the authentic & original taste from us"}
            p1={false}
            p2={false}
            TitleWhite={true}
            textCenter={true}
          />
        </div>
      </div>
      <div className="bg-white py-[80px]">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* menu1 */}
            <div className="flex gap-x-4 max-w-[336px]">
              <div>
                <img src={img1} alt="" />
              </div>
              <div>
                <h5 className="font-bold text-xl text-prh2 font-montserrat capitalize">
                  Multi Cuisine
                </h5>
                <p className="font-montserrat font-normal text-base text-prh leading-6 pt-3">
                  In the new era of technology we look in the future with
                  certainty life.
                </p>
              </div>
            </div>
            {/* menu2 */}
            <div className="flex gap-x-4 max-w-[336px]">
              <div>
                <img src={img2} alt="" />
              </div>
              <div>
                <h5 className="font-bold text-xl text-prh2 font-montserrat capitalize">
                  Easy To Order
                </h5>
                <p className="font-montserrat font-normal text-base text-prh leading-6 pt-3">
                  In the new era of technology we look in the future with
                  certainty life.
                </p>
              </div>
            </div>
            {/* menu3 */}
            <div className="flex gap-x-4 max-w-[336px]">
              <div>
                <img src={img3} alt="" />
              </div>
              <div>
                <h5 className="font-bold text-xl text-prh2 font-montserrat capitalize">
                  Fast Delivery
                </h5>
                <p className="font-montserrat font-normal text-base text-prh leading-6 pt-3">
                  In the new era of technology we look in the future with
                  certainty life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
