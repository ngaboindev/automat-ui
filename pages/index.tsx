import CallToActionSection from '../components/CallToActionSection';
import CustomersSection from '../components/CustomersSection';
import Footer from '../components/Footer';
import HomeHeaderSection from '../components/HomeHeaderSection';
import HomeIntroSection from '../components/HomeIntroSection';
import HomeIntroVideoSection from '../components/HomeIntroVideoSection';
import InfoSection from '../components/InfoSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from '../components/TestimonialSection';

export default function Home() {
  return (
    <>
      <HomeHeaderSection />
      <HomeIntroSection />
      <HomeIntroVideoSection />
      <ServicesSection />
      <TestimonialSection />
      <InfoSection />
      <CallToActionSection />
      <CustomersSection />
      <Footer />
    </>
  );
}
