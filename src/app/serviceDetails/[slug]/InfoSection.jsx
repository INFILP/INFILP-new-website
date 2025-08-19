"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const InfoSection = ({
  title,
  highlightWord,
  subtitle,
  description,
  subdescription,
  buttonText,
  buttonHref = "#",
  imageSrc,
  imageAlt,
  layout = "left",
  className = "",
  onButtonClick,
}) => {
  const isImageLeft = layout === "left";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: isImageLeft ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <motion.section
      className={`pt-28 px-4 md:pt-36 lg:pt-48 bg-white ${className} max-w-[1200px] mx-auto`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 items-center ${
            isImageLeft ? "" : "lg:grid-flow-col-dense"
          }`}
        >
          {/* Image Section */}
          <motion.div
            className={`${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
            variants={imageVariants}
          >
            <div className="relative">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={345}
                height={494}
                className={`object-contain w-full h-auto max-w-xs md:max-w-sm ${
                  isImageLeft
                    ? "mx-auto lg:ml-0 lg:mr-auto"
                    : "mx-auto lg:mr-0 lg:ml-auto"
                }`}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className={`${isImageLeft ? "lg:order-2" : "lg:order-1"} max-w-2xl`}
            variants={textVariants}
          >
            <div className="space-y-6">
              {/* Title */}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl md:text-4xl lg:text-[56px] font-Manrope-regular text-[#200100] leading-tight">
                  {title}{" "}
                  <span className="font-Manrope-bold text-[#200100]">
                    {highlightWord}
                  </span>
                </h2>
                <div className="w-44 h-1 bg-red-500 mt-4 mx-auto lg:mx-0"></div>
              </div>

              {/* Subtitle */}
              {subtitle && (
                <p className="text-base md:text-[22px] font-Manrope-medium text-tertiary leading-relaxed text-center lg:text-left">
                  {subtitle}
                </p>
              )}
              {subdescription && (
                <p className="text-base md:text-[22px] font-Manrope-medium text-tertiary leading-relaxed text-center lg:text-left">
                  {subdescription}
                </p>
              )}

              {/* Description */}
              <p className="text-base md:text-[22px] font-Manrope-medium text-tertiary leading-relaxed text-center lg:text-left">
                {description}
              </p>

              {/* Button */}
              {buttonText && (
                <motion.div
                  variants={buttonVariants}
                  className="flex justify-center lg:justify-start"
                >
                  <motion.button
                    onClick={onButtonClick}
                    className="inline-flex items-center px-6 py-3 bg-[#171717] cursor-pointer text-white font-Manrope-medium text-sm rounded-full hover:bg-gray-700 transition-colors duration-200"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {buttonText}
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default InfoSection;
