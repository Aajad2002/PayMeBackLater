import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";


function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [dropDownToggle, setDropDownToggle] = useState(false)

    const handleDropDown = () => {
        setDropDownToggle(!dropDownToggle)
    }
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    console.log(isMenuOpen)



    return (
        <div className="sticky top-0 z-[5]">
            <nav
                className="flex shadow-sm   bg-white  md:p-0 px-2 justify-between items-center w-full mx-auto h-[60px] 
            font-serif"
            >
                <div className="md:w-[15%] w-[50%] pl-10">
                    <img
                        className="cursor-pointer w-[180px] h-[40px]"
                        src={"https://tse1.mm.bing.net/th?id=OIP.eFntJMWiAigLvftXw6GfCwHaBz&pid=Api&P=0"}
                        alt=""
                    />
                </div>
                <div
                    className={`nav-links transition-all  duration-1000 md:static md:bg-transparent absolute text-black z-[5]   top-[99%] left-0 ${isMenuOpen ? "left-[0%]" : "left-[100%]"
                        } md:w-[86%] w-[100%] flex md:flex-row flex-col items-center px-5 md:justify-between text-center bg-white bg-opacity-20 backdrop-blur-lg p-2 font-black text-[20px]  md:text-[16px]  `}
                >
                    <ul className="w-[100%] md:w-[50%] py-3 md:py-0  h-auto md:h-0  flex justify-evenly md:flex-row flex-col  md:items-center md:gap-4 gap-4 md:m-auto">
                        <li  >
                            <div className="relative m-auto  w-full">
                                <a onClick={handleDropDown} className=" justify-center flex items-center hover:text-[#6161FF]" href="#">Products <FaAngleDown className="ml-1" /> </a>
                                <div className={` ${dropDownToggle ? "block static" : "hidden"}  md:absolute  h-46 rounded-lg top-full z-10 bg-[#E9EAFF] md:w-[200px] md:mt-3 md:p-4 `}>
                                    <ul>
                                        <li>
                                            <a href="#" className="hover:text-[#6161FF]">
                                                Debit Card
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-[#6161FF]">
                                                Credit Card
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-[#6161FF]">
                                                 Master Card
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li>
                            <a href="#" className="hover:text-[#6161FF]">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#6161FF]">How it works</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#6161FF]">Support</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#6161FF]">About us</a>
                        </li>
                    </ul>
                    <div className="w-full  h-full mt-4 md:mt-0 md:w-[30%] flex flex-col md:flex-row md:justify-between  md:gap-0 gap-4 ">
                        <button className="block m-auto text-sm md:text-xs font-semibold  h-9 rounded-lg w-[60%]  md:w-[30%] text-white bg-[#6161FF] ">Get Started</button>
                        <button className="block m-auto text-sm md:text-xs font-semibold   h-9 rounded-lg border-2 border-slate-500 w-[60%]  md:w-[30%]  ">Billers</button>
                        <button className="block m-auto text-sm md:text-xs font-semibold  h-9 rounded-lg border-2 border-slate-500 w-[60%]  md:w-[30%]  ">Login</button>
                    </div>
                </div>
                <div className="md:hidden flex items-center  gap-6">
                    <button
                        onClick={toggleMenu}
                        className="text-3xl mr-4 cursor-pointer md:hidden "
                    >
                        {isMenuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
                    </button>

                </div>
            </nav>
        </div>
    );
}

export default NavBar;