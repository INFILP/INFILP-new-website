"use client";
import React from "react";
import AppHero from "./AppHero";
import AISection from "./AISection";
import InfoSection from "./InfoSection";
import Bestservices from "./Bestservices";
import FAQs from "./Faqs";
import { useParams } from "next/navigation";
import servicesData from "../../../data/services.json";
import { useState, useEffect } from "react";
import BuildBanner from "@/components/BuildBanner";
import Portfolio from "./Portfolio";

const serviceDetails = () => {
  const params = useParams();
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundService = servicesData.find(
      (service) => service.slug === params.slug
    );
    console.log(foundService, "this is foundService");
    if (foundService) {
      setServiceData(foundService);
    }
    setLoading(false);
  }, [params.slug]);

  console.log("Services Data:", serviceData?.services_section.services);

  return (
    <div>
      <AppHero
        subtitle={serviceData?.hero_section.main_heading}
        title={serviceData?.hero_section.sub_heading}
      />
      <AISection
        highlightText={serviceData?.company_description.subtext}
        mainText={serviceData?.company_description.text}
        className="bg-gray-50"
      />
      <InfoSection
        title={serviceData?.problems_section.heading}
        highlightWord={serviceData?.problems_section.sub_heading}
        subtitle={serviceData?.problems_section.subtitle}
        subdescription={serviceData?.problems_section.sub_content}
        description={serviceData?.problems_section.discription}
        imageSrc={serviceData?.problems_section.image || "/images/team1.webp"}
        imageAlt="Team working on AI development"
        layout={serviceData?.problems_section.direction}
      />
      <InfoSection
        title={serviceData?.team_section.heading}
        highlightWord={serviceData?.team_section.sub_heading}
        subtitle={serviceData?.team_section.content}
        description={serviceData?.team_section.sub_content}
        buttonText={serviceData?.team_section.cta_button}
        imageSrc={serviceData?.team_section.image || "/images/team2.webp"}
        imageAlt="Mobile app mockup showing Gen AI tools"
        layout={serviceData?.team_section.direction}
      />
      {serviceData?.services_section?.services && (
        <Bestservices
          title="What We Do"
          highlightWord="Best"
          services={serviceData?.services_section.services}
        />
      )}
      <Portfolio />
      <FAQs />
      <div className="py-16 px-4 md:py-24 lg:py-48">
        <BuildBanner
          topText="Turn your idea into reality"
          mainText="Ready to build something great?"
          buttonText="Get Started"
          onClick={() => console.log("Button clicked!")}
          delay={0.2}
        />
      </div>
    </div>
  );
};

export default serviceDetails;
