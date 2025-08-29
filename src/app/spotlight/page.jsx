"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import StatsSection from "@/components/StatsSection";
import Banner from "@/components/Banner";
import { FeatureCardDemo } from "@/components/FeatureCard ";
import WQBOHeroSection from "@/components/WQBOHeroSection";
import Cards from "@/components/Cards";
import SeeAllWorkComponent from "@/components/SeeAllWorkComponent";
import VideoCarousel from "@/components/VideoCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import BuildBanner from "@/components/BuildBanner";
import { useRouter } from "next/navigation";

const Spotlight = () => {
  const router = useRouter();
  const videos = [
    { id: 1, src: "/videos/gif1.mp4" },
    { id: 2, src: "/videos/gif2.mp4" },
    { id: 3, src: "/videos/gif3.mp4" },
  ];

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

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 inset-0 w-full h-full object-cover object-center z-20"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Text Content with Animation */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              },
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="text-left md:text-center text-second"
          >
            <h1 className="text-[32px] md:text-5xl lg:text-8xl font-Gilroy-regular sm:leading-16 lg:leading-32">
              Mobile & Web
              <br />
              <span className="text-second font-Gilroy-bold">
                App Development.
              </span>
            </h1>
          </motion.div>
        </div>
      </section>
      <div className="">
        <StatsSection />
        <Banner />
        <FeatureCardDemo />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24 mb-10"
        >
          <h2 className={`text-4xl font-Manrope-regular mb-3`}>
            Case
            <span className="font-Manrope-bold">Studies</span>
          </h2>
          <div className={`w-28 h-1 bg-red-500 mx-auto rounded-full`}></div>
        </motion.div>
        <WQBOHeroSection
          heading={["Smart Golf League & Match Management"]}
          logo={{
            src: "/images/golf.webp",
            alt: "Healthcare Logo",
            width: 150,
            height: 150,
            mobileWidth: 50,
            mobileHeight: 50,
          }}
          image={{
            src: "/images/golflap.webp",
            alt: "Healthcare App",
            mobileMaxHeight: 180,
            desktopMaxHeight: 400,
          }}
          backgroundColor="bg-gradient-golf"
          underlineColor="bg-red-500"
          textColor="text-gray-100"
          slug="the-green-felts"
        />
        <div className="flex flex-col md:flex-row max-w-[1240px] mx-auto items-center justify-center">
          <Cards
            logoSrc="/images/woboLogo.png"
            logoAlt="wobo Logo"
            title="Empowering Athletes and Fitness Merchants"
            imageSrc="/images/portfolioMobile.webp"
            imageAlt="Custom Image"
            backgroundColor="bg-gradient-wobo"
            delay={0.2}
            onClick={() => console.log("Card clicked!")}
            showBanner="false"
            slug="wobo"
          />
          <Cards
            logoSrc="/images/b2b.webp"
            logoAlt="B2B Logo"
            title="A Digital Solution To Streamline B2B & B2C Fashion Operations"
            imageSrc="/images/b2bMobile.webp"
            imageAlt="Custom Image"
            backgroundColor="bg-gradient-b2b"
            delay={0.2}
            onClick={() => console.log("Card clicked!")}
            showBanner="false"
            slug="dressplaner"
          />
        </div>
        <div>
          <SeeAllWorkComponent
            mainText="See all work"
            buttonText="Let's Go"
            delay={0.2}
          />
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-24 mb-16"
          >
            <h1 className="text-4xl font-Manrope-bold text-custom-black mb-3">
              AI <span className="font-Manrope-regular"> at INFILP </span>
            </h1>
            <div className="w-28 h-1 bg-red-500 mx-auto rounded-full"></div>
          </motion.div>
          <VideoCarousel videos={videos} />
        </div>
        <div>
          <TestimonialsCarousel testimonials={testimonials} />;
        </div>
        <div>
          <BuildBanner
            topText="Turn your idea into reality"
            mainText="Ready to build something great?"
            buttonText="Get Started"
            // onClick={() => router.push(`/portfolio`)}
            delay={0.2}
          />
        </div>
      </div>
    </>
  );
};

export default Spotlight;
