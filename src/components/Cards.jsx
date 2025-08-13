// "use client";

// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import Image from "next/image";

// const Cards = ({
//   logoSrc = "/images/woboLogo.png",
//   logoAlt = "Wobo Logo",
//   title = "Smart Golf League & Match Management",
//   imageSrc = "/images/woboLogo.png",
//   imageAlt = "Card Image",
//   delay = 0,
//   backgroundColor = "bg-teal-600",
// }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.3 });

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//         delay: delay,
//       },
//     },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       className={`flex flex-col items-center text-center ${backgroundColor} gradient-to-t rounded-4xl px-8  text-white md:max-w-[600px] h-[386px] md:h-[720px] mx-4 my-2 md:my-4`}
//       variants={cardVariants}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//     >
//       <div className="flex justify-center mt-8 mb-6">
//         <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-24 md:h-24">
//           <Image
//             src={logoSrc}
//             alt={logoAlt}
//             fill
//             className="object-contain rounded-2xl"
//             sizes="(max-width: 640px) 3rem, (max-width: 768px) 3.5rem, 4rem"
//             priority
//           />
//         </div>
//       </div>

//       <div className="flex justify-center mb-8">
//         <h2 className="text-lg md:text-[32px] font-Manrope-bold leading-[130%] font-Manrope-bold max-w-lg">
//           {title}
//         </h2>
//       </div>

//       <div className="flex justify-center w-full ">
//         <div className="relative w-full h-52 sm:h-72 md:h-[437px]">
//           <Image
//             src={imageSrc}
//             alt={imageAlt}
//             fill
//             className="object-contain"
//             sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 53vw"
//             priority
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Cards;

"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Cards = ({
  logoSrc = "/images/woboLogo.png",
  logoAlt = "Wobo Logo",
  title = "Smart Golf League & Match Management",
  imageSrc = "/images/woboLogo.png",
  imageAlt = "Card Image",
  delay = 0,
  backgroundColor = "bg-teal-600",
  onClick = () => {}, // Added onClick prop
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const cardVariants = {
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
    hover: {
      y: -5, // Moves the whole card up slightly on hover
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hover: {
      y: -2, // Subtle movement for inner elements
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col items-center text-center ${backgroundColor} gradient-to-t rounded-4xl px-8 text-white md:max-w-[600px] h-[386px] md:h-[720px] mx-4 my-2 md:my-4 cursor-pointer`}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      onClick={onClick}
    >
      <motion.div
        className="flex justify-center mt-8 mb-6"
        variants={contentVariants}
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

      <motion.div
        className="flex justify-center mb-4 sm:mb-8"
        variants={contentVariants}
      >
        <h2 className="text-lg md:text-[32px] font-Manrope-bold leading-[130%] font-Manrope-bold max-w-80 md:max-w-lg">
          {title}
        </h2>
      </motion.div>

      <motion.div
        className="flex justify-center w-full"
        variants={contentVariants}
      >
        <div className="relative w-full h-52 sm:h-72 md:h-[437px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 40vw, (max-width: 768px) 50vw, 53vw"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Cards;
