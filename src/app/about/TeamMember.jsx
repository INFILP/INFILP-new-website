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
        <div className="relative w-36 h-52 sm:w-52 sm:h-64 md:w-64 md:h-72">
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
      <motion.div variants={contentVariants} className="md:text-center md:px-2">
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
    <section className="pt-24 md:pt-32 sm:px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-Manrope-regular text-custom-black mb-4">
            Executive <span className="font-Manrope-bold">Team</span>
          </h2>
          <motion.div
            variants={underlineVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="h-1 bg-red-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1240px] justify-center items-center mx-auto md:px-4 gap-y-10 md:gap-10">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveTeam;
