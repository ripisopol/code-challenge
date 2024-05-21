import React from 'react'
import Link from 'next/link'
import FadeUpOnScroll from "./FadeUpOnScroll";



const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-pink-600 body-font">
      <FadeUpOnScroll>
        <div className="bg-pink-600 py-10">
          <div className="container mx-auto">
            <div className="container mx-auto p-4 md:flex md:justify-between md:items-center relative">
              <Link href="/" className="text-white text-2xl font-semibold whitespace-nowrap">
                BEdigital
              </Link>

              <div className="md:flex md:w-auto">
                <ul className="font-medium flex flex-col md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
                  <li>
                    <Link href="/about" className="block py-2 md:px-3 text-white rounded hover:bg-pink-700 hover:bg-transparent hover:text-gray-200">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="block py-2 md:px-3 text-white rounded hover:bg-pink-700 hover:bg-transparent hover:text-gray-200 ">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/teams" className="block py-2 md:px-3 text-white rounded hover:bg-pink-700 hover:bg-transparent hover:text-gray-200">
                      Teams
                    </Link>
                  </li>
                </ul>
              </div>


            </div>
            <div className="bg-pink-600">
              <div className="container mx-auto p-4">
                <div className="flex justify-between items-center">
                  <p className="text-white text-xs text-justify">
                    BE Digital berizin dan diawasi oleh yang Otoritas Jasa Keuangan dan Bank Negara Pasundan. <br />
                    BE Digital merupakan peserta penjaminan LPS.
                  </p>
                  <nav className="inline-flex w-full justify-center md:justify-start md:w-auto gap-x-0 md:gap-x-4">
                    <Link href="https://pranx.com/maze/" className="text-white p-4 bg-pink-600 hover:bg-pink-700 rounded-full">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        <title>Facebook</title>
                      </svg>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=RaPJxvGwzlo" className="text-white p-4 bg-pink-600 hover:bg-pink-700 rounded-full">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        <title>Twitter</title>
                      </svg>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs" className="text-white p-4 bg-pink-600 hover:bg-pink-700 rounded-full">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                        <title>Instagram</title>
                      </svg>
                    </Link>
                    <Link href="https://i.imgur.com/ap1Sq.gif" className="text-white p-4 bg-pink-600 hover:bg-pink-700 rounded-full">
                      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" stroke="none" />
                        <title>LinkedIn</title>
                      </svg>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-pink-800  mt-auto">
          <div className="container mx-auto p-4">
            <div className="flex justify-between items-center">
              <p className="text-white text-xs">
                Terima kasih sudah mampir! Laman ini lebih nyaman dinikmati di ponsel pintar. Coba sekarang untuk pengalaman yang lebih maksimal.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-500  mt-auto">
          <div className="container mx-auto p-4">
            <div className="flex justify-between items-center">
              <p className="text-white text-xs">&copy;Bank Emok digital - 2024 </p>
            </div>
          </div>
        </div>
      </FadeUpOnScroll>


    </footer >

  )
}

export default Footer