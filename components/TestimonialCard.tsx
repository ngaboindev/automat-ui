/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { IoMdQuote } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';

const TestimonialCard = ({ message, name, title }) => {
  return (
    <div>
      <div
        className="bg-white/95 rounded-sm shadow relative flex flex-col items-center justify-between
  "
      >
        <div className="flex py-5 text-5xl text-[rgba(37,117,252,.2)] items-center justify-center text-neutral">
          <IoMdQuote />
        </div>
        <div className="px-8 py-10 text-neutral">
          <p>{message}</p>
        </div>
        <div className="grid grid-cols-5 pb-10 pt-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="text-xl text-yellow-400">
              <AiFillStar />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-3 items-center justify-center">
        <img
          className="w-16 h-16 rounded-full -mt-10 relative"
          src="https://show.moxcreative.com/automaton/wp-content/uploads/sites/16/2021/11/portrait-of-an-interesting-young-man-in-winter-clothes-1536x1536.jpg"
          alt="avatar"
        />
        <p className="text-white font-medium">{name}</p>
        <p className="text-neutral/95 text-sm">{title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
