"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareBehance } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "phone") {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <footer className="relative py-12 md:py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        {/* Contact Info - Centered */}
        <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
          {/* Phone */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-tertiary text-lg md:text-[38px] font-Manrope-medium">
              +1 (737) 282-1524
            </span>
            <button
              onClick={() => handleCopy("+1 (737) 282-1524", "phone")}
              className="text-tertiary hover:text-[#F61A12] hover:scale-110 transition-all duration-300 ease-in-out p-1 cursor-pointer"
              title="Copy phone number"
            >
              {copiedPhone ? (
                <Check
                  size={18}
                  className="text-green-500 md:w-[25px] md:h-[25px]"
                />
              ) : (
                <Copy size={18} className="md:w-[25px] md:h-[25px]" />
              )}
            </button>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-tertiary text-lg md:text-[38px] font-Manrope-medium">
              contact@infilp.com
            </span>
            <button
              onClick={() => handleCopy("contact@infilp.com", "email")}
              className="text-tertiary hover:text-[#F61A12] hover:scale-110 transition-all duration-300 ease-in-out p-1 cursor-pointer"
              title="Copy email"
            >
              {copiedEmail ? (
                <Check
                  size={18}
                  className="text-green-500 md:w-[25px] md:h-[25px]"
                />
              ) : (
                <Copy size={18} className="md:w-[25px] md:h-[25px]" />
              )}
            </button>
          </div>
        </div>

        {/* Bottom Section - Desktop and Mobile */}
        <div className="flex justify-between items-center">
          {/* Address */}
          <div className="text-tertiary text-base md:text-2xl mb-6 md:mb-0">
            <div>5900 Balcones Dr Ste 100</div>
            <div>Austin, TX 78731</div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-end md:justify-center gap-4 mb-6 md:mb-0">
            <a
              href="#"
              className="text-tertiary hover:text-gray-600 transition-colors duration-200"
            >
              <FaLinkedin size={22} className="md:w-8 md:h-8" />
            </a>
            <a
              href="#"
              className="text-tertiary hover:text-gray-600 transition-colors duration-200"
            >
              {/* <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-400 hover:bg-gray-600 transition-colors duration-200 rounded text-white text-xs flex items-center justify-center font-bold">
                Be
              </div> */}

              <FaSquareBehance size={22} className="md:w-8 md:h-8" />
            </a>
            <a
              href="#"
              className="text-tertiary hover:text-gray-600 transition-colors duration-200"
            >
              <FaSquareInstagram size={22} className="md:w-8 md:h-8" />
            </a>
            <a
              href="#"
              className="text-tertiary hover:text-gray-600 transition-colors duration-200"
            >
              <FaFacebook size={22} className="md:w-8 md:h-8" />
            </a>
          </div>
        </div>

        {/* Divider Line - Mobile Only */}
        <hr className="border-gray-400 md:hidden" />

        {/* Copyright Section */}
        <div className="text-center mt-4 md:mt-12 relative z-10">
          {/* Semi-circle - Desktop Only */}
          <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 overflow-hidden">
            <div className="w-72 h-36 border-t-[16px] border-l-[16px] border-r-[16px] border-[#CACACA] rounded-t-full opacity-10"></div>
          </div>
          <p className="text-tertiary text-sm md:text-base font-Manrope-medium md:absolute md:-bottom-10 md:left-1/2 md:transform md:-translate-x-1/2 md:translate-y-1/2">
            Copyright © 2025 INFILP. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
