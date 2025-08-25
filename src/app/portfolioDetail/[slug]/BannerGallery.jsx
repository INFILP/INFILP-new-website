"use client";

import Image from "next/image";
import React from "react";

const BannerGallery = ({ banners }) => {
  return (
    <div className="flex flex-col items-center w-full">
      {banners?.map((src, index) => (
        <div key={index} className=" w-full ">
          <Image
            src={src}
            alt={`Banner ${index + 1}`}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto block"
          />
        </div>
      ))}
    </div>
  );
};

export default BannerGallery;
