"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AppHero = ({ subtitle, title, className = "" }) => {
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

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: -50,
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

  const backgroundVariants = {
    hidden: {
      opacity: 0,
      clipPath: "inset(0 50% 0 50%)",
    },
    visible: {
      opacity: 1,
      clipPath: "inset(0 0% 0 0%)",
      transition: {
        duration: 2,
        ease: "easeInOut",
        opacity: {
          duration: 0.3,
        },
        clipPath: {
          duration: 1.8,
          delay: 0.2,
        },
      },
    },
  };

  return (
    <div>
      <motion.section
        className={`relative min-h-[400px] flex items-center justify-center overflow-hidden ${className} mt-28`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background Element */}
        <motion.div
          className="absolute inset-0 z-0"
          variants={backgroundVariants}
        >
          <Image
            src={"/images/background-pattern.png"}
            alt="bg pattern"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.p
            className="text-xl md:text-[38px] text-[#200100] font-Gilroy-regular mb-4"
            variants={headingVariants}
          >
            {subtitle}
          </motion.p>

          <motion.h2
            className="text-[34px] md:text-[64px] font-Gilroy-bold text-[#200100] leading-tight"
            variants={headingVariants}
          >
            <span className="">{title}</span>
          </motion.h2>
        </div>
      </motion.section>
    </div>
  );
};

export default AppHero;
