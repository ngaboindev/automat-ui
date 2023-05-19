import React from 'react';
import Navbar from './Navbar';
import { IoIosArrowForward } from 'react-icons/io';

const ContactHeaderSection = () => {
  return (
    <div className="relative bg-tertiary-100">
      <div className="bg-services-header-overlay w-full"></div>
      <Navbar />
      <div className="py-28 text-center text-white">
        <h1 className="text-7xl font-semibold ">Contact Us</h1>
        <div className="text-2xl font-extralight flex items-center justify-center py-6 gap-3">
          <p>Home</p>
          <span className="text-primary">
            <IoIosArrowForward />
          </span>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeaderSection;
