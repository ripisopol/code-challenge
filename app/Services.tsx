import React from 'react'
import Image from'next/image';
import Link from 'next/link'

const Services = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <Image src="/app.webp" width={200} height={200} alt="" className="border border-cyan-100 bg-cyan-200 p-4 rounded-full flex justify-center items-center mx-auto" />
          <h1 className="mb-4 py-4 text-4xl font-extrabold tracking-tight leading-none text-cyan-900 md:text-5xl lg:text-6xl dark:text-white">blu by BE digital</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-cyan-400">Aplikasi mobile bank digital yang bisa ini itu, dan menyatu dengan hidupmu.</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Selengkapnya
            </Link>
          </div>
        </div>
      </section>
  )
}

export default Services