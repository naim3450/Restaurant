import React, { useState } from "react";
import Container from "./Container";
import logo from "../assets/logo.png";
import logo3 from "../assets/logo3.png";
import logo6 from "../assets/logo6.png";
import List from "./List";
import { FaCartPlus } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

import { Link } from "react-router-dom";

const Navber = () => {
  const list = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Menu",
      path: "/menu",
    },
    {
      name: "Pages",
      path: "/Pages",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="py-4 absolute z-50 bg-[#fff] top-11 left-0 w-full">
      <Container className={"flex items-center justify-between"}>
        <img src={logo6} alt="" className="w-[100px] h-[80px]" />

        <div className="flex items-center">
          <ul className="flex gap-[8px] mr-[100px]">
            {list.map((el, idx) => {
              return <List to={el.path} key={idx} text={el.name} />;
            })}
          </ul>

          <div className="flex gap-4">
            <button className="">
              <IoIosNotifications className="text-2xl" />
            </button>

            <Link to={"/wishlist"}>
              <CiHeart className="text-2xl" />
            </Link>

            <Link to={"/AddToCart"}>
              <button className="">
                <FaCartPlus className="text-[22px] text-blck" />
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navber;
