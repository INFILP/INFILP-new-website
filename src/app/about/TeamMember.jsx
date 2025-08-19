// "use client";

// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// const TeamMember = ({ member, index }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, {
//     threshold: 0.2,
//     once: true,
//     margin: "0px 0px -50px 0px",
//   });

//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
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
//         delay: index * 0.15 + 0.2,
//         ease: "easeOut",
//       },
//     },
//   };

//   const contentVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         delay: index * 0.15 + 0.4,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       variants={containerVariants}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       className="flex flex-col items-center group cursor-pointer"
//     >
//       {/* Image Container */}
//       <motion.div
//         variants={imageVariants}
//         whileHover={{ y: -8 }}
//         transition={{ duration: 0.3 }}
//         className="relative mb-6 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500"
//       >
//         <div className="relative w-48 h-60 sm:w-52 sm:h-64 md:w-64 md:h-72">
//           <Image
//             src={member.image}
//             alt={member.name}
//             fill
//             sizes="(max-width: 768px) 208px, 192px"
//             className="object-cover transition-transform duration-500 group-hover:scale-110"
//             priority={index < 2} // Prioritize first two images
//           />

//           {/* Gradient Overlay */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileHover={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//             className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
//           />

//           {/* Social Links Overlay */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileHover={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: 0.1 }}
//             className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3"
//           >
//             {member.socialLinks.map((link, linkIndex) => (
//               <motion.div
//                 key={linkIndex}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <Link
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
//                 >
//                   {link.platform === "linkedin" ? (
//                     <svg
//                       className="w-4 h-4 text-blue-600"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                     </svg>
//                   ) : (
//                     <svg
//                       className="w-4 h-4 text-gray-600"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.175-2.076 3.866-.686.4-1.508.6-2.375.6-1.108 0-2.167-.272-2.926-.8-.301-.21-.49-.46-.49-.72 0-.41.414-.73.923-.73.19 0 .38.06.523.14.48.26 1.023.4 1.67.4.842 0 1.534-.28 1.916-.78.382-.5.382-1.14.382-1.14s-.414.28-.932.28c-.842 0-1.534-.28-1.916-.78-.382-.5-.382-1.14-.382-1.14s.414.28.932.28c.518 0 .932-.28.932-.28s0 .64-.382 1.14z" />
//                     </svg>
//                   )}
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Content */}
//       <motion.div variants={contentVariants} className="text-center px-2">
//         <motion.h3
//           className="text-lg md:text-[28px] font-Manrope-bold text-custom-black mb-2"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.2 }}
//         >
//           {member.name}
//         </motion.h3>
//         <motion.p
//           className="text-tertiary text-base md:text-lg mb-4"
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ delay: index * 0.15 + 0.6 }}
//         >
//           {member.position}
//         </motion.p>

//         {/* Desktop Social Links */}
//         <motion.div
//           className="flex justify-center space-x-3"
//           initial={{ opacity: 0, y: 10 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//           transition={{ delay: index * 0.15 + 0.8 }}
//         >
//           {member.socialLinks.map((link, linkIndex) => (
//             <motion.div
//               key={linkIndex}
//               whileHover={{ scale: 1.2, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//               transition={{ duration: 0.2 }}
//             >
//               <Link
//                 href={link.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200 shadow-md hover:shadow-lg"
//               >
//                 {link.platform === "linkedin" ? (
//                   <span className="text-xs font-Manrope-bold">in</span>
//                 ) : (
//                   <svg
//                     className="w-4 h-4"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.175-2.076 3.866-.686.4-1.508.6-2.375.6-1.108 0-2.167-.272-2.926-.8-.301-.21-.49-.46-.49-.72 0-.41.414-.73.923-.73.19 0 .38.06.523.14.48.26 1.023.4 1.67.4.842 0 1.534-.28 1.916-.78.382-.5.382-1.14.382-1.14s-.414.28-.932.28c-.842 0-1.534-.28-1.916-.78-.382-.5-.382-1.14-.382-1.14s.414.28.932.28c.518 0 .932-.28.932-.28s0 .64-.382 1.14z" />
//                   </svg>
//                 )}
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// const ExecutiveTeam = () => {
//   const headerRef = useRef(null);
//   const isHeaderInView = useInView(headerRef, {
//     threshold: 0.3,
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

//   const teamMembers = [
//     {
//       name: "Ibrahim Arif",
//       position: "Team Leader",
//       image: "/images/1.png", // Replace with your actual image path
//       socialLinks: [
//         { platform: "linkedin", url: "https://linkedin.com/in/ibrahim-arif" },
//         { platform: "website", url: "https://ibrahim-portfolio.com" },
//       ],
//     },
//     {
//       name: "Bilal Naeem",
//       position: "Sr. Software Engineer",
//       image: "/images/2.png", // Replace with your actual image path
//       socialLinks: [
//         { platform: "linkedin", url: "https://linkedin.com/in/bilal-naeem" },
//       ],
//     },
//     {
//       name: "Ali Shahzaib",
//       position: "Product Designer",
//       image: "/images/3.png", // Replace with your actual image path
//       socialLinks: [
//         { platform: "linkedin", url: "https://linkedin.com/in/ali-shahzaib" },
//       ],
//     },
//     {
//       name: "Saud Ul Hassan",
//       position: "Software Engineer",
//       image: "/images/4.png", // Replace with your actual image path
//       socialLinks: [
//         { platform: "linkedin", url: "https://linkedin.com/in/saud-hassan" },
//       ],
//     },
//   ];

