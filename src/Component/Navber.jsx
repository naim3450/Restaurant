import React from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
import logo3 from "../assets/logo3.png"
import logo6 from "../assets/logo6.png"
import List from './List'
import { FaCartPlus } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CiHeart } from "react-icons/ci";


const Navber = () => {

    const list = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About",
            path: "/",
        },
        {
            name: "Menu",
            path: "/menu",
        },
        {
            name: "Pages",
            path: "/",
        },
        {
            name: "Contact",
            path: "/",
        }
    ]

    return (
        <div className='py-4'>
            <Container className={"flex items-center justify-between"}>
                <img src={logo6} alt="" className='w-[100px] h-[80px]' />

                <div className="flex items-center">

                    <ul className='flex gap-[8px] mr-[100px]'>
                        {
                            list.map((el, idx) => {
                                return (
                                    <List to={el.path} key={idx} text={el.name} />
                                )
                            })
                        }
                    </ul>

                    <div className="flex gap-4">
                        <button className=''>
                            <IoIosNotifications className='text-2xl' />
                        </button>

                        <button className=''>
                            <CiHeart className='text-2xl' />
                        </button>

                        <button className=''>
                            <FaCartPlus className='text-[22px] text-blck' />
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navber