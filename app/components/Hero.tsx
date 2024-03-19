"use client";
import React from "react";
import selfie from "@/public/images/selfie.png"; // Update the image import
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="about-me-section" className="container mx-auto px-12 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-yellow-500">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {`Hello I'm `}
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Jie",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a front end developer",
                1000,
                "廖永杰",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6">
            A developer based in China (UTC+08:00), with a strong passion for
            creating user-friendly and accessible websites and web applications.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
            magni! Ex quisquam libero at quasi, laboriosam aut id ipsum rerum,
            obcaecati dignissimos fugiat! Cumque accusantium modi placeat
            aliquid maiores. Blanditiis.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 hover:bg-slate-200 text-white w-full sm:w-fit bg-gradient-to-br from-primary-500 to-secondary-500">
              Contact Me
            </button>
            <button className="px-1 py-1 rounded-full  hover:bg-slate-200  mt-3 w-full sm:w-fit bg-gradient-to-br  from-primary-500 to-secondary-500 ">
              <span className="block text-[#1D3E56] bg-[#F1FAFD] hover:bg-slate:800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-white w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={selfie}
              alt="My selfie image"
              width={300}
              height={300}
              className="absolute inset-0 rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
