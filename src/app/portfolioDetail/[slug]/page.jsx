"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import portfolio from "../../../data/portfolioDetail.json";
import { useParams } from "next/navigation";
import Details from "./Details";
import FeatureList from "./FeatureList";
import DownloadSocialLinks from "./DownloadSocialLinks";
import BannerGallery from "./BannerGallery";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Statement from "./Statement";
import CaseStudiesGrid from "@/app/portfolio/CaseStudiesGrid";

const PortfolioDetail = () => {
  const params = useParams();
  const router = useRouter();
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundService = portfolio.find(
      (portfolios) => portfolios.slug === params.slug
    );

    if (foundService) {
      setPortfolioData(foundService);
    } else {
      router.push("/404");
    }
    setLoading(false);
  }, [params.slug]);

  if (!portfolioData) {
    return null;
  }
  return (
    <div className="">
      <motion.div
        className="w-full h-screen relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <Image
          src={portfolioData?.top_banner}
          alt="banner"
          fill
          className="w-full object-cover object-center"
          priority
        />
      </motion.div>
      <Details
        title={portfolioData?.name}
        description={portfolioData?.descriptions?.join("\n\n")}
        year="2024-Present"
        projectType="Mobile App Development"
        industry="AI-Powered Tech"
      />
      <div className="max-w-[1240px] mx-auto px-4 pt-16">
        <FeatureList
          features={portfolioData?.features}
          className="max-w-[1240px] mx-auto"
        />
      </div>
      <DownloadSocialLinks
        downloadLinks={{
          playStore: `${portfolioData?.play_store_link}`,
          appStore: `${portfolioData?.apple_store_link}`,
        }}
        socialLinksArray={portfolioData?.socialLinksArray}
        className="max-w-[1240px] mx-6 lg:mx-3 xl:mx-auto pt-28"
      />
      <div className="mt-28">
        <Statement
          title="Problem Statement"
          points={portfolioData?.problem?.statements}
          imageSrc={portfolioData?.problem?.banner}
          imageAlt="Description"
        />
        <Statement
          title="Our Solution"
          points={portfolioData?.solution?.statements}
          imageSrc={portfolioData?.solution?.banner}
          imageAlt="Description"
          reverse={true}
        />
      </div>
      <div className="mt-36">
        <BannerGallery banners={portfolioData?.banners} />
      </div>
      {portfolioData?.related_projects &&
        portfolioData.related_projects.length > 0 && (
          <div className="flex flex-col items-center justify-center mt-20 mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h2 className="text-2xl md:text-[56px] lg:text-6xl font-Manrope-regular text-gray-900 leading-tight px-4 text-center">
                Projects that{" "}
                <span className="font-Manrope-bold relative inline-block">
                  speak
                </span>{" "}
                for themselves
              </h2>
              <div className="w-32 h-1 bg-red-500 mx-auto mt-2 rounded-full"></div>
            </motion.div>
            <div className="flex flex-col md:flex-row max-w-[1240px] mx-auto mt-12">
              <CaseStudiesGrid
                relatedProjectSlugs={portfolioData?.related_projects}
                className="mt-36"
                title="Related Projects"
              />
            </div>
          </div>
        )}
    </div>
  );
};

export default PortfolioDetail;
