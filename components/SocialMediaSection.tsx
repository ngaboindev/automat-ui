import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const SocialMediaSection = () => {
  return (
    <div className="bg-accent pt-28 pb-56">
      <div className="wrapper text-center text-white  space-y-5">
        <h4 className="text-3xl lg:text-4xl leading-tight font-extralight">
          Follow our social media
        </h4>
        <div className="py-4 flex flex-col flex-wrap lg:flex-row justify-center items-center text-white">
          <div className="flex gap-2 items-center">
            <div className="w-12 h-12 rounded-sm cursor-pointer duration-500 transition-transform hover:-translate-y-2 flex justify-center items-center hover:bg-secondary bg-primary text-white text-2xl">
              <FaFacebookF />
            </div>
            <div className="w-12 h-12 rounded-sm cursor-pointer duration-500 transition-transform hover:-translate-y-2 flex justify-center items-center hover:bg-secondary bg-primary text-white text-2xl">
              <FaLinkedinIn />
            </div>
            <div className="w-12 h-12 rounded-sm cursor-pointer duration-500 transition-transform hover:-translate-y-2 flex justify-center items-center hover:bg-secondary bg-primary text-white text-2xl">
              <FaTwitter />
            </div>
            <div className="w-12 h-12 rounded-sm cursor-pointer duration-500 transition-transform hover:-translate-y-2 flex justify-center items-center hover:bg-secondary bg-primary text-white text-2xl">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