//   return (
//     <section className="py-16 px-8 bg-gray-50 min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           ref={headerRef}
//           variants={headerVariants}
//           initial="hidden"
//           animate={isHeaderInView ? "visible" : "hidden"}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
//             Executive <span className="font-bold">Team</span>
//           </h1>
//           <motion.div
//             variants={underlineVariants}
//             initial="hidden"
//             animate={isHeaderInView ? "visible" : "hidden"}
//             className="h-1 bg-red-500 mx-auto rounded-full"
//           />
//         </motion.div>

//         {/* Team Grid */}
//         <div className="flex flex-wrap max-w-[1240px] justify-center items-center mx-auto px-4 gap-10">
//           {teamMembers.map((member, index) => (
//             <TeamMember key={index} member={member} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExecutiveTeam;

"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Linkedin,
  Globe,
  Github,
  Twitter,
  Instagram,
  Mail,
} from "lucide-react";

const TeamMember = ({ member, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.2,
    once: true,
    margin: "0px 0px -50px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
        delay: index * 0.15 + 0.2,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15 + 0.4,
        ease: "easeOut",
      },
    },
  };

  // Function to get the appropriate icon component
  const getIcon = (platform) => {
    const iconProps = { size: 16, strokeWidth: 2 };

    switch (platform.toLowerCase()) {
      case "linkedin":
        return <Linkedin {...iconProps} />;
      case "website":
      case "globe":
        return <Globe {...iconProps} />;
      case "github":
        return <Github {...iconProps} />;
      case "twitter":
        return <Twitter {...iconProps} />;
      case "instagram":
        return <Instagram {...iconProps} />;
      case "email":
      case "mail":
        return <Mail {...iconProps} />;
      default:
        return <Globe {...iconProps} />;
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-col items-center group cursor-pointer"
    >
      {/* Image Container */}
      <motion.div
        variants={imageVariants}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="relative mb-6 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500"
      >
        <div className="relative w-48 h-60 sm:w-52 sm:h-64 md:w-64 md:h-72">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 208px, 256px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority={index < 2} // Prioritize first two images
          />

          {/* Gradient Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          />

          {/* Social Links Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3"
          >
            {member.socialLinks.map((link, linkIndex) => (
              <motion.div
                key={linkIndex}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
                >
                  <span className="text-gray-700">
                    {getIcon(link.platform)}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div variants={contentVariants} className="text-center px-2">
        <motion.h3
          className="text-lg md:text-[28px] font-Manrope-bold text-custom-black mb-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {member.name}
        </motion.h3>
        <motion.p
          className="text-tertiary text-base md:text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.15 + 0.6 }}
        >
          {member.position}
        </motion.p>

        {/* Desktop Social Links */}
        <motion.div
          className="flex justify-center space-x-3"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: index * 0.15 + 0.8 }}
        >
          {member.socialLinks.map((link, linkIndex) => (
            <motion.div
              key={linkIndex}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                {getIcon(link.platform)}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ExecutiveTeam = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, {
    threshold: 0.3,
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

  const teamMembers = [
    {
      name: "Ibrahim Arif",
      position: "Team Leader",
      image: "/images/1.png",
      socialLinks: [
        { platform: "linkedin", url: "https://linkedin.com/in/ibrahim-arif" },
        { platform: "website", url: "https://ibrahim-portfolio.com" },
        { platform: "github", url: "https://github.com/ibrahim-arif" },
      ],
    },
    {
      name: "Bilal Naeem",
      position: "Sr. Software Engineer",
      image: "/images/2.png",
      socialLinks: [
        { platform: "linkedin", url: "https://linkedin.com/in/bilal-naeem" },
        { platform: "github", url: "https://github.com/bilal-naeem" },
      ],
    },
    {
      name: "Ali Shahzaib",
      position: "Product Designer",
      image: "/images/3.png",
      socialLinks: [
        { platform: "linkedin", url: "https://linkedin.com/in/ali-shahzaib" },
        { platform: "instagram", url: "https://instagram.com/ali.shahzaib" },
      ],
    },
    {
      name: "Saud Ul Hassan",
      position: "Software Engineer",
      image: "/images/4.png",
      socialLinks: [
        { platform: "linkedin", url: "https://linkedin.com/in/saud-hassan" },
        { platform: "twitter", url: "https://twitter.com/saud_hassan" },
      ],
    },
  ];

  return (
    <section className="pt-32 px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-Manrope-regular text-custom-black mb-4">
            Executive <span className="font-Manrope-bold">Team</span>
          </h1>
          <motion.div
            variants={underlineVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="h-1 bg-red-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Team Grid */}
        <div className="flex flex-wrap max-w-[1240px] justify-center items-center mx-auto px-4 gap-10">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveTeam;
