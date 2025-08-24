"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const WQBOHeroSection = ({
  // title,
  // highlightedWord,
  heading,
  logo,
  image,

  backgroundColor,
  // underlineColor,
  textColor,
  // titleColor,
  slug,

  animationDelay = 0,
  hoverElevation = 5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: animationDelay,
        staggerChildren: 0.2,
      },
    },
  };

  const backgroundHoverVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const contentHoverVariants = {
    initial: { y: 0 },
    hover: {
      y: -hoverElevation,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageHoverVariants = {
    initial: { y: 0, scale: 1 },
    hover: {
      y: -hoverElevation * 2,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const handleClick = () => {
    if (slug) {
      router.push(`/portfolioDetail/${slug}`);
    }
  };

  return (
    <div className="w-full">
      {/* Title Section */}

      <div className="flex items-center justify-center p-4 max-w-[1240px] h-full mx-auto">
        <motion.div
          ref={ref}
          className={`relative w-full max-w-[390px] md:max-w-[800px] lg:max-w-[1180px] cursor-pointer group h-[490px] sm:h-[520px] md:h-[500px] lg:h-full`}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover="hover"
          onClick={handleClick}
        >
          <motion.div
            className={`absolute inset-0 ${backgroundColor} rounded-3xl overflow-hidden`}
            variants={backgroundHoverVariants}
          />

          <div className="relative z-10 px-4 py-10 md:px-0 md:py-4 h-full flex items-center justify-center">
            <div className="flex flex-col lg:hidden gap-3 items-center text-center h-full justify-between w-auto">
              <motion.div
                className="flex justify-center"
                variants={contentHoverVariants}
              >
                <Image
                  src={logo.src}
                  width={logo.mobileWidth}
                  height={logo.mobileHeight}
                  className="object-contain rounded-2xl"
                  alt={logo.alt}
                />
              </motion.div>

              <motion.div
                className="flex flex-col my-4"
                variants={contentHoverVariants}
              >
                <h2
                  className={`text-2xl font-Manrope-bold leading-tight ${textColor}`}
                >
                  {heading.map((line, index) => (
                    <div key={index} className={index > 0 ? "mt-2" : ""}>
                      {line}
                    </div>
                  ))}
                </h2>
              </motion.div>

              <motion.div
                className="w-full flex-1 flex items-center"
                variants={imageHoverVariants}
              >
                <Image
                  src={image.src}
                  width={500}
                  height={500}
                  className={`object-contain w-[281px] max-h-[200px] sm:w-[350px] sm:max-h-[270px] rounded-2xl`}
                  alt={image.alt}
                />
              </motion.div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex gap-16 items-center h-full w-full">
              <motion.div
                className={`${textColor} space-y-8 flex-1 px-10 py-8 h-full flex flex-col justify-center`}
                variants={containerVariants}
              >
                <motion.div
                  className="flex items-center space-x-4 mb-24"
                  variants={contentHoverVariants}
                >
                  <Image
                    src={logo.src}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain rounded-2xl"
                    alt={logo.alt}
                  />
                </motion.div>

                <motion.h2
                  className={`text-[42px] font-Manrope-bold leading-tight mt-24 ${textColor}`}
                  variants={contentHoverVariants}
                >
                  {heading.map((line, index) => (
                    <div key={index} className={index > 0 ? "mt-2" : ""}>
                      {line}
                    </div>
                  ))}
                </motion.h2>
              </motion.div>

              <motion.div
                className="flex-1 h-full flex items-center"
                variants={imageHoverVariants}
              >
                <Image
                  src={image.src}
                  width={1000}
                  height={1000}
                  className={`object-contain w-full max-w-lg h-auto max-h-[${image.desktopMaxHeight}px] rounded-2xl`}
                  alt={image.alt}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WQBOHeroSection;
