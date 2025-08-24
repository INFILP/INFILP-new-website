"use client";
import React, { useState, useEffect } from "react";
import portfolio from "../../../data/portfolioDetail.json";
import { useParams } from "next/navigation";
import Details from "./Details";
import FeatureList from "./FeatureList";
import DownloadSocialLinks from "./DownloadSocialLinks";
import BannerGallery from "./BannerGallery";
import { useRouter } from "next/navigation";

const PortfolioDetail = () => {
  const params = useParams();
  const router = useRouter();
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the service data by slug
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
        className="max-w-[1240px] mx-6 lg:mx-3 xl:mx-auto pt-24"
      />

      <BannerGallery banners={portfolioData?.banners} />
    </div>
  );
};

export default PortfolioDetail;
