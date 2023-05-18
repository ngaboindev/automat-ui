/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import TestimonialCard from './TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const TestimonialSection = () => {
  const testimonals = [
    {
      id: 1,
      message:
        'Cursus risus lacinia viverra integer nec natoque nostra. Vehicula consectetuer aliquet taciti luctus neque facilisis congue praesent. Ligula augue consectetur fames aptent volutpat lectus.',
      name: 'Rita D Oconnell',
      title: 'Designation',
    },
    {
      id: 2,
      message:
        'Cursus risus lacinia viverra integer nec natoque nostra. Vehicula consectetuer aliquet taciti luctus neque facilisis congue praesent. Ligula augue consectetur fames aptent volutpat lectus.',
      name: 'Rita D Oconnell',
      title: 'Designation',
    },
    {
      id: 3,
      message:
        'Cursus risus lacinia viverra integer nec natoque nostra. Vehicula consectetuer aliquet taciti luctus neque facilisis congue praesent. Ligula augue consectetur fames aptent volutpat lectus.',
      name: 'Rita D Oconnell',
      title: 'Designation',
    },
    {
      id: 4,
      message:
        'Cursus risus lacinia viverra integer nec natoque nostra. Vehicula consectetuer aliquet taciti luctus neque facilisis congue praesent. Ligula augue consectetur fames aptent volutpat lectus.',
      name: 'Rita D Oconnell',
      title: 'Designation',
    },
  ];

  return (
    <div className="relative">
      <img
        src="/testimonal-section-banner.jpeg"
        alt="Your Image"
        className="w-full object-cover h-[96vh]"
      />
      <div className="absolute pt-24 inset-0 bg-tertiary bg-opacity-50">
        <div className="wrapper text-white text-center">
          <div className="space-y-5 pb-16 text-white">
            <h6 className="text-sm lg:text-base text-primary uppercase tracking-wider font-light">
              TESTIMONIAL
            </h6>
            <h2 className="text-3xl lg:text-5xl  font-medium">What they say</h2>
            <p className="text-sm lg:text-base font-light leading-normal">
              Sit efficitur integer vivamus vel auctor enim urna elementum
              aenean senectus parturient. Pellentesque lorem porta volutpat
              litora enim quam elit justo phasellus.
            </p>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            loop={true}
            autoplay={{ delay: 2000 }}
          >
            {testimonals.map((testimonal) => (
              <SwiperSlide key={testimonal.id}>
                <TestimonialCard
                  title={testimonal.title}
                  message={testimonal.message}
                  name={testimonal.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
