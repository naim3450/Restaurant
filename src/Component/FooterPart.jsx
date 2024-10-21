import React from "react";
import Container from "./Container";
import List from "./List";
import MasCard from "../assets/Mastercard.png";
import Visa from "../assets/Visa.png";
import F_last from "../assets/footer_last.png";
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";

const FooterPart = () => {
  return (
    <section className="bg-[#191919] pb-10">
      <Container className={``}>
        <div className="ml-10 py-20">
          <IoRemoveOutline className="text-white mx-auto text-[30px] font-bold" />
        </div>
        <div className="flex justify-between">
          <div className="">
            <List text={`Our Products`} className={`text-[24px] text-white`} />
            <List
              text={`Our menus`}
              className={`font-light text-lg text-white`}
            />
            <List
              text={`Our burgers`}
              className={`font-light text-lg text-white`}
            />
            <List
              text={`Our times sides`}
              className={`font-light text-lg text-white`}
            />
            <List
              text={`Our naandwiches`}
              className={`font-light text-lg text-white`}
            />
          </div>
          {/* 2nd part */}
          <div className="">
            <List
              text={`legal information`}
              className={`text-[24px] text-white`}
            />
            <List
              text={`Legal Notice`}
              className={`font-light text-lg text-white`}
            />
          </div>
          {/* 3rd part */}
          <div className="">
            <List text={`Contact us`} className={`text-[24px] text-white`} />
            <List
              text={`Contacts`}
              className={`font-light text-lg text-white`}
            />
            <List
              text={`Our addresses`}
              className={`font-light text-lg text-white`}
            />
            <List
              text={`Become a Times Square franchisee`}
              className={`font-light text-lg text-white`}
            />
          </div>
          {/* 4th part */}
          <div className="">
            <List text={`We accept`} className={`text-[24px] text-white`} />
            <div className="flex mt-3">
              <img src={MasCard} alt="Mastercard.png" />
              <img src={Visa} alt="Visa.png" />
            </div>
            <img src={F_last} alt="footer_last.png" className="mt-5" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="border-t border-[#4F4F4F] flex justify-between mt-16">
          <div className="flex gap-2 mt-6">
            <div className="bg-white h-6 w-6 rounded-full flex items-center justify-center">
              <TiSocialFacebook className="text-black text-[22px]" />
            </div>
            <div className=" h-7 w-7 rounded-full flex items-center justify-center">
              <FaTwitter className="text-white " />
            </div>
            <div className=" h-7 w-7 rounded-full flex items-center justify-center">
              <FaInstagram className="text-white" />
            </div>
            <div className="bg-white h-6 w-6 rounded-md  flex items-center justify-center">
              <FaLinkedinIn className="text-black" />
            </div>
          </div>
          <div className="mt-6">
            <p className="text-base text-white font-montserrat font-light leading-5">
              © 2024 Nayef All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FooterPart;
