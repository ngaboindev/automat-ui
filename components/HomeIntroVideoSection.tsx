/* eslint-disable @next/next/no-img-element */
import React from 'react';

const HomeIntroVideoSection = () => {
  return (
    <div className="relative">
      <img
        src="/home-video-section.jpeg"
        alt="Your Image"
        className="w-full  object-cover h-[70vh]"
      />
      <div className="absolute inset-0 bg-tertiary bg-opacity-50 ">
        <div className="wrapper text-white h-[70vh] text-center relative flex items-center justify-center">
          <div className="space-y-4">
            <h2 className="text-5xl font-medium leading-tight">
              Artificial Intelligence is the new <br /> big thing in technology
            </h2>
            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, <br /> pulvinar dapibus
              leo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIntroVideoSection;
