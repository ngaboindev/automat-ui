import Head from 'next/head';
import React from 'react';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';
import ContactHeaderSection from '../components/ContactHeaderSection';
import SocialMediaSection from '../components/SocialMediaSection';
import ContactGetInTouchSection from '../components/ContactGetInTouchSection';

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactHeaderSection />
      <ContactGetInTouchSection />
      <CallToActionSection />
      <SocialMediaSection />
      <Footer />
    </>
  );
};

export default contact;
