import React, { useContext, useState } from "react";
import Burger from "../assets/burger.jpg";
import Container from "./Container";
import Button from "./Button";
import { FaStar } from "react-icons/fa";
import Context from "../Context/Context";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";


const ProductDetails = () => {

    const { checkOut, addToCartPage } = useContext(Context)

    let [quantity, setquantity] = useState(checkOut.quantity)

    let [Variation, setVariation] = useState(checkOut.Variation)

    const [activImg, setactivImg] = useState(checkOut.image)

    return (
        <section className="py-20 mt-[6vw]">
            <Container>
                <div className="grid grid-cols-2 gap-10">
                    <div className="">
                        <img src={activImg} alt="" className="rounded-lg w-full h-[350px] object-cover" />
                        <div className="flex justify-around mt-5">

                            {
                                checkOut.thums.map((el, idx) => {
                                    return (
                                        <div key={idx} className="relative h-[100px] w-[150px]">
                                            <img onClick={() => setactivImg(el)} src={el} alt=""
                                                className="rounded-lg w-[100%] h-[100%] object-cover" />
                                            {
                                                activImg == el ?
                                                    <div className="absolute w-[100%] h-[100%] bg-[#fdfdfd6e] flex items-center justify-center top-0 left-0">
                                                        <FaCheckCircle className="text-btn text-3xl" />
                                                    </div>
                                                    : false
                                            }
                                        </div>
                                    )
                                })
                            }
                            {/* <img onClick={() => setactivImg(Burger)} src={Burger} alt="" className="rounded-lg h-[100px] w-[150px]" />
                            <img onClick={() => setactivImg(Burger)} src={Burger} alt="" className="rounded-lg h-[100px] w-[150px]" />
                            <img onClick={() => setactivImg(Burger)} src={Burger} alt="" className="rounded-lg h-[100px] w-[150px]" /> */}

                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-[55px] text-prh2 font-serif leading-[60px] font-medium  w-[650px]">
                            The secret tips & tricks to prepare a perfect burger
                        </h3>
                        <div className="flex items-center gap-x-2 text-yellow-500 text-xl mt-5">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className="text-base text-prh2 font-montserrat font-normal pt-5 w-[600px]">
                            {checkOut.name}
                        </p>
                        <p className="text-[18px] text-prh2  font-montserrat font-medium pt-3 w-[600px]">
                            {checkOut.description}
                        </p>


                        <div className="flex justify-between mt-2">
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2 font-sans font-bold" htmlFor="variation">
                                    Choose Size:
                                </label>
                                <select
                                    id="variation"
                                    value={Variation}
                                    onChange={(e) => setVariation(e.target.value)}
                                    className="w-[300px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-btn"
                                >
                                    <option>Small</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                </select>
                            </div>

                            <div className="flex items-center mt-4">
                                <button
                                    onClick={() => setquantity(quantity <= 1 ? 1 : quantity - 1)}
                                    className="text-xl flex items-center justify-center bg-btn hover:text-black font-bold px-4 h-[40px] rounded-l-lg hover:bg-gray-300 text-white"
                                >
                                    <FaMinus />
                                </button>

                                <span className="px-4 h-[40px] border font-semibold text-xl border-red-500 flex items-center justify-center">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setquantity(quantity + 1)}
                                    className="text-xl flex items-center justify-center bg-btn hover:text-black hover:font-bold px-4 h-[40px] rounded-r-lg hover:bg-gray-300 text-white"
                                >
                                    <FaPlus />
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-between mt-[2vw]">
                            {/* price  */}

                            <h3 className="text-[18px] text-prh2  font-montserrat font-medium w-[600px] pt-3">
                                <span className="font-bold font-serif mr-4 text-xl">
                                    Price:
                                </span>
                                ${(quantity * checkOut.price).toFixed(2)}
                            </h3>

                            <Link to={'/AddToCart'}>
                                <Button
                                    onClick={() => addToCartPage(checkOut.id, checkOut.quantity, Variation)}
                                    text={"Add to Card"}
                                    className={`bg-[#C31C1E] border-btn text-white  hover:text-[#C31C1E] hover:bg-white duration-500 border-2 !py-3 w-[160px]`}
                                />
                            </Link>

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ProductDetails;