"use client";

import React, { useMemo } from "react";
import Cards from "../../components/Cards";
import WQBOHeroSection from "../../components/WQBOHeroSection";
import cardsData from "../../data/cards.json";

const CaseStudiesGrid = (relatedProjectSlugs = []) => {
  const actualSlugs =
    relatedProjectSlugs?.relatedProjectSlugs || relatedProjectSlugs;

  const cardsToRender = useMemo(() => {
    let slugsArray = [];

    if (Array.isArray(actualSlugs)) {
      slugsArray = actualSlugs;
    } else if (actualSlugs && typeof actualSlugs === "object") {
      const keys = Object.keys(actualSlugs);

      if (keys.every((key) => !isNaN(key))) {
        slugsArray = keys.map((key) => actualSlugs[key]);
      } else {
        slugsArray = Object.values(actualSlugs);
      }
    } else if (typeof actualSlugs === "string") {
      slugsArray = [actualSlugs];
    }

    slugsArray = slugsArray.filter(
      (slug) => typeof slug === "string" && slug.trim().length > 0
    );

    if (slugsArray.length === 0) {
      console.log("No valid slugs, returning all cards");
      return cardsData;
    }

    try {
      const relatedCards = cardsData.filter((card) => {
        if (!card || !card.slug) return false;
        return slugsArray.includes(card.slug);
      });

      return relatedCards.length > 0 ? relatedCards : cardsData;
    } catch (error) {
      console.error("Error filtering related cards:", error);
      return cardsData;
    }
  }, [actualSlugs]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {cardsToRender.map((item, index) => {
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
