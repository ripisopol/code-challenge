"use client"
import type React from 'react';
import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white mt-auto">
      <div className="container mx-auto p-4 md:flex md:justify-between md:items-center relative">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-600 self-center text-2xl font-semibold whitespace-nowrap">
          BEdigital
        </Link>

        <button
          type="button"
          onClick={toggleMobileMenu}
          className="absolute top-4 right-4 md:relative md:hidden inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-cyan-600 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className={`md:flex md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/about" className="block py-2 px-3 text-cyan-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
            </li>
            <li>
              <Link href="/services" className="block py-2 px-3 text-cyan-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
            </li>
            <li>
              <Link href="/teams" className="block py-2 px-3 text-cyan-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Teams</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
