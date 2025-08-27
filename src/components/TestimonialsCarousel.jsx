"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import TestimonialCard from "./TestimonialCard";

const TestimonialsCarousel = ({ testimonials }) => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full py-10 xl:h-screen 2xl:h-auto bg-[#F8FAFB] mt-24">
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="text-2xl lg:text-[56px] font-Manrope-regular">
          Hear from{" "}
          <span className="text-custom-black font-Manrope-bold">
            Our Partners
          </span>
        </h2>
        <div className="h-1 w-36 bg-red-500 mx-auto my-4"></div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden px-4 lg:pl-32">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          speed={600}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },

            768: {
              slidesPerView: 1.2,
              spaceBetween: 25,
              centeredSlides: true,
            },

            1024: {
              slidesPerView: "auto",
              spaceBetween: 30,
              centeredSlides: false,
            },
            1280: {
              slidesPerView: "1.6",
              spaceBetween: 30,
              centeredSlides: false,
            },
            1440: {
              slidesPerView: "1.9",
              spaceBetween: 30,
              centeredSlides: false,
            },
            1920: {
              slidesPerView: "2.4",
              spaceBetween: 30,
              centeredSlides: false,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx} style={{ width: "720px" }}>
              <div className="h-full">
                <TestimonialCard {...t} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center gap-4 mt-2">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition transform hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition transform hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <style jsx global>{`
        .testimonials-swiper {
          overflow: visible !important;
          padding: 20px 0;
        }

        .testimonials-swiper .swiper-wrapper {
          align-items: stretch;
        }

        .testimonials-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsCarousel;
