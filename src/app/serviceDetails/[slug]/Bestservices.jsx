"use client";

import { motion } from "framer-motion";

const WhatWeDoBest = ({
  title = "What We Do",
  highlightWord = "Best",
  services,
  className = "",
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

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

  const serviceVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className={`pt-16 px-4 md:pt-24 lg:pt-48 bg-white ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-[1190px] mx-auto">
        {/* Title Section */}
        <motion.div className="text-center mb-16" variants={titleVariants}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-Manrope-regular text-gray-900 mb-4">
            {title} <span className="font-Manrope-bold">{highlightWord}</span>
          </h2>
          <div className="w-40 h-0.5 bg-red-500 mx-auto"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-6 md:space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              className="flex items-start gap-4 md:gap-6"
              variants={serviceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Number Badge */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-Manrope-bold text-lg md:text-5xl">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg md:text-2xl lg:text-[42px] font-Manrope-regular text-[#200100]">
                  <span className="font-Manrope-bold">{service.title} </span>
                  <span className="font-Manrope-regular">
                    {service.subheading}
                  </span>
                </h3>
                <p className="text-lg md:text-xl font-Manrope-regular text-tertiary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhatWeDoBest;
