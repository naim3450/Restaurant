import React, { useContext } from 'react'
import Container from './Container'
import logo6 from "../assets/logo6.png"
import List from './List'
import { FaCartPlus } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import Context from '../Context/Context';


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
        }
    ]

    const { totalQuantity, CartDropDown } = useContext(Context)

    const cartBtn = () => {
        CartDropDown()
    }

    return (
        <div className='py-4 absolute z-50 bg-[#fff] top-11 left-0 w-full'>
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


                        <button onClick={() => cartBtn()} className='relative'>
                            <FaCartPlus className='text-[22px] text-blck' />

                            <p className='absolute -top-3 -right-4 w-[1.3vw] h-[1.3vw] text-white font-semibold bg-btn rounded-[100%]'>
                                {totalQuantity}
                            </p>
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navber