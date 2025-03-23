import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const MyServices = () => {
  return (
    <motion.div
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-semibold"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl font-medium"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 font-medium"
      >
        I’m Challa Venkata Ramana, a Full-Stack Developer skilled in MERN,
        Next.js, and backend technologies, specializing in scalable web apps,
        real-time systems, and API integrations.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  gap-6 my-10 "
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="flex flex-col items-center border border-gray-200 rounded-lg  
            gap-4 px-8 py-12  bg-white shadow-lg hover:-translate-1 duration-500 
            hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff]"
          >
            <Image className="w-10" src={icon} alt="" />
            <h3 className="my-4 text-lg font-semibold text-gray-700">
              {title}
            </h3>
            <p className="text-gray-700 text-sm leading-5">{description}</p>
            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-5  text-blue-500 hover:underline"
            >
              Learn More <Image src={assets.right_arrow} alt="" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MyServices;
