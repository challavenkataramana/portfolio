import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h3 className="font-bold  mx-auto ">Challa Venkata Ramana</h3>
        <div className="w-max flex items-center mx-auto gap-2 ">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          challavenkataramana321@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-10 py-6">
        <p>@2025 Challa Venkata Ramana.All rights reseerved.</p>
        <ul className="flex items-center justify-center gap-6 mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/challa-venkata-ramana-7a2094280/">
              <Image className="w-8" src={assets.linkdin} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/challavenkataramana">
              <Image className="w-8" src={assets.github} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://leetcode.com/u/Challa_Venkata_ramana/">
              <Image className="w-8" src={assets.leetcode} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
