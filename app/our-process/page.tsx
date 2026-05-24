import LetsTalkSection from "components/shared/LetsTalkSection";
import TrustedBrandsSection from "components/shared/TrustedBrandsSection";
import WhoWeAreSection from "components/our-process/WhoWeAreSection";
import PageBanner from "components/shared/PageBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <PageBanner
        title="How We Works"
        backgroundImage="/images/banners/our-process-banner.png"
      />
      <WhoWeAreSection />
      <LetsTalkSection />
      <TrustedBrandsSection />
    </div>
  );
};

export default page;
