"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleNavigation = () => {
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('popstate', handleNavigation);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  return (
    <nav className="bg-pink-600 mt-auto">
      <div className="container mx-auto px-4 py-10 md:flex md:justify-between md:items-center relative">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse text-white self-center text-2xl font-semibold whitespace-nowrap">
          BEdigital
        </Link>
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="absolute top-8 right-2  md:relative md:hidden inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-white rounded-lg hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-600"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`md:flex md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-white md:border-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-pink-600 ">
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-white rounded hover:bg-pink-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-200 md:p-0"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2 px-3 text-white rounded hover:bg-pink-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-200 md:p-0"
                onClick={toggleMobileMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/teams"
                className="block py-2 px-3 text-white rounded hover:bg-pink-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-200 md:p-0"
                onClick={toggleMobileMenu}
              >
                Teams
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;