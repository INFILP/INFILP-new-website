import Image from "next/image";
import React from "react";

const TestimonialCard = ({ logo, quoteIcon, text, name, role, image }) => {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col gap-4 max-w-[720px] md:h-[432px] relative">
      {/* Logo */}
      <div className="w-10 h-12 md:w-24 md:h-28 relative">
        <Image src={logo} alt="Company Logo" fill className="object-contain" />
      </div>

      {quoteIcon && (
        <Image
          src="/images/comma.png"
          alt="Quote"
          width={200}
          height={200}
          className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-44 md:h-44 lg:w-32 lg:h-32 xl:w-48 xl:h-48"
        />
      )}

      <p className="text-tertiary text-xs md:text-[19px] leading-relaxed">
        {text}
      </p>

      <div className="flex items-center gap-3 mt-auto">
        <div className="w-full h-px bg-gray-400"></div>

        <div className="flex items-center gap-3">
          <div className="whitespace-nowrap">
            <p className=" text-custom-black text-sm md:text-[22px] font-Manrope-medium w-32">
              {name}
            </p>
            <p className="text-tertiary text-xs md:text-base">{role}</p>
          </div>
          <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden object-contain">
            <Image src={image} alt={name} width={80} height={80} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
