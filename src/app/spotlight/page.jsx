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

const Spotlight = () => {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-20"
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
              once: true, // Animation happens only once
              amount: 0.3, // Trigger when 30% of element is visible
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
        <WQBOHeroSection
          title="Case"
          highlightedWord="Studies"
          heading={["Empowering Athletes and ", "Fitness Merchants"]}
          logo={{
            src: "/images/woboLogo.png",
            alt: "Healthcare Logo",
            width: 120,
            height: 120,
            mobileWidth: 50,
            mobileHeight: 50,
          }}
          image={{
            src: "/images/portfolioMobile.webp",
            alt: "Healthcare App",
            mobileMaxHeight: 180,
            desktopMaxHeight: 400,
          }}
          backgroundColor="bg-gradient-wobo"
          underlineColor="bg-red-500"
          textColor="text-gray-100"
          onClick={() => console.log("WQBO Hero Section clicked!")}
        />
        <div className="flex flex-col md:flex-row max-w-[1240px] mx-auto items-center justify-center">
          <Cards
            logoSrc="/images/golf.webp"
            logoAlt="Golf Logo"
            title="Smart Golf League & Match Management"
            imageSrc="/images/golflap.webp"
            imageAlt="Custom Image"
            backgroundColor="bg-gradient-golf"
            delay={0.2}
            onClick={() => console.log("Card clicked!")}
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
          />
        </div>
      </div>
    </>
  );
};

export default Spotlight;
