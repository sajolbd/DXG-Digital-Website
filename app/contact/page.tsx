import CalendlySection from "components/contact/CalendlySection";
import ContactFormSection from "components/contact/ContactFormSection";
import GoogleMapSection from "components/contact/GoogleMapSection";
import PageBanner from "components/shared/PageBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <PageBanner
        title="Contact Us"
        backgroundImage="/images/banners/contact-banner.png"
      />
      {/* <ContactFormSection /> */}
      <CalendlySection />
      <GoogleMapSection />
    </div>
  );
};

export default page;
