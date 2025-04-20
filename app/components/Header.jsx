import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image className="rounded-full w-32" src={assets.profile_image} alt="Profile Picture" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-semibold"
      >
        Hi! I am Challa Venkata Ramana{" "}
        <Image className="w-6" src={assets.hand_icon} alt="Waving Hand Icon" />
      </motion.h3>
      <motion.h1
        initial={{ y: -24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-3xl md:text-6xl lg:text-[66px] font-bold"
      >
        MERN Stack Developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto text-gray-600"
      >
        Passionate about building scalable web applications and integrating AI/ML models into modern web solutions.
      </motion.p>
      <div className="flex flex-col md:flex-row gap-4 items-center mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center bg-black gap-2 px-10 py-3 text-white border border-white rounded-full"
          href="#contact"
        >
          Contact Me{" "}
          <Image className="w-4" src={assets.right_arrow_white} alt="Right Arrow Icon" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center gap-2 px-10 py-3 border border-gray-300 rounded-full"
          href="Challa-Venkata-Ramana _Resume.pdf"
          download
        >
          My Resume <Image className="w-4" src={assets.download_icon} alt="Download Icon" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
