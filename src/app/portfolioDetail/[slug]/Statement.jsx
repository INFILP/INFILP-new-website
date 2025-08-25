"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Statement = ({
  title,
  points,
  imageSrc,
  imageAlt,
  reverse = false,
  className = "",
}) => {
  console.log(points, "these are points");

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const pointVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: reverse ? 50 : -50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const containerClass = `flex items-center gap-8 lg:gap-12 ${
    reverse ? "flex-row-reverse" : "flex-row"
  } ${className}`;

  return (
    <div className={`w-full max-w-[1240px] mx-auto py-8 ${containerClass}`}>
      {/* Text Content */}
      <motion.div
        className="flex flex-col space-y-6 bg-[#F8FAFB] py-4 pl-6 pr-2 rounded-4xl max-w-[599px] "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex items-center gap-3 justify-between"
          variants={textVariants}
        >
          <h2 className="text-2xl md:text-[40px] text-gray-900 font-Manrope-regular">
            {title.split(" ").map((word, index) => (
              <span
                key={index}
                className={index === 1 ? "font-Manrope-bold" : ""}
              >
                {word}
                {index < title.split(" ").length - 1 ? " " : ""}
              </span>
            ))}
          </h2>
          <div className="text-red-500">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="currentColor"
              className="w-8 h-8 lg:w-16 lg:h-16"
            >
              <path d="M13 3L4 14h6l-2 7 9-11h-6l2-7z" />
            </svg>
          </div>
        </motion.div>

        <motion.div className="space-y-4 ">
          {points.map((point, index) => (
            <motion.div
              key={point.id}
              className="flex items-start gap-3"
              variants={pointVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3"></div>
              <p className="text-gray-700 text-base leading-relaxed font-Manrope-medium md:text-2xl">
                {point}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1 max-w-md lg:max-w-2xl"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative w-full aspect-[4/3] rounded-4xl overflow-hidden shadow-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Statement;
