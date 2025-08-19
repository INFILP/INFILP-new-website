// "use client";

// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import Image from "next/image";

// const ApproachCard = ({ card, index }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, {
//     threshold: 0.2,
//     once: true,
//     margin: "0px 0px -50px 0px",
//   });

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         delay: index * 0.15,
//         ease: "easeOut",
//       },
//     },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         delay: index * 0.15 + 0.3,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       variants={cardVariants}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       whileHover={{
//         y: -8,
//         scale: 1.02,
//         transition: { duration: 0.3, ease: "easeOut" },
//       }}
//       className={`rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden group cursor-pointer ${card.bgColor}`}
//     >
//       {/* Text Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//         transition={{
//           duration: 0.6,
//           delay: index * 0.15 + 0.2,
//           ease: "easeOut",
//         }}
//         className="mb-6"
//       >
//         <h3 className="text-xl md:text-2xl font-Manrope-bold text-white mb-2 leading-tight">
//           {card.title}
//         </h3>
//         <p className="text-lg font-Manrope-medium text-white/90">
//           {card.subtitle}
//         </p>
//       </motion.div>

//       {/* Image Container */}
//       <motion.div
//         variants={imageVariants}
//         className="relative h-48 md:h-56 rounded-xl overflow-hidden"
//       >
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.4 }}
//           className="relative w-full h-full"
//         >
//           <Image
//             src={card.image}
//             alt={card.title}
//             fill
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//             className="object-cover transition-transform duration-500 group-hover:scale-110"
//           />

//           {/* Subtle overlay for better text readability */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileHover={{ opacity: 0.1 }}
//             transition={{ duration: 0.3 }}
//             className="absolute inset-0 bg-black"
//           />
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// const OurApproach = () => {
//   const headerRef = useRef(null);
//   const textRef = useRef(null);

//   const isHeaderInView = useInView(headerRef, {
//     threshold: 0.3,
//     once: true,
//   });

//   const isTextInView = useInView(textRef, {
//     threshold: 0.2,
//     once: true,
//   });

//   const headerVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   const underlineVariants = {
//     hidden: { width: 0 },
//     visible: {
//       width: "7rem",
//       transition: {
//         duration: 0.8,
//         delay: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const approachCards = [
//     {
//       title: "No Hype",
//       subtitle: "Just Honest Code",
//       image: "/images/hype.webp", // Replace with your actual image
//       bgColor: "#FF7F82",
//     },
//     {
//       title: "Pixel Perfect",
//       subtitle: "Obsession",
//       image: "/images/handmob.webp", // Replace with your actual image
//       bgColor: "#FFA16A",
//     },
//     {
//       title: "Real Timelines",
//       subtitle: "Real Results",
//       image: "/images/womenlap.webp", // Replace with your actual image
//       bgColor: "#CF8EFF",
//     },
//     {
//       title: "AI-Powered",
//       subtitle: "Products",
//       image: "/images/ai.webp", // Replace with your actual image
//       bgColor: "#79CCFF",
//     },
//   ];

//   return (
//     <section className="py-16 px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           ref={headerRef}
//           variants={headerVariants}
//           initial="hidden"
//           animate={isHeaderInView ? "visible" : "hidden"}
//           className="text-center mb-8"
//         >
//           <h1 className="text-4xl md:text-5xl font-Manrope-regular text-gray-900 mb-4">
//             Our <span className="font-Manrope-bold">approach</span>
//           </h1>
//           <motion.div
//             variants={underlineVariants}
//             initial="hidden"
//             animate={isHeaderInView ? "visible" : "hidden"}
//             className="h-1 bg-red-500 mx-auto rounded-full"
//           />
//         </motion.div>

//         {/* Description Text */}
//         <motion.div
//           ref={textRef}
//           className="max-w-4xl mx-auto text-center mb-16 space-y-6"
//         >
//           <motion.p
//             variants={textVariants}
//             initial="hidden"
//             animate={isTextInView ? "visible" : "hidden"}
//             transition={{ delay: 0.2 }}
//             className="text-lg md:text-xl font-Manrope-medium text-gray-600 leading-relaxed"
//           >
//             At INFILR, we meet clients wherever they are in their journey.
//           </motion.p>

//           <motion.p
//             variants={textVariants}
//             initial="hidden"
//             animate={isTextInView ? "visible" : "hidden"}
//             transition={{ delay: 0.4 }}
//             className="text-base md:text-lg font-Manrope-regular text-gray-600 leading-relaxed"
//           >
//             Some arrive with a crystal-clear roadmap. Others just know they need
//             something. And sometimes, what you think you need isn't what will
//             truly move the needle — that's where we come in.
//           </motion.p>

