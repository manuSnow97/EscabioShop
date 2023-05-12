import React, { useState } from "react";
import {
    AiOutlineMenu,
    AiOutlineHome,
    AiOutlineMail
} from 'react-icons/ai';
import {
    CiBeerMugFull,
    CiGift
} from "react-icons/ci";



const Sidenav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden text-yellow-200" />
            {
                nav ? (
                    <div className="fixed w-full h-screen bg-white/10 flex flex-col justify-center items-center z-20">
                        <a onClick={handleNav} href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-[#F721CB] shadow-black-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiOutlineHome size={20} />
                            <span className="pl-4">Home</span>
                        </a>
                        <a onClick={handleNav} href="#combo" className="w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-[#F721CB] shadow-black-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <CiGift size={20} />
                            <span className="pl-4">Combos</span>
                        </a>
                        <a onClick={handleNav} href="#bebida" className="w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-[#F721CB] shadow-black-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <CiBeerMugFull size={20} />
                            <span className="pl-4">Bebidas</span>
                        </a>
                        <a onClick={handleNav} href="#contact" className="w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-[#F721CB] shadow-black-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiOutlineMail size={20} />
                            <span className="pl-4">Contacto</span>
                        </a>
                    </div>
                )
                    : (
                        ''
                    )}
            <div className="md:block hidden fixed top-[1%] w-[100%] z-10">
                <div className="flex flex-row justify-around">
                    <a href="#main" className="rounded-full bg-[#F721CB] text-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineHome size={20} />
                    </a>
                    <a href="#combo" className="rounded-full bg-[#F721CB] text-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <CiGift size={20} />
                    </a>
                    <a href="#bebida" className="rounded-full bg-[#F721CB] text-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <CiBeerMugFull size={20} />
                    </a>
                    <a href="#contact" className="rounded-full bg-[#F721CB] text-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail size={20} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidenav;