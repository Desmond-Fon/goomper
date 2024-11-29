import logo from "../assets/logo.svg";
import x from "../assets/x.png";
import tg from "../assets/tg.png";
import { NavHashLink } from "react-router-hash-link";
import { useState } from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log("clicked toggle menu");
    };
    return (
        <>
            <div className="bg-overlay text-black font-short bg-white hidden lg:flex justify-between w-[80%] items-center py-2 px-[50px] rounded-[10px] border-secondary border-b-[8px] border-[2px]">
                <div className="flex justify-center items-center gap-2"><img src={logo} className="w-[40px] h-[40px]" alt="" /> <h1 className="font-sigmar">BLOOB</h1></div>
                <div className="flex justify-center items-center gap-[44px]">
                    <NavHashLink
                        smooth
                        to="/#home"
                        className="text-[16px] hidden lg:block"
                    >
                        Home
                    </NavHashLink>{" "}
                    <NavHashLink
                        smooth
                        to="/#about"
                        className="text-[16px] hidden lg:block"
                    >
                        About
                    </NavHashLink>{" "}
                    <NavHashLink
                        smooth
                        to="/#howToBuy"
                        className="text-[16px] hidden lg:block"
                    >
                        How to buy
                    </NavHashLink>{" "}
                    <NavHashLink
                        smooth
                        to="/#tokenomics"
                        className="text-[16px] hidden lg:block"
                    >
                        Tokenomics
                    </NavHashLink>{" "}
                </div>
                <div className="lg:flex gap-4 justify-center items-center hidden">
                   <img src={x} alt="" className="w-[33px] h-[35px]" /><img src={tg} alt="" className="w-[33px] h-[35px]" />
                </div>
            </div>

            <div className="lg:hidden w-[80%] bg-white flex justify-between items-center px-[20px] py-1 rounded-[10px] border-secondary border-b-[8px] border-[2px] z-50 bg-overlay text-white venus pt-[12px] large:pt-[16px]">
                <img src={logo} alt="logo" className="w-[40px] h-[40px]" />

                <div></div>
                <div
                    className={` hamburger-menu z-50 pr-3 ${isOpen ? "open" : ""} ${isOpen ? "flex-row-reverse rounded-r-[20px]" : ""
                        }`}
                    onClick={toggleMenu}
                >
                    <div
                        className={`line ${!isOpen ? `bg-black mb-3` : `bg-black`}`}
                    ></div>
                    <div className={`line bg-black hidden`}></div>
                    <div className={`line ${!isOpen ? `bg-black` : `bg-black`}`}></div>
                </div>
            </div>
            <div
                className={`${isOpen
                        ? "fixed bg-secondary top-0 right-0 left-0 w-[100%] flex-col transition-all duration-300 ease-in-out px-[24px] flex justify-between gap-[25px] h-[50vh]  text-white lg:hidden z-[9999]"
                        : "fixed venus right-[-600%] transition-all duration-300 ease-in-out"
                    } `}
            >
                <div className="absolute top-[30px] right-[22px]">
                    <div
                        onClick={toggleMenu}
                        className={` hamburger-menu z-50 pr-3 ${isOpen ? "open" : ""} ${isOpen ? "flex-row-reverse rounded-r-[20px]" : ""
                            }`}
                    >
                        <div
                            className={`line ${!isOpen ? `bg-white mb-3` : `bg-white`}`}
                        ></div>
                        <div className={`line bg-white hidden`}></div>
                        <div className={`line ${!isOpen ? `bg-white` : `bg-white`}`}></div>
                    </div>
                </div>
                <div className="flex justify-center items-center h-full">
                    <div className="text-center flex flex-col justify-center items-center h-full gap-[10px] text-[40px] font-[600]">
                        <NavHashLink
                            smooth
                            onClick={toggleMenu}
                            to="/#home"
                            className="text-[20px]"
                        >
                            Home
                        </NavHashLink>{" "}
                        <NavHashLink
                            smooth
                            onClick={toggleMenu}
                            to="/#about"
                            className="text-[20px]"
                        >
                            About
                        </NavHashLink>{" "}
                        <NavHashLink
                            smooth
                            onClick={toggleMenu}
                            to="/#howToBuy"
                            className="text-[20px]"
                        >
                            How to buy
                        </NavHashLink>{" "}
                        <NavHashLink
                            smooth
                            onClick={toggleMenu}
                            to="/#tokenomics"
                            className="text-[20px] venus"
                        >
                            Tokenomics
                        </NavHashLink>{" "}
                        <div className=" flex gap-4 justify-center items-center">
                            <img src={x} alt="" className="w-[33px] h-[35px]" /><img src={tg} alt="" className="w-[33px] h-[35px]" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
