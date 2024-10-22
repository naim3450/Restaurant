import React from "react";
import TitleDes from "../../Common/TitleDes";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import customerImg1 from "../../assets/customer1.png";
import customerImg2 from "../../assets/customer2.png";
import customerImg3 from "../../assets/customer3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import searchVector from "../../assets/searchVector.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Review = () => {
  return (
    <div className="py-[100px] relative">
      <div className="absolute top-10 left-0 opacity-45">
        <img src={searchVector} alt="" className="w-[300px]" />
      </div>
      <div className="container">
        <div>
          <TitleDes
            mainTitle={"What Our Customers Say"}
            className={"max-w-full"}
            textCenter={true}
          />
        </div>
        {/* ALL CARD */}
        <div className="pt-10">
          <div className="w-full reviewslide">
            <Swiper
              pagination={true}
              spaceBetween={30}
              slidesPerView={3}
              modules={[Pagination]}
              className="mySwiper2"
            >
              <SwiperSlide>
                {" "}
                <div className="relative max-w-[500px] shadow-md rounded-tl-[40px] rounded-br-[40px] bg-white pb-10 pt-16 flex text-center flex-col items-center">
                  {/* customer img */}
                  <div className="absolute top-[-57px] z-50">
                    <img
                      src={customerImg1}
                      alt={"customerImg"}
                      className="w-[100px]"
                    />
                  </div>
                  {/* star */}
                  <div className="flex items-center gap-x-2 text-yellow-500 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfStroke />
                    <FaRegStar />
                  </div>
                  <p className="pt-8 pb-5 font-montserrat font-normal text-base text-prh max-w-[380px] leading-6">
                    Lorem ipsum dolor sit amet consectetur. Tortor massa nisl
                    quam sit. Vitae congue ultrices neque penatibus mi in
                    quisque. Leo in cursus enim magnis ante. Proin iaculis
                    platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt
                    tempus semper{" "}
                  </p>
                  {/* Name & designation */}
                  <div>
                    <h3 className="font-montserrat font-bold text-base text-prh2">
                      Ama Ampomah
                    </h3>
                    <h5 className="font-montserrat font-normal text-sm text-prh">
                      CEO & Founder Inc{" "}
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="relative max-w-[500px] shadow-md rounded-tl-[40px] rounded-br-[40px] bg-white pb-10 pt-16 flex text-center flex-col items-center">
                  {/* customer img */}
                  <div className="absolute top-[-57px]">
                    <img
                      src={customerImg2}
                      alt={"customerImg"}
                      className="w-[100px]"
                    />
                  </div>
                  {/* star */}
                  <div className="flex items-center gap-x-2 text-yellow-500 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="pt-8 pb-5 font-montserrat font-normal text-base text-prh max-w-[380px] leading-6">
                    Lorem ipsum dolor sit amet consectetur. Tortor massa nisl
                    quam sit. Vitae congue ultrices neque penatibus mi in
                    quisque. Leo in cursus enim magnis ante. Proin iaculis
                    platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt
                    tempus semper{" "}
                  </p>
                  {/* Name & designation */}
                  <div>
                    <h3 className="font-montserrat font-bold text-base text-prh2">
                      Ama Ampomah
                    </h3>
                    <h5 className="font-montserrat font-normal text-sm text-prh">
                      CEO & Founder Inc{" "}
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="relative max-w-[500px] shadow-md rounded-tl-[40px] rounded-br-[40px] bg-white pb-10 pt-16 flex text-center flex-col items-center">
                  {/* customer img */}
                  <div className="absolute top-[-57px]">
                    <img
                      src={customerImg3}
                      alt={"customerImg"}
                      className="w-[100px]"
                    />
                  </div>
                  {/* star */}
                  <div className="flex items-center gap-x-2 text-yellow-500 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="pt-8 pb-5 font-montserrat font-normal text-base text-prh max-w-[380px] leading-6">
                    Lorem ipsum dolor sit amet consectetur. Tortor massa nisl
                    quam sit. Vitae congue ultrices neque penatibus mi in
                    quisque. Leo in cursus enim magnis ante. Proin iaculis
                    platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt
                    tempus semper{" "}
                  </p>
                  {/* Name & designation */}
                  <div>
                    <h3 className="font-montserrat font-bold text-base text-prh2">
                      Ama Ampomah
                    </h3>
                    <h5 className="font-montserrat font-normal text-sm text-prh">
                      CEO & Founder Inc{" "}
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="relative max-w-[500px] shadow-md rounded-tl-[40px] rounded-br-[40px] bg-white pb-10 pt-16 flex text-center flex-col items-center">
                  {/* customer img */}
                  <div className="absolute top-[-57px]">
                    <img
                      src={customerImg1}
                      alt={"customerImg"}
                      className="w-[100px]"
                    />
                  </div>
                  {/* star */}
                  <div className="flex items-center gap-x-2 text-yellow-500 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="pt-8 pb-5 font-montserrat font-normal text-base text-prh max-w-[380px] leading-6">
                    Lorem ipsum dolor sit amet consectetur. Tortor massa nisl
                    quam sit. Vitae congue ultrices neque penatibus mi in
                    quisque. Leo in cursus enim magnis ante. Proin iaculis
                    platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt
                    tempus semper{" "}
                  </p>
                  {/* Name & designation */}
                  <div>
                    <h3 className="font-montserrat font-bold text-base text-prh2">
                      Ama Ampomah
                    </h3>
                    <h5 className="font-montserrat font-normal text-sm text-prh">
                      CEO & Founder Inc{" "}
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="relative max-w-[500px] shadow-md rounded-tl-[40px] rounded-br-[40px] bg-white pb-10 pt-16 flex text-center flex-col items-center">
                  {/* customer img */}
                  <div className="absolute top-[-57px]">
                    <img
                      src={customerImg3}
                      alt={"customerImg"}
                      className="w-[100px]"
                    />
                  </div>
                  {/* star */}
                  <div className="flex items-center gap-x-2 text-yellow-500 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="pt-8 pb-5 font-montserrat font-normal text-base text-prh max-w-[380px] leading-6">
                    Lorem ipsum dolor sit amet consectetur. Tortor massa nisl
                    quam sit. Vitae congue ultrices neque penatibus mi in
                    quisque. Leo in cursus enim magnis ante. Proin iaculis
                    platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt
                    tempus semper{" "}
                  </p>
                  {/* Name & designation */}
                  <div>
                    <h3 className="font-montserrat font-bold text-base text-prh2">
                      Ama Ampomah
                    </h3>
                    <h5 className="font-montserrat font-normal text-sm text-prh">
                      CEO & Founder Inc{" "}
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="relative max-w-[500px] shadow-md rounded-tl-[40px] rounded-br-[40px] bg-white pb-10 pt-16 flex text-center flex-col items-center">
                  {/* customer img */}
                  <div className="absolute top-[-57px]">
                    <img
                      src={customerImg2}
                      alt="customerImg"
                      className="w-[100px]"
                    />
                  </div>
                  {/* star */}
                  <div className="flex items-center gap-x-2 text-yellow-500 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="pt-8 pb-5 font-montserrat font-normal text-base text-prh max-w-[380px] leading-6">
                    Lorem ipsum dolor sit amet consectetur. Tortor massa nisl
                    quam sit. Vitae congue ultrices neque penatibus mi in
                    quisque. Leo in cursus enim magnis ante. Proin iaculis
                    platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt
                    tempus semper{" "}
                  </p>
                  {/* Name & designation */}
                  <div>
                    <h3 className="font-montserrat font-bold text-base text-prh2">
                      Ama Ampomah
                    </h3>
                    <h5 className="font-montserrat font-normal text-sm text-prh">
                      CEO & Founder Inc{" "}
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
