"use client";

import Image from "next/image";
import React from "react";

const BannerGallery = ({ banners }) => {
  return (
    <div className="flex flex-col items-center w-full">
      {banners?.map((src, index) => (
        <div key={index} className="relative h-screen w-full">
          <Image
            src={src}
            alt={`Banner ${index + 1}`}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default BannerGallery;
