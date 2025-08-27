"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FeatureCard = ({
  title = "Generative AI",
  description = "Scale ideas into features with the power of generative AI.",
  icons = [
    { id: 1, src: "/images/placeholder-1.png", alt: "Icon 1" },
    { id: 2, src: "/images/placeholder-2.png", alt: "Icon 2" },
    { id: 3, src: "/images/placeholder-3.png", alt: "Icon 3" },
    { id: 4, src: "/images/placeholder-4.png", alt: "Icon 4" },
  ],
  href = "#",
  onClick,
  className = "",
  delay = 0,
  slug,
  duration = 0.6,
  threshold = 0.3,
}) => {
  const ref = useRef(null);
  const router = useRouter();
  const isInView = useInView(ref, {
    threshold: threshold,
    once: true,
    margin: "0px 0px -100px 0px",
  });

  // const handleClick = () => {
  //   if (onClick) {
  //     onClick();
  //   }
  //   if (slug) {
  //     router.prefetch(`/serviceDetails/${slug}`);
  //     router.push(`/serviceDetails/${slug}`);
  //   }
  // };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    if (slug) {
      const isMobile =
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      if (isMobile) {
        // Add small delay for mobile to prevent accidental taps
        setTimeout(() => {
          router.push(`/serviceDetails/${slug}`);
        }, 100);
      } else {
        router.prefetch(`/serviceDetails/${slug}`);
        router.push(`/serviceDetails/${slug}`);
      }
    }
  };

  const handleMouseEnter = () => {
    if (slug) {
      router.prefetch(`/serviceDetails/${slug}`);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      transition={{
        duration: duration,
        delay: isInView ? delay : 0,
        ease: "easeOut",
      }}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      className={`rounded-2xl shadow-lg hover:shadow-2xl bg-hover-gradient-card bg-[#F3F3F3] cursor-pointer transition-all duration-300 max-w-[440px] transform-gpu group overflow-hidden ${className}`}
      style={{ willChange: "transform" }}
    >
      {/* Icons Grid */}
      <div className="p-6">
        <div className="flex flex-wrap justify-center gap-4">
          {icons.slice(0, 4).map((icon, index) => (
            <motion.div
              key={icon.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{
                duration: 0.4,
                delay: isInView ? delay + 0.2 + index * 0.1 : 0,
                ease: "easeOut",
              }}
              className="rounded-xl flex items-center justify-center w-[130px] h-[130px] bg-white"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={83}
                height={83}
                className="object-contain pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.4,
          delay: isInView ? delay + 0.6 : 0,
          ease: "easeOut",
        }}
        className="bg-white p-6"
      >
        <h3 className="font-Manrope-bold text-custom-black text-[24px] mb-3 transition-colors duration-200 leading-[130%]">
          {title}
        </h3>
        <p className="font-Manrope-regular text-tertiary text-lg leading-[130%]">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const FeatureCardDemo = () => {
  const cardData = [
    {
      title: "Generative AI",
      description: "Scale ideas into features with the power of generative AI.",
      slug: "generative-ai-apps",
      href: "/generative-ai",
      icons: [
        { id: 1, src: "/images/gpt.png", alt: "Refresh Icon" },
        { id: 2, src: "/images/vector.png", alt: "Chart Icon" },
        { id: 3, src: "/images/star.png", alt: "Sparkle Icon" },
        { id: 4, src: "/images/claude.png", alt: "Lightning Icon" },
      ],
    },
    {
      title: "Mobile App Development",
      description: "Build fast, beautiful apps ready to scale from day one.",
      slug: "mobile-app-development",
      href: "/data-analytics",
      icons: [
        { id: 1, src: "/images/native.png", alt: "Graph Icon" },
        { id: 2, src: "/images/aws.png", alt: "Target Icon" },
        { id: 3, src: "/images/expo.png", alt: "Search Icon" },
        { id: 4, src: "/images/jango.png", alt: "Bulb Icon" },
      ],
    },
  ];

  return (
    <div className="  p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24 mb-24"
        >
          <h1 className="text-4xl font-Manrope-regular text-custom-black mb-3">
            What We <span className="font-Manrope-bold"> Offer </span>
          </h1>
          <div className="w-28 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {cardData.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description}
              icons={card.icons}
              slug={card.slug}
              href={card.href}
              // onClick={card.onClick}
              delay={index * 0.15}
              threshold={0.2}
              onClick={() => console.log(`${card.title} clicked!`)}
              className="group"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { FeatureCard, FeatureCardDemo };
export default FeatureCard;
