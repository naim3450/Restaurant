import React from "react";
import TitleDes from "../Common/TitleDes";
import check from "../assets/check.png";
import { IoIosCheckmark } from "react-icons/io";
import chef from "../assets/chef1.png";
import onion from "../assets/onion.png";

const Chef = () => {
  return (
    <div className="bg-[#F3F4F4] py-[100px] relative">
      <div
        className="absolute top-16
       left-0"
      >
        <img src={onion} alt="" className="w-[310]" />
      </div>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* left */}
          <div className="max-w-[520px]">
            <TitleDes
              mainTitle={"Our Expects Chef"}
              p2={true}
              des2={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            />
            <div className="flex gap-y-8 gap-x-3 flex-wrap pt-10">
              <div className="flex gap-x-2 max-w-[254px]">
                <div className="bg-[#EA6D27] w-[22px] h-[20px] rounded-full flex items-center justify-center text-white text-xl">
                  <IoIosCheckmark />
                </div>

                <h5 className="font-montserrat font-normal text-sm text-prh">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </h5>
              </div>
              <div className="flex gap-x-2 max-w-[254px]">
                <div className="bg-[#EA6D27] w-[22px] h-[20px] rounded-full flex items-center justify-center text-white text-xl">
                  <IoIosCheckmark />
                </div>

                <h5 className="font-montserrat font-normal text-sm text-prh">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </h5>
              </div>
              <div className="flex gap-x-2 max-w-[254px]">
                <div className="bg-[#EA6D27] w-[22px] h-[20px] rounded-full flex items-center justify-center text-white text-xl">
                  <IoIosCheckmark />
                </div>

                <h5 className="font-montserrat font-normal text-sm text-prh">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </h5>
              </div>
              <div className="flex gap-x-2 max-w-[254px]">
                <div className="bg-[#EA6D27] w-[22px] h-[20px] rounded-full flex items-center justify-center text-white text-xl">
                  <IoIosCheckmark />
                </div>

                <h5 className="font-montserrat font-normal text-sm text-prh">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </h5>
              </div>
              <div className="flex gap-x-2 max-w-[254px]">
                <div className="bg-[#EA6D27] w-[22px] h-[20px] rounded-full flex items-center justify-center text-white text-xl">
                  <IoIosCheckmark />
                </div>

                <h5 className="font-montserrat font-normal text-sm text-prh">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </h5>
              </div>
              <div className="flex gap-x-2 max-w-[254px]">
                <div className="bg-[#EA6D27] w-[22px] h-[20px] rounded-full flex items-center justify-center text-white text-xl">
                  <IoIosCheckmark />
                </div>

                <h5 className="font-montserrat font-normal text-sm text-prh">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </h5>
              </div>
            </div>
            {/* button */}
            <div className="pt-10 flex items-center gap-x-6">
              <button
                className={
                  "py-3 rounded-tl-xl rounded-bl-xl  px-8 text-xl font-medium text-white bg-btn font-serif hover:bg-[#8f2c35]"
                }
              >
                Book a table{" "}
              </button>
              <button
                className={
                  "py-3 rounded-tr-xl rounded-br-xl px-8 text-xl font-medium text-white bg-yellow-500 font-serif hover:bg-yellow-600"
                }
              >
                Menu
              </button>
            </div>
          </div>
          {/* right */}
          <div>
            <img src={chef} alt="" className="w-[560px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
