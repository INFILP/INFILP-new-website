"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SeeAllWorkComponent = ({
  mainText = "See all work",
  buttonText = "Let's Go",
  onClick,
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay,
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const layer1Variants = {
    hover: {
      x: 2,
      y: 2,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const layer2Variants = {
    hover: {
      x: -2,
      y: -2,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative max-w-[420px] mx-auto md:max-w-[1200px] px-5 md:px-6 xl:px-4 xl:mx-auto mt-2 md:mt-4   group"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
    >
      {/* Layer 2 - Top right layer (always visible) */}
      <motion.div
        className="absolute inset-0 bg-[#FEB3B1] rounded-tl-2xl rounded-br-2xl opacity-60 transform -translate-x-1 -translate-y-1 md:-translate-x-3 md:-translate-y-3 mx-5 md:mx-6 xl:mx-4"
        variants={layer1Variants}
      />

      {/* Layer 3 - Bottom left layer (always visible) */}
      <motion.div
        className="absolute inset-0 bg-[#FEB3B1] rounded-tl-2xl rounded-br-2xl opacity-80 transform translate-x-1 translate-y-1 md:translate-x-3 md:translate-y-3 mx-5 md:mx-6 xl:mx-4"
        variants={layer2Variants}
      />

      {/* Layer 1 - Front layer (main component) */}
      <motion.div
        className="relative bg-gradient-to-r bg-gradient-seeCard rounded-tl-2xl rounded-br-2xl px-4 py-6 md:px-12 md:py-8 flex items-center justify-between shadow-lg"
        variants={hoverVariants}
      >
        {/* Left side - Main text */}
        <div className="flex">
          <h2 className="text-white text-lg md:text-3xl lg:text-4xl font-Manrope-bold">
            {mainText}
          </h2>
        </div>

        {/* Right side - Button */}
        <motion.div className="flex" variants={buttonHoverVariants}>
          <button className="bg-white text-red-600 cursor-pointer w-[104px] h-[36px] md:w-[170px] md:h-[48px] text-center rounded-full font-Manrope-medium text-lg md:text-lg hover:shadow-lg transition-shadow duration-300">
            {buttonText}
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SeeAllWorkComponent;
