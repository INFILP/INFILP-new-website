'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const VideoCarousel = ({ videos = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)
  const videoRefs = useRef([])

  const defaultVideos = [
    {
      id: 1,
      src: 'https://firebasestorage.googleapis.com/v0/b/infilp.appspot.com/o/videos%2Flanding_page_ai_section%2Fgif1.webm?alt=media&token=57097199-361f-4470-a780-438c7b1fd3d4',
    },
    {
      id: 2,
      src: 'https://firebasestorage.googleapis.com/v0/b/infilp.appspot.com/o/videos%2Flanding_page_ai_section%2Fgif2.webm?alt=media&token=fa742a26-ee10-45be-99f4-fbb13bcf8a52',
    },
    {
      id: 3,
      src: 'https://firebasestorage.googleapis.com/v0/b/infilp.appspot.com/o/videos%2Flanding_page_ai_section%2Fgif3.webm?alt=media&token=83842254-205e-4983-9d6c-95cf58523ee0',
    },
  ]

  const videoData = videos.length > 0 ? videos : defaultVideos

  const loopedVideos =
    videoData.length === 3 ? [...videoData, ...videoData] : videoData

  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex % videoData.length
    setActiveIndex(realIndex)
  }

  const handleVideoEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  useEffect(() => {
    const currentVideoIndex = activeIndex % videoData.length

    loopedVideos.forEach((_, index) => {
      const video = videoRefs.current[index]
      if (video) {
        const videoIndex = index % videoData.length
        if (videoIndex === currentVideoIndex) {
          video.currentTime = 0
          video.play().catch(() => {
            // Handle autoplay restrictions
          })
        } else {
          video.pause()
        }
      }
    })
  }, [activeIndex, videoData.length])

  return (
    <div className="relative w-full">
      <style jsx global>{`
        .video-carousel-full {
          width: 100%;
          height: auto;
          overflow: hidden;
        }

        .video-carousel-full .swiper-wrapper {
          align-items: center;
        }

        .video-carousel-full .swiper-slide {
          width: 45% !important;
          opacity: 0.4;
          transform: scale(0.8);
          transition: all 0.5s ease;
          border-radius: 24px;
          overflow: hidden;
          margin: 0 auto;
        }

        .video-carousel-full .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
          z-index: 10;
        }

        .video-carousel-full .swiper-slide-prev,
        .video-carousel-full .swiper-slide-next {
          opacity: 0.6;
          transform: scale(0.85);
        }

        .video-carousel-full .swiper-pagination {
          bottom: 30px;
        }

        .video-carousel-full .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          width: 12px;
          height: 12px;
          opacity: 1;
        }

        .video-carousel-full .swiper-pagination-bullet-active {
          background: white;
          transform: scale(1.3);
        }

        /* Small devices - centered single video */
        @media (max-width: 768px) {
          .video-carousel-full {
            height: 340px;
            padding: 0 10px;
          }

          .video-carousel-full .swiper-slide {
            width: 100% !important;
            opacity: 1 !important;
            transform: scale(1) !important;
          }

          .video-carousel-full .swiper-slide-active {
            transform: scale(1) !important;
            opacity: 1 !important;
          }

          .video-carousel-full .swiper-slide-prev,
          .video-carousel-full .swiper-slide-next {
            opacity: 1 !important;
            transform: scale(1) !important;
          }
        }

        @media (max-width: 480px) {
          .video-carousel-full {
            height: 270px;
            padding: 0 20px; /* Add horizontal padding to the carousel */
          }

          .video-carousel-full .swiper-slide {
            width: 100% !important;
            opacity: 1 !important;
            transform: scale(1) !important;
          }

          .video-carousel-full .swiper-pagination {
            bottom: 70px;
          }
        }
        @media (min-width: 320px) and (max-width: 390px) {
          .video-carousel-full .swiper-slide {
            width: 100% !important;
            opacity: 1 !important;
            transform: scale(1) !important;
            top: 40;
          }

          .video-carousel-full .swiper-pagination {
            bottom: 50px;
          }
        }
      `}</style>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        className="video-carousel-full"
        spaceBetween={20}
        slidesPerView={1.8}
        centeredSlides={true}
        loop={true}
        speed={600}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: function (index, className) {
            const realIndex = index % videoData.length
            return `<span class="${className}" data-index="${realIndex}"></span>`
          },
        }}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: false,
          },
          769: {
            slidesPerView: 2.2,
            spaceBetween: 10,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 2.2,
            centeredSlides: true,
          },
          1280: {
            slidesPerView: 2.2,
            centeredSlides: true,
          },
        }}>
        {loopedVideos.map((video, index) => (
          <SwiperSlide
            key={`${video.id}-${Math.floor(index / videoData.length)}`}>
            <div className="w-full h-auto rounded-3xl overflow-hidden ">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="w-full h-full object-contain"
                onEnded={handleVideoEnd}
                muted
                autoPlay
                playsInline
                preload="auto"
                loop={false}>
                <source src={video.src} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="absolute left-6 min-[319px]:max-[376px]:top-[50%] top-[40%] sm:top-1/2 min-[769px]:max-[1249px]:top-1/3 xl:top-1/2 transform -translate-y-1/2 z-20 bg-white backdrop-blur-sm hover:bg-white/30 rounded-full p-3 text-black transition-all duration-300 border border-white/30 cursor-pointer"
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous video">
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="absolute right-6 min-[319px]:max-[376px]:top-[50%] top-[40%] sm:top-1/2 min-[769px]:max-[1249px]:top-1/3 xl:top-1/2 transform -translate-y-1/2 z-20 bg-white backdrop-blur-sm hover:bg-white/30 rounded-full p-3 text-black transition-all duration-300 border border-white/30 cursor-pointer"
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next video">
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

export default VideoCarousel