//           <motion.p
//             variants={textVariants}
//             initial="hidden"
//             animate={isTextInView ? "visible" : "hidden"}
//             transition={{ delay: 0.6 }}
//             className="text-base md:text-lg font-Manrope-regular text-gray-600 leading-relaxed"
//           >
//             Whether you've got a full plan or just a rough idea, we're your App
//             Department on demand. Think of us as your in-house team — made up of
//             founders, tech architects, creative thinkers, and real-world
//             builders.
//           </motion.p>

//           <motion.p
//             variants={textVariants}
//             initial="hidden"
//             animate={isTextInView ? "visible" : "hidden"}
//             transition={{ delay: 0.8 }}
//             className="text-base md:text-lg font-Manrope-medium text-gray-700 leading-relaxed"
//           >
//             We help shape, refine, and execute ideas that actually work —
//             products that are fast, scalable, and aligned with real business
//             goals.
//           </motion.p>
//         </motion.div>

//         {/* Approach Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {approachCards.map((card, index) => (
//             <ApproachCard key={index} card={card} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurApproach;

"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const ApproachCard = ({ card, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.2,
    once: true,
    margin: "0px 0px -50px 0px",
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.15 + 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden group cursor-pointer max-w-sm h-[400px]"
      style={{ backgroundColor: card.bgColor }}
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.6,
          delay: index * 0.15 + 0.2,
          ease: "easeOut",
        }}
        className="mb-6"
      >
        <h3 className="text-xl md:text-[28px] font-Manrope-bold text-[#570001] leading-tight pl-6 pt-6">
          {card.title}
        </h3>
        <p className="text-lg font-Manrope-bold text-[#570001] pl-6">
          {card.subtitle}
        </p>
      </motion.div>

      {/* Image Container */}
      <motion.div
        variants={imageVariants}
        className="relative h-[330px] rounded-xl overflow-hidden"
      >
        <div className="relative w-full h-full ">
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-contain "
          />

          {/* Subtle overlay for better text readability */}
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const OurApproach = () => {
  const headerRef = useRef(null);
  const textRef = useRef(null);

  const isHeaderInView = useInView(headerRef, {
    threshold: 0.3,
    once: true,
  });

  const isTextInView = useInView(textRef, {
    threshold: 0.2,
    once: true,
  });

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "7rem",
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

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

  const approachCards = [
    {
      title: "No Hype",
      subtitle: "Just Honest Code",
      image: "/images/hype.webp", // Replace with your actual image
      bgColor: "#FF7F82",
    },
    {
      title: "Pixel Perfect",
      subtitle: "Obsession",
      image: "/images/handmob.webp", // Replace with your actual image
      bgColor: "#FFA16A",
    },
    {
      title: "Real Timelines",
      subtitle: "Real Results",
      image: "/images/womenlap.webp", // Replace with your actual image
      bgColor: "#CF8EFF",
    },
    {
      title: "AI-Powered",
      subtitle: "Products",
      image: "/images/ai.webp", // Replace with your actual image
      bgColor: "#79CCFF",
    },
  ];

  return (
    <section className="pt-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-Manrope-medium text-gray-900 mb-4">
            Our <span className="font-Manrope-regular">approach</span>
          </h1>
          <motion.div
            variants={underlineVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="h-1 bg-red-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Description Text */}
        <motion.div
          ref={textRef}
          className="max-w-4xl mx-auto text-center mb-16 space-y-6"
        >
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isTextInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="text-base md:text-2xl font-Manrope-medium text-tertiary leading-relaxed"
          >
            At INFILR, we meet clients wherever they are in their journey.
          </motion.p>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isTextInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            className="text-base md:text-2xl font-Manrope-medium text-tertiary leading-relaxed"
          >
            Some arrive with a crystal-clear roadmap. Others just know they need
            something. And sometimes, what you think you need isn't what will
            truly move the needle — that's where we come in.
          </motion.p>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isTextInView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
            className="text-base md:text-2xl font-Manrope-medium text-tertiary leading-relaxed"
          >
            Whether you've got a full plan or just a rough idea, we're your App
            Department on demand. Think of us as your in-house team — made up of
            founders, tech architects, creative thinkers, and real-world
            builders.
          </motion.p>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isTextInView ? "visible" : "hidden"}
            transition={{ delay: 0.8 }}
            className="text-base md:text-2xl font-Manrope-medium text-tertiary leading-relaxed"
          >
            We help shape, refine, and execute ideas that actually work —
            products that are fast, scalable, and aligned with real business
            goals.
          </motion.p>
        </motion.div>

        {/* Approach Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachCards.map((card, index) => (
            <ApproachCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
