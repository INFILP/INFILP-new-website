"use client";

import { motion, useInView } from "framer-motion";
import React from "react";
import CaseStudiesGrid from "./CaseStudiesGrid";
import AppHero from "../serviceDetails/[slug]/AppHero";
import BuildBanner from "@/components/BuildBanner";

const Portfolio = () => {
  return (
    <div>
      <AppHero
        subtitle="Mobile & web apps that "
        title="Drive Businesses Forward."
      />
      <div className="max-w-[1240px] mx-auto items-center justify-center pt-16 ">
        <CaseStudiesGrid />
        <div className="pt-16">
          <BuildBanner />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
