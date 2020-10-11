import React from "react";
import tw from "twin.macro";
import "tailwindcss/dist/base.css";
import "../styles/globalStyles.css";
import AnimationRevealPage from "./AnimationRevealPage.js";
import Hero from "./TwoColumnWithPrimaryBackground.js";
import Pricing from "./ThreePlansWithHalfPrimaryBackground.js";
import FAQ from "./TwoColumnPrimaryBackground.js";
import Footer from "./FiveColumnDark.js";

import HeaderBase from "../home/common/Headers.js";

const Header = tw(HeaderBase)`max-w-none`;

export default () => {
  return (
    <div>
      <Header />
      <AnimationRevealPage>
        <Hero />
        {/* <Features /> */}
        <Pricing />
        {/* <MainFeature 
          subheading="Reliable"
          heading="Highly Redundant Servers With Backup"
          imageSrc={serverRedundancyIllustrationImageSrc}
          buttonRounded={false}
        />
        <MainFeature 
          subheading="Secure"
          heading="State of the Art Computer Security"
          imageSrc={serverSecureIllustrationImageSrc}
          buttonRounded={false}
          textOnLeft={false}
        /> */}
        {/* <Testimonial /> */}
        <FAQ />
        <Footer />
      </AnimationRevealPage>
    </div>
  );
}
