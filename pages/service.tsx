import React from 'react';
import Head from 'next/head';
import HomeIntroVideoSection from '../components/HomeIntroVideoSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from '../components/TestimonialSection';
import InfoSection from '../components/InfoSection';
import CustomersSection from '../components/CustomersSection';
import Footer from '../components/Footer';
import ServicesHeaderSection from '../components/ServicesHeaderSection';

const service = () => {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <ServicesHeaderSection />
      <ServicesSection />
      <HomeIntroVideoSection />
      <TestimonialSection />
      <Footer />
    </>
  );
};

export default service;
