/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const CustomersSection = () => {
  const logos = [
    {
      id: 1,
      src: 'https://show.moxcreative.com/automaton/wp-content/uploads/sites/16/2021/11/lighting.png',
      alt: 'Logo 1',
    },
    {
      id: 2,
      src: 'https://show.moxcreative.com/automaton/wp-content/uploads/sites/16/2021/11/earth.png',
      alt: 'Logo 2',
    },
    {
      id: 3,
      src: 'https://show.moxcreative.com/automaton/wp-content/uploads/sites/16/2021/11/ideaa.png',
      alt: 'Logo 3',
    },
    {
      id: 4,
      src: 'https://show.moxcreative.com/automaton/wp-content/uploads/sites/16/2021/11/fox-hub-2.png',
      alt: 'Logo 4',
    },
    {
      id: 5,
      src: 'https://show.moxcreative.com/automaton/wp-content/uploads/sites/16/2021/11/atica.png',
      alt: 'Logo 5',
    },
    {
      id: 5,
      src: 'https://show.moxcreative.com/automaton/wp-content/uploads/sites/16/2021/11/asgardia.png',
      alt: 'Logo 5',
    },
    {
      id: 6,
      src: 'https://show.moxcreative.com/automaton/wp-content/uploads/sites/16/2021/11/cod-lab.png',
      alt: 'Logo 6',
    },
    {
      id: 7,
      src: 'https://show.moxcreative.com/automaton/wp-content/uploads/sites/16/2021/11/a-lab.png',
      alt: 'Logo 7',
    },
  ];
  return (
    <div className="bg-accent pt-28 pb-56">
      <div className="wrapper">
        <div className="space-y-5 text-center text-white pb-20">
          <h2 className="text-3xl lg:text-5xl  font-medium">
            Our Valued Customers
          </h2>
          <p className="font-light leading-normal text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={6}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
          autoplay={{ delay: 2000 }}
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="bg-white w-full h-[200px] flex items-center justify-center">
                <img src={logo.src} alt="" className="w-28" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomersSection;
