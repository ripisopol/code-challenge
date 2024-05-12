"use client"
// components/ImageSwitcher.tsx
import type React from 'react';
import { useState } from 'react';
import Image from 'next/image';

interface ImageSwitcherProps {
  images: string[];
}

const ImageSwitcher: React.FC<ImageSwitcherProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-2 text-teal-600">Struktur Organisasi</h2>
      <div className="flex justify-center items-center mb-4">
        <button
        type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={handlePrevClick}
        >
          &larr;
        </button>
        <div className="relative w-96 h-72">
          <Image
            src={images[currentIndex]}
            alt="Image"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <button
        type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={handleNextClick}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default ImageSwitcher;