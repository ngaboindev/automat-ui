/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Navbar from './Navbar';

const HomeHeaderSection = () => {
  return (
    <div className="relative">
      <img
        src="/home-header-banner.jpeg"
        alt="Your Image"
        className="w-full  object-cover h-screen"
      />
      <div className="absolute inset-0 bg-tertiary bg-opacity-50 ">
        <Navbar />

        <div className="wrapper text-white relative top-1/3 lg:top-[38%] -translate-y-1/2">
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-7xl font-semibold">
              Artificial Intelligence for Business Applications
            </h1>
            <p className="text-lg lg:text-2xl font-extralight">
              Ipsum amet aptent molestie finibus euismod sociosqu hac duis curae
              in
            </p>
            <button className="btn btn-primary">Discover more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeaderSection;
