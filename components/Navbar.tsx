import Image from 'next/image';
import React, { useState } from 'react';
import NavbarLink from './NavbarLink';
import { useRouter } from 'next/router';
const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About Us',
    href: '/about',
  },
  {
    name: 'Service',
    href: '/service',
    navList: [
      {
        name: 'Single Service',
        href: '/service',
      },
    ],
  },
  {
    name: 'Project',
    href: '/project',
  },
  {
    name: 'Contact Us',
    href: '/contact',
  },
  {
    name: 'Page',
    href: '/page',
    navList: [
      {
        name: 'Team',
        href: '/team',
      },
      {
        name: 'Help Center',
        href: '/help-center',
      },
    ],
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6 px-4">
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            className="mr-3"
            width="150"
            height="150"
            alt="logo"
          />
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-white hover:text-primary bg-neutral rounded-sm md:hidden  focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-7 h-7"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={`${!isMenuOpen && 'hidden'} w-full md:block md:w-auto`}>
          <ul className="flex items-center flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {navLinks.map((navList) => (
              <NavbarLink
                key={navList.name}
                href={navList.href}
                isActive={router.asPath === navList.href}
                linkList={navList.navList}
              >
                {navList.name}
              </NavbarLink>
            ))}
            <li>
              <button className="btn btn-primary">get started</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
