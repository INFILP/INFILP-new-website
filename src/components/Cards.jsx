"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Cards = ({
  logoSrc = "/images/woboLogo.png",
  logoAlt = "Wobo Logo",
  title = "Smart Golf League & Match Management",
  imageSrc = "/images/woboLogo.png",
  imageAlt = "Card Image",
  delay = 0,
  backgroundColor = "bg-teal-600",
  showBanner,
  slug,
}) => {
  const ref = useRef(null);
  const router = useRouter();
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const isComingSoon = slug === "Commin Soon";

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
    hover: { scale: 0.95, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const logoVariants = {
    hover: {
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hover: {
      y: -12,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };
  const comingSoonlogoVariants = {
    hover: {
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };
  const comingSoonImageVariants = {
    hover: {
      y: -12,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const handleClick = () => {
    if (slug && !isComingSoon) {
      router.push(`/portfolioDetail/${slug}`);
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`relative flex flex-col items-center text-center 
        rounded-4xl px-8 text-white md:max-w-[600px] 
        h-[490px] sm:h-[520px] md:h-[720px] mx-4 my-2 md:my-4 
        cursor-pointer overflow-hidden 
        ${isComingSoon ? "group" : ""}
        ${showBanner ? backgroundColor : "bg-gray-400"}
        ${isComingSoon ? "cursor-default" : "cursor-pointer"}
      `}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      onClick={handleClick}
    >
      {showBanner == "true" && (
        <div className="absolute top-6 -right-16 rotate-45 bg-red-600 text-white font-bold px-16 py-2 text-sm shadow-lg z-20">
          Coming Soon
        </div>
      )}

      <motion.div
        className="flex justify-center mt-8 mb-6 z-10"
        variants={!isComingSoon ? logoVariants : comingSoonlogoVariants}
      >
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-24 md:h-24">
          <Image
            src={logoSrc}
            alt={logoAlt}
            fill
            className="object-contain rounded-2xl"
            sizes="(max-width: 640px) 3rem, (max-width: 768px) 3.5rem, 4rem"
            priority
          />
        </div>
      </motion.div>

      {/* Title */}
      <motion.div className="flex justify-center mt-3 mb-6 sm:mb-8 z-10">
        <h2 className="text-2xl md:text-[32px] font-Manrope-bold leading-[130%] max-w-80 md:max-w-lg">
          {title}
        </h2>
      </motion.div>

      {/* Image */}
      <motion.div
        className="flex justify-center w-full z-10"
        variants={!isComingSoon ? imageVariants : comingSoonImageVariants}
      >
        <div className="relative w-full h-60 sm:h-72 md:h-[437px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={`object-contain ${
              isComingSoon ? "grayscale group-hover:grayscale-0" : ""
            } transition-all duration-300`}
            sizes="(max-width: 640px) 40vw, (max-width: 768px) 50vw, 53vw"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Cards;
