import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-semibold"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl font-medium"
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 text-gray-600 mb-12 font-medium"
      >
        Some of my latest projects showcasing my expertise in the MERN stack and ML-driven solutions.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  gap-6 my-10 "
      >
        {workData.map((project, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="aspect-square flex flex-col py-12 bg-cover bg-no-repeat bg-center rounded-lg relative cursor-pointer group"
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-betwen duration-500 group-hover:bottom-7 gap-3">
              <div className="">
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <a
                target="_blank"
                href={project.src}
                className="border border-black aspect-square rounded-full flex items-center justify-center shadow-[2px_2px_0_#000] w-20 group-hover:bg-lime-200 transition dration-300 "
              >
                <Image src={assets.send_icon} alt="" className="w-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-20 hover:bg-[#fcf4ff] duration-500"
        href=""
      >
        Show more <Image src={assets.right_arrow_bold} alt="" className="w-4" />
      </motion.a>
    </motion.div>
  );
};

export default Work;
