import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translate(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translate(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[80%] ">
        <Image src={assets.header_bg_color} className="w-full" alt="" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="#top" className="flex flex-row items-center justify-center gap-2">
          <Image className="w-8" src={assets.portfolio_icon} alt="" />
          <p className="text-xl mt-1 text-gray-700 font-semibold">Challa Venkata Ramana</p>
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white bg-opacity-50 shadow-sm"
          }`}
        >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            className="hidden lg:flex items-center gap-3 hover:bg-green-300 transition duration-300 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
            href="#contact"
          >
            Contact <Image className="w-3" src={assets.arrow_icon} alt="" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image className="w-6" src={assets.menu_black} alt="" />
          </button>
        </div>

        {/* .....Mobile Menu..... */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 px-10 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 "
        >
          <div className="absolute right-6 top-6">
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
              onClick={closeMenu}
            />
          </div>
          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
