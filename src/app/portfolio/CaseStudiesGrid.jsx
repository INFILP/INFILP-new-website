"use client";

import React from "react";
import Cards from "../../components/Cards";
import WQBOHeroSection from "../../components/WQBOHeroSection";
import cardsData from "../../data/cards.json";

const CaseStudiesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {cardsData.map((item, index) => {
        if (item.slug === "wobo" || item.slug === "heurica") {
          return (
            <div key={index} className="col-span-1 md:col-span-2">
              <WQBOHeroSection
                title={item.title}
                highlightedWord={item.highlightedWord}
                heading={item.heading}
                logo={item.logo}
                image={item.image}
                backgroundColor={item.backgroundColor}
                underlineColor={item.underlineColor}
                textColor={item.textColor}
                slug={item.slug}
              />
            </div>
          );
        }

        return (
          <div key={index}>
            <Cards
              logoSrc={item.logo.src}
              logoAlt={item.logo.alt}
              title={item.title}
              imageSrc={item.image.src}
              imageAlt={item.image.alt}
              backgroundColor={item.backgroundColor}
              delay={item.delay}
              showBanner={item.showBanner}
              slug={item.slug}
              onClick={() => console.log(item.onClick)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CaseStudiesGrid;
