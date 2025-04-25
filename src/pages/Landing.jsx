import React from 'react';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import USP from '../components/landing/USP';
import CallToAction from '../components/landing/CallToAction';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Landing = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <Hero />
      <Features />
      <USP />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Landing;