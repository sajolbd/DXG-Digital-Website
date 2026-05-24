import ExperiencesCreatedCardSection from "components/experiences-created/ExperiencesCreatedCardSection";
import PageBanner from "components/shared/PageBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <PageBanner
        title="Experiences We've Created"
        backgroundImage="/images/banners/experiences-created-banner.png"
      />
      <ExperiencesCreatedCardSection />
    </div>
  );
};

export default page;
