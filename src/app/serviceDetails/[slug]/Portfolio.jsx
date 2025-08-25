import Cards from "@/components/Cards";
import { motion, useInView } from "framer-motion";
import React from "react";

const Portfolio = () => {
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -30,
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
  return (
    <div className=" max-w-7xl mx-auto pt-28 px-4 md:pt-36 lg:pt-48">
      <motion.div className="text-center mb-16" variants={titleVariants}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-Manrope-regular text-gray-900 mb-4">
          Projects that <span className="font-Manrope-bold">speak</span> for
          themselves
        </h2>
        <div className="w-44 h-1 bg-red-500 mx-auto mt-6"></div>
      </motion.div>
      <div className="flex flex-col md:flex-row max-w-[1240px] mx-auto items-center justify-center">
        <Cards
          logoSrc="/images/golf.webp"
          logoAlt="Golf Logo"
          title="Smart Golf League & Match Management"
          imageSrc="/images/golflap.webp"
          imageAlt="Custom Image"
          backgroundColor="bg-gradient-golf"
          delay={0.2}
          onClick={() => console.log("Card clicked!")}
          showBanner="false"
          slug="the-green-felts"
        />
        <Cards
          logoSrc="/images/b2b.webp"
          logoAlt="B2B Logo"
          title="A Digital Solution To Streamline B2B & B2C Fashion Operations"
          imageSrc="/images/b2bMobile.webp"
          imageAlt="Custom Image"
          backgroundColor="bg-gradient-b2b"
          delay={0.2}
          onClick={() => console.log("Card clicked!")}
          showBanner="false"
          slug="dressplaner"
        />
      </div>
    </div>
  );
};

export default Portfolio;
