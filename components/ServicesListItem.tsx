/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ServicesListItem = ({ title, icon, description }) => {
  return (
    <div className="relative group">
      <img
        src="/home-header-banner.jpeg"
        alt="Your Image"
        className="w-full  object-cover h-[350px]"
      />
      <div className="absolute inset-0 bg-tertiary transition-all duration-200 bg-opacity-100 group-hover:bg-opacity-75 flex justify-center items-center">
        <div className="text-center space-y-6 px-12 text-white relative transition-all duration-700 group-hover:-translate-y-4">
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 p-7 flex items-center justify-center rounded-full border border-white text-white text-4xl">
              {icon}
            </div>
          </div>
          <h4 className="text-primary text-2xl font-light">{title}</h4>
          <p className="font-light">{description}</p>
          <button className="btn btn-primary">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesListItem;
