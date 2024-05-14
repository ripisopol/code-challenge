"use client"
import type React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import FadeUpOnScroll from '../../../components/FadeUpOnScroll'


interface StrukturProps {
  images: string[];
}

const Struktur: React.FC<StrukturProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section >
      <FadeUpOnScroll>
        <div className="flex flex-col items-center my-20">

          <span className="text-6xl font-bold text-center text-pink-600 mb-20">Struktur Organisasi</span>
          <div className="relative max-w-full max-h-full mb-4">
            <Image
              src={images[currentIndex]}
              alt="Image"
              width={1000}
              height={800}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-pink-50 hover:bg-pink-100 text-gray-800 font-bold p-3 rounded-full mr-2"
              onClick={handlePrevClick}
            >
              &larr;
            </button>
            <button
              type="button"
              className="bg-pink-50 hover:bg-pink-100 text-gray-800 font-bold p-3 rounded-full ml-2"
              onClick={handleNextClick}
            >
              &rarr;
            </button>
          </div>
        </div>
      </FadeUpOnScroll>

    </section>
  );
};

export default Struktur;
