import React from 'react'
import dish from '../assets/dish.png'
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const SpecialCard = () => {
    return (
        <div className='w-[310px] h-[430px] bg-transparent rounded-md relative hover:-translate-y-3 duration-150 ease-linear hover:scale-[1.05] group'>
            <img src={dish} alt=""
                className='w-full h-[220px] object-contain scale-[0.9] ease-linear duration-150 absolute top-0 z-30 group-hover:scale-[1] group-hover:-rotate-6' />

            <div
                className="group-hover:bg-[#c31c1edb] border-[2px] shadow-2xl ease-linear duration-150 w-[270px] h-[310px] absolute bottom-[10px] 
                rounded-tl-[40px] rounded-tr-[5px] rounded-br-[40px] rounded-bl-[5px] ml-[20px] px-[20px]">
                <h3 className=' text-prh2 font-bold text-[24px] pt-[110px] group-hover:text-[#ffffffd6] ease-linear duration-150'>
                    Lumpia with Suace
                </h3>
                <p className='font-sans font-normaltext-[18px] pt-[5px] pb-[15px] group-hover:text-[#ffffffd6] ease-linear duration-150'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <div className="flex items- justify-between text-prh2 group-hover:text-[#ffffffd6]">
                    <h3 className='font-bold font-matter text-[24px]'>$15.8</h3>

                    <div className="flex items-center gap-3 pr-5 text-[24px]">
                        <button className=''>
                            <CiHeart className='text-2xl' />
                        </button>

                        <button className='flex items-center gap-1 font-serif text-sm text-white group-hover:text-prh2 bg-btn group-hover:bg-white  py-2 px-3 rounded-md'>
                            Add <FaCartPlus className='' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialCard