"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Statement = ({
  title,
  points,
  imageSrc,
  imageAlt,
  icon,
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

  const containerClass = `flex flex-col-reverse items-center gap-8 lg:gap-12 ${
    reverse ? "xl:flex-row-reverse" : "xl:flex-row"
  }`;

  return (
    <div
      className={`w-full max-w-[1240px] mx-auto py-4 sm:py-6 lg:py-8 ${containerClass} overflow-hidden`}
    >
      <div
        className={` gap-4 sm:gap-6 lg:gap-8 mx-4 sm:mx-6 lg:mx-0 ${containerClass}`}
      >
        {/* Text Content */}
        <motion.div
          className="flex flex-col space-y-4 sm:space-y-6 bg-[#F8FAFB] p-4 sm:p-6 rounded-2xl sm:rounded-3xl lg:rounded-4xl w-full lg:w-1/2 min-h-auto  shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="flex items-start sm:items-center gap-3 justify-between"
            variants={textVariants}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-[40px] text-gray-900 font-Manrope-regular flex-1">
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
            <div className="flex-shrink-0">
              <Image
                src={icon}
                alt={imageAlt}
                width={60}
                height={60}
                className="object-contain sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px]"
              />
            </div>
          </motion.div>

          <motion.div className="space-y-3 sm:space-y-4 flex-1">
            {points.map((point, index) => (
              <motion.div
                key={point.id}
                className="flex items-start gap-2 sm:gap-3"
                variants={pointVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src="/images/tar.png"
                  alt={imageAlt}
                  width={16}
                  height={16}
                  className="object-contain mt-1 sm:mt-2 sm:w-[20px] sm:h-[20px] flex-shrink-0"
                />
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg xl:text-2xl leading-relaxed font-Manrope-medium">
                  {point}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="w-full lg:w-1/2 flex items-center "
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative w-full min-h-[330px] sm:min-h-[450px] lg:min-h-[503px] rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain sm:object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Statement;
