import BusinessNextLevelSection from "components/difference/BusinessNextLevelSection";
import WhyPlannersChooseDXGSection from "components/home/WhyPlannersChooseDXGSection";
import PageBanner from "components/shared/PageBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <PageBanner
        title="The DXG Difference"
        backgroundImage="/images/banners/our-difference-banner.png"
      />
      <WhyPlannersChooseDXGSection />
      <BusinessNextLevelSection />
    </div>
  );
};

export default page;
