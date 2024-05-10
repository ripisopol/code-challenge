import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="container mx-auto p-4 md:flex md:justify-between md:items-center relative">
            <Link href="/" className="text-cyan-600 text-2xl font-semibold whitespace-nowrap">
              BEdigital
            </Link>

            <div className="md:flex md:w-auto">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
                <li>
                  <Link href="/about" className="block py-2 px-3 text-cyan-600 rounded hover:bg-cyan-100 hover:text-cyan-500 md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="block py-2 px-3 text-cyan-600 rounded hover:bg-cyan-100 hover:text-cyan-500 md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/teams" className="block py-2 px-3 text-cyan-600 rounded hover:bg-cyan-100 hover:text-cyan-500 md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Teams
                  </Link>
                </li>
              </ul>
            </div>


          </div>
          <div className="bg-white">
            <div className="container mx-auto p-4">
              <div className="flex justify-between items-center">
                <p className="text-cyan-600 text-xs">BCA Digital berizin dan diawasi oleh Otoritas Jasa Keuangan. <br />
                  BCA Digital merupakan peserta penjaminan LPS. </p>
                <nav className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                  <Link href="/" className="text-cyan-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      <title>Facebook</title>
                    </svg>
                  </Link>
                  <Link href="/" className="ml-3 text-cyan-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      <title>Twitter</title>
                    </svg>
                  </Link>
                  <Link href="/" className="ml-3 text-cyan-500">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      <title>Instagram</title>
                    </svg>
                  </Link>
                  <Link href="/" className="ml-3 text-cyan-500">
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

      <div className="bg-gray-100  mt-auto">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center">
            <p className="text-cyan-600 text-xs">Terima kasih sudah mampir! Laman ini lebih nyaman dinikmati di ponsel pintar. Coba sekarang untuk pengalaman yang lebih maksimal.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-500  mt-auto">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center">
            <p className="text-white text-xs">Nilai simpanan maksimum yang dijamin oleh LPS sebesar Rp 2.000.000.000 (dua miliar rupiah)
              dengan tingkat bunga penjaminan maksimum sebesar 4.25% (empat koma dua lima persen) untuk rupiah sesuai ketentuan yang berlaku. Klik disini untuk mengunduh bukti kepesertaan kami.</p>
          </div>
        </div>
      </div>

    </footer >

  )
}

export default Footer