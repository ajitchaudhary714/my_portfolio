import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Section from "./_components/Section";
import Price from "./_components/Price";
import Testimonials from "./_components/Testimonial";
import Footer from "./_components/Footer";
const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Header />
      <Hero />
      <Features />
      <Section />
      <Price />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
