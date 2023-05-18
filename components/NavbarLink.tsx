import Link from 'next/link';
import React, { useState } from 'react';

const NavbarLink = ({ href, isActive, linkList, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <Link
        href={href}
        className={`flex relative  items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 md:w-auto ${
          isHovered || isActive ? 'text-primary' : ''
        } `}
      >
        {children}
        {linkList && (
          <svg
            className="w-5 h-5 ml-1"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </Link>
      <div className="pt-3" />
      {/* Dropdown menu */}
      {linkList && isHovered && (
        <div className="z-10 absolute  font-normal bg-white divide-y divide-gray-100 rounded-sm text-center w-36">
          <ul className="py-2 text-sm text-neutral">
            {linkList.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 hover:bg-gray-100 "
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavbarLink;
