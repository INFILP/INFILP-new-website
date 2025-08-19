"use client";

import React from "react";
import { motion } from "framer-motion";
import AppHero from "../serviceDetails/[slug]/AppHero";
import Image from "next/image";
import ExecutiveTeam from "./TeamMember";
import OurApproach from "./ApproachCard";
import WhatAreWe from "./WhatAreWe";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import BuildBanner from "@/components/BuildBanner";

const About = () => {
  const testimonials = [
    {
      logo: "/images/testimonialLogo.png",
      quoteIcon: "/icons/quote.png", // inverted commas image
      text: "As Co-Owner of The Green Felts, we needed an app for advertising events, managing our player database, enabling event buy-ins, and providing a live leaderboard. INFILP quickly learned our requirements and delivered an excellent app despite their initial unfamiliarity with golf. Their team was a pleasure to work with, consistently updating and improving the app.",
      name: "Glenn Doylr",
      role: "CEO at The Green Felts",
      image: "/images/profile1.png",
    },
    {
      logo: "/images/testimonialLogo.png",
      quoteIcon: "/icons/quote.png",
      text: "As Co-Owner of The Green Felts, we needed an app for advertising events, managing our player database, enabling event buy-ins, and providing a live leaderboard. INFILP quickly learned our requirements and delivered an excellent app despite their initial unfamiliarity with golf. Their team was a pleasure to work with, consistently updating and improving the app.",
      name: "John Smith",
      role: "CTO at TechCorp",
      image: "/images/profile1.png",
    },
    {
      logo: "/images/testimonialLogo.png",
      quoteIcon: "/icons/quote.png", // inverted commas image
      text: "As Co-Owner of The Green Felts, we needed an app for advertising events, managing our player database, enabling event buy-ins, and providing a live leaderboard. INFILP quickly learned our requirements and delivered an excellent app despite their initial unfamiliarity with golf. Their team was a pleasure to work with, consistently updating and improving the app.",
      name: "Glenn Doylr",
      role: "CEO at The Green Felts",
      image: "/images/profile1.png",
    },
    {
      logo: "/images/testimonialLogo.png",
      quoteIcon: "/icons/quote.png",
      text: "As Co-Owner of The Green Felts, we needed an app for advertising events, managing our player database, enabling event buy-ins, and providing a live leaderboard. INFILP quickly learned our requirements and delivered an excellent app despite their initial unfamiliarity with golf. Their team was a pleasure to work with, consistently updating and improving the app.",
      name: "John Smith",
      role: "CTO at TechCorp",
      image: "/images/profile1.png",
    },
  ];
  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.4,
      },
    },
  };
  return (
    <div>
      <AppHero
        subtitle="We build"
        title="Mobile apps, craft web experiences, and plug in GenAI to unlock serious business growth."
      />
      <motion.section
        className={`pt-16 px-4 md:pt-8 lg:pt-14 bg-white `}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto mt-32 px-4">
          {/* Image Container */}
          <motion.div className="" variants={imageVariants}>
            <Image
              src="/images/infilpbuild.webp"
              alt="infilp"
              width={800}
              height={400}
              priority
              className="object-cover w-full max-w-[1079px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[621px] mx-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.section>
      <WhatAreWe />
      <ExecutiveTeam />
      <OurApproach />
      <TestimonialsCarousel testimonials={testimonials} />
      <div className="pt-10">
        <BuildBanner
          topText="Turn your idea into reality"
          mainText="Ready to build something great?"
          buttonText="Get Started"
          onClick={() => console.log("Button clicked!")}
          delay={0.2}
        />
      </div>
    </div>
  );
};

export default About;
