/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ServicesSectionNumbersCard from './ServicesSectionNumbersCard';

const HomeIntroVideoSection = () => {
  return (
    <div className="relative">
      <img
        src="/home-video-section.jpeg"
        alt="Your Image"
        className="w-full object-cover h-screen lg:h-[70vh]"
      />
      <div className="absolute inset-0 bg-tertiary bg-opacity-50">
        <div className="wrapper text-white h-screen lg:h-[70vh] text-center relative flex flex-col items-center justify-center">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-medium leading-tight">
              Artificial Intelligence is the new big thing in technology
            </h2>
            <p className="text-sm lg:text-base font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <ServicesSectionNumbersCard />
        </div>
      </div>
    </div>
  );
};

export default HomeIntroVideoSection;
