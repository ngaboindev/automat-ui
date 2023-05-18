import React from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { ImDatabase } from 'react-icons/im';
import { MdCloudUpload } from 'react-icons/md';
import { BsShareFill } from 'react-icons/bs';

const InfoSection = () => {
  return (
    <div className="bg-accent py-24">
      <div className="wrapper text-white">
        <div className="text-center space-y-5 pb-24">
          <h2 className="text-3xl lg:text-5xl font-medium">
            The power of computers to intelligent machines.
          </h2>
          <p className="text-lg lg:text-2xl font-extralight">
            Whatever your current goals, our data analysts are here to support
            you at each stage of your data journey
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="text-center space-y-4">
            <div className="text-primary flex items-center justify-center text-3xl lg:text-5xl">
              <HiOutlineLightBulb />
            </div>
            <p className="text-base lg:text-xl text-primary ">
              Shine a light on dark data.
            </p>
            <p className="text-sm lg:text-base">
              Vivamus condimentum praesent duis himenaeos netus diam gravida
              tempor tristique
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="text-primary flex items-center justify-center text-3xl lg:text-5xl">
              <ImDatabase />
            </div>
            <p className="text-base lg:text-xl text-primary ">
              Transform data for new insights.
            </p>
            <p className="text-sm lg:text-base">
              Vivamus condimentum praesent duis himenaeos netus diam gravida
              tempor tristique
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="text-primary flex items-center justify-center text-3xl lg:text-5xl">
              <MdCloudUpload />
            </div>
            <p className="text-base lg:text-xl text-primary ">
              Fast response times.
            </p>
            <p className="text-sm lg:text-base">
              Vivamus condimentum praesent duis himenaeos netus diam gravida
              tempor tristique
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="text-primary flex items-center justify-center text-3xl lg:text-5xl">
              <BsShareFill />
            </div>
            <p className="text-base lg:text-xl text-primary ">
              Automate workflows.
            </p>
            <p className="text-sm lg:text-base">
              Vivamus condimentum praesent duis himenaeos netus diam gravida
              tempor tristique
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
