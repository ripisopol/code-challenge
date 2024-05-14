import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import FadeUpOnScroll from "../../components/FadeUpOnScroll";

const Services = () => {
  return (
    <section className="md:py-10 bg-pink-50">
      <FadeUpOnScroll>
      <div className="py-8 px-4 mx-auto max-w-screen text-center lg:py-16">
        <div className="bg-pink-50 shadow-lg md:shadow-none rounded-lg p-6 md:p-8 mx-auto ">
          <Image src="/app.webp" width={150} height={150} alt="" className="bg-pink-600 p-2 rounded-2xl flex justify-center items-center mx-auto" />
          <h1 className="mb-4 py-4 text-4xl font-extrabold tracking-tight leading-none text-pink-600 md:text-5xl lg:text-6xl">kirby by BE digital</h1>
          <p className="mb-8 text-lg font-normal text-black lg:text-xl">Aplikasi mobile bank digital yang bisa una inu, dan menyatu dengan hidupmu.</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link href="#" className="inline-flex justify-center items-center py-4 px-6 text-base font-medium text-center text-white rounded-full bg-pink-600 hover:underline">
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
      </FadeUpOnScroll>
      
    </section>
  )
}

export default Services