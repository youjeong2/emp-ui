import React from "react";
import tw from "twin.macro";
import { Link } from 'react-router-dom'; //eslint-disable-line
import AnimationRevealPage from "./AnimationRevealPage.js";
// import Header from "./common/header-practice.js"
import Hero from "./BackgroundAsImageWithCenteredContent.js";
import Features from "./VerticalWithAlternateImageAndText.js";
import Blog from "./Blogs.js";
import Testimonial from "./TwoColumnWithImage.js";
import ContactUsForm from "./SimpleContactUs.js";
import Footer from "./SimpleFiveColumn.js";

import HeaderBase from "./common/Headers.js";

const Header = tw(HeaderBase)`max-w-none`;

const Home = () => <div className="home">
  <Header />
  <AnimationRevealPage>
    <Hero />
    <Features />
    <Blog />
    <Testimonial />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
</div>

export default Home
