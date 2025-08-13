"use client";

import React from "react";
import Image from "next/image";

const defaultItems = [
  {
    id: 1,
    iconSrc: "/images/tick.png",
    iconAlt: "Precision check icon",
    text: "Precision by Design",
  },
  {
    id: 2,
    iconSrc: "/images/lock.png",
    iconAlt: "Shield tech icon",
    text: "Tech That Lasts",
  },
  {
    id: 3,
    iconSrc: "/images/shield.png",
    iconAlt: "Partnership handshake icon",
    text: "Honest Partnership",
  },
];

const Banner = ({
  items = defaultItems,
  speed = "normal",
  direction = "normal",
  pauseOnHover = true,
  showGradient = true,

  className = "",
}) => {
  const duplicatedItems = [...items, ...items];

  const getAnimationClass = () => {
    const speedClass =
      speed === "slow"
        ? "animate-marquee-slow"
        : speed === "fast"
        ? "animate-marquee-fast"
        : "animate-marquee";
    const directionClass =
      direction === "reverse" ? "animate-marquee-reverse" : "";
    const hoverClass = pauseOnHover ? "hover:pause" : "";

    return `${speedClass} ${directionClass} ${hoverClass}`.trim();
  };

  return (
    <div className={`relative overflow-hidden bg-[#171717] py-3 ${className}`}>
      <div className={`flex whitespace-nowrap ${getAnimationClass()}`}>
        {duplicatedItems.map((item, index) => (
          <MarqueeItem key={`${item.id}-${index}`} item={item} />
        ))}
      </div>

      {showGradient && (
        <>
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#171717] to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#171717] to-transparent pointer-events-none z-10" />
        </>
      )}
    </div>
  );
};

const MarqueeItem = ({ item, iconSize }) => {
  return (
    <div className="flex items-center mr-20 md:mr-32 text-white min-w-max">
      <div className="mr-3 flex-shrink-0">
        <Image
          src={item.iconSrc}
          alt={item.iconAlt}
          width={34}
          e
          height={34}
          className="object-contain w-5 h-5 md:w-8 md:h-8"
        />
      </div>

      <span className="text-[18px] md:text-[38px] font-Manrope-bold tracking-wide">
        {item.text}
      </span>
    </div>
  );
};

export default Banner;
