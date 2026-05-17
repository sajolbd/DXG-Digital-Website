import ChallengesHeroSection from "components/home/ChallengesHeroSection";
import ServicesGridSection from "components/problems-we-solve/ServicesGridSection";
import LetsTalkSection from "components/shared/LetsTalkSection";
import PageBanner from "components/shared/PageBanner";
import TrustedBrandsSection from "components/shared/TrustedBrandsSection";
import React from "react";

const page = () => {
  return (
    <div>
      <PageBanner
        title="The Problem Most Planners Face +"
        backgroundImage="/images/banners/problems-we-solve-banner.png"
      />
      <ServicesGridSection />
      <ChallengesHeroSection />
      <LetsTalkSection />
      <TrustedBrandsSection />
    </div>
  );
};

export default page;
