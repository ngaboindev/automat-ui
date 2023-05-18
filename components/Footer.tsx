/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ContactUsFormCard from './ContactUsFormCard';
import Image from 'next/image';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  const footerLinks = [
    {
      name: 'About us',
      href: '#',
    },
    {
      name: 'Contact us',
      href: '#',
    },
    {
      name: 'Term or use',
      href: '#',
    },
    {
      name: 'Privacy Policy',
      href: '#',
    },
    {
      name: 'Cookie Policy',
      href: '#',
    },
  ];

  return (
    <div className="relative">
      <img
        src="/footer-banner.jpeg"
        alt="Your Image"
        className="w-full  object-cover h-screen lg:h-[65vh]"
      />
      <div className="absolute inset-0 bg-tertiary bg-opacity-50">
        <div className="wrapper">
          <ContactUsFormCard />
          <div className="pt-32">
            <div className="grid grid-cols-3 gap-3">
              <div>
                <a href="#" className="flex items-center">
                  <Image
                    src="/logo.png"
                    className="mr-3"
                    width="150"
                    height="150"
                    alt="logo"
                  />
                </a>
              </div>
              <ul className="flex col-span-2  justify-end gap-6 text-white font-extralight pb-4 border-b border-gray-700 w-full">
                {footerLinks.map((footerLink) => (
                  <li key={footerLink.name} className="group">
                    <a
                      href="#"
                      className="group-hover:text-primary text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 transition-all group-hover:bg-secondary bg-primary rounded-full"></span>
                      <span>{footerLink.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-4 flex justify-between text-white">
              <div className="flex gap-3 items-center">
                <div className="w-6 h-6 rounded-sm cursor-pointer duration-500 transition-transform hover:-translate-y-2 flex justify-center items-center bg-primary text-white">
                  <FaFacebookF />
                </div>
                <div className="w-6 h-6 rounded-sm cursor-pointer duration-500 transition-transform hover:-translate-y-2 flex justify-center items-center bg-primary text-white">
                  <FaLinkedinIn />
                </div>
                <div className="w-6 h-6 rounded-sm cursor-pointer duration-500 transition-transform hover:-translate-y-2 flex justify-center items-center bg-primary text-white">
                  <FaTwitter />
                </div>
                <div className="w-6 h-6 rounded-sm cursor-pointer duration-500 transition-transform hover:-translate-y-2 flex justify-center items-center bg-primary text-white">
                  <FaYoutube />
                </div>
              </div>
              <p className="text-sm font-light">
                Copyright © 2021 Automaton, All rights reserved. Powered by
                MoxCreative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
