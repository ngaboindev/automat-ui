import React from 'react';
import ServicesSectionNumbersCard from './ServicesSectionNumbersCard';
import ServicesList from './ServicesList';
import { BsFillLayersFill } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';
import { TbCertificate } from 'react-icons/tb';

const ServicesSection = () => {
  return (
    <div className="bg-accent py-24">
      <div className="wrapper">
        <div className="pt-32">
          <div className="grid px-9  grid-cols-2 text-white">
            <div className="space-y-5">
              <h6 className="text-primary uppercase tracking-wider font-light">
                ABOUT SERVICE
              </h6>
              <h2 className="text-5xl  font-medium">
                Artificial Intelligence <br /> for Business
                <br /> Applications
              </h2>
            </div>
            <div className="space-y-5 flex flex-col justify-between">
              <p className="font-light leading-normal">
                Sit efficitur integer vivamus vel auctor enim urna elementum
                aenean senectus parturient. Pellentesque lorem porta volutpat
                litora enim quam elit justo phasellus.
              </p>
              <button className="btn btn-primary w-fit">Discover more</button>
            </div>
          </div>
          <ServicesList />
          <div className="text-center pt-7 text-white">
            <div className="space-y-5">
              <h6 className="text-primary uppercase tracking-wider font-light">
                WHY CHOOSE US
              </h6>
              <h2 className="text-5xl  font-medium">
                Artificial intelligence will help everyone succeed
              </h2>
              <p className="font-light leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="grid grid-cols-3 pt-36  gap-3">
              <div className="text-center space-y-3">
                <div className="text-primary flex items-center justify-center text-5xl">
                  <BsFillLayersFill />
                </div>
                <h4 className="text-primary text-2xl font-light">Solutions</h4>
                <p className="font-light leading-normal">
                  Vivamus condimentum praesent duis himenaeos netus diam gravida
                  tempor tristique
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-primary flex items-center justify-center text-5xl">
                  <TbCertificate />
                </div>
                <h4 className="text-primary text-2xl font-light">
                  Certified Expert
                </h4>
                <p className="font-light leading-normal">
                  Vivamus condimentum praesent duis himenaeos netus diam gravida
                  tempor tristique
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-primary flex items-center justify-center text-5xl">
                  <AiOutlineMessage />
                </div>
                <h4 className="text-primary text-2xl font-light">
                  24/7 Support
                </h4>
                <p className="font-light leading-normal">
                  Vivamus condimentum praesent duis himenaeos netus diam gravida
                  tempor tristique
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
