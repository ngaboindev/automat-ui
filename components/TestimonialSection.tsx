/* eslint-disable @next/next/no-img-element */
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
        className="w-full object-cover"
      />
      <div className="absolute  py-24 inset-0 bg-tertiary bg-opacity-50">
        <div className="wrapper text-white text-center">
          <div className="space-y-5 pb-16 text-white">
            <h6 className="text-primary uppercase tracking-wider font-light">
              TESTIMONIAL
            </h6>
            <h2 className="text-5xl  font-medium">What they say</h2>
            <p className="font-light leading-normal">
              Sit efficitur integer vivamus vel auctor enim urna elementum
              aenean senectus parturient. Pellentesque lorem porta volutpat
              litora enim quam elit justo phasellus.
            </p>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
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
