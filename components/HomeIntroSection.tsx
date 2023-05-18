/* eslint-disable @next/next/no-img-element */
import React from 'react';
import HomeIntroSectionCard from './HomeIntroSectionCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const HomeIntroSection = () => {
  const logos = [
    {
      id: 1,
      src: 'https://show.moxcreative.com/automaton/wp-content/uploads/sites/16/2021/11/logo-18.png',
      alt: 'Logo 1',
    },
    {
      id: 2,
      src: 'https://show.moxcreative.com/automaton/wp-content/uploads/sites/16/2021/11/logo-20.png',
      alt: 'Logo 2',
    },
    {
      id: 3,
      src: 'https://show.moxcreative.com/automaton/wp-content/uploads/sites/16/2021/11/logo-22.png',
      alt: 'Logo 3',
    },
    {
      id: 4,
      src: 'https://show.moxcreative.com/automaton/wp-content/uploads/sites/16/2021/11/logo-20.png',
      alt: 'Logo 4',
    },
  ];

  return (
    <div className="bg-accent py-24">
      <div className="wrapper">
        <HomeIntroSectionCard />
        <div className="pt-32">
          <div className="flex gap-16">
            <div className="relative w-1/2">
              <img
                height="720"
                src="/intro-section-banner.jpeg"
                className="w-full h-[500px] object-cover rounded-sm"
                alt="programming"
              />
              <div className="bg-white h-[162px] w-[250px] absolute bottom-0 right-0 flex items-center justify-center">
                <div className="text-center font-semibold text-neutral">
                  <h3 className="text-7xl">11</h3>
                  <p className="text-2xl font-light">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 pt-10 space-y-5 text-white">
              <h6 className="text-primary uppercase tracking-wider font-light">
                About Automaton
              </h6>
              <h2 className="text-5xl leading-tight font-medium">
                Artificial Intelligence for Business Applications.
              </h2>
              <p className="font-light leading-normal">
                Augue feugiat nam elit non tellus dignissim per netus conubia.
                Hac ut ullamcorper a sodales diam. Fusce mollis eget mus
                convallis massa iaculis duis facilisis turpis purus adipiscing.
              </p>
              <Swiper
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 2000 }}
              >
                {logos.map((logo) => (
                  <SwiperSlide key={logo.id}>
                    <img src={logo.src} alt={logo.alt} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIntroSection;
