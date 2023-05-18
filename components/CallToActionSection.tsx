/* eslint-disable @next/next/no-img-element */
import React from 'react';

const CallToActionSection = () => {
  return (
    <div className="relative">
      <img
        src="/call-to-action-banner.jpeg"
        alt="Your Image"
        className="w-full  object-cover h-[70vh]"
      />
      <div className="absolute inset-0 bg-tertiary bg-opacity-50 flex justify-center items-center">
        <div className="wrapper max-w-4xl">
          <div className="text-center text-white space-y-6">
            <h2 className="text-3xl lg:text-5xl font-medium">
              We’re helping to automate some of the world’s most complex and
              difficult problems.
            </h2>
            <p className="text-sm md:text-base font-light leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="btn btn-primary">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
