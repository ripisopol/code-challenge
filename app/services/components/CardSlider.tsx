"use client"
import React, { useState, useEffect, useRef } from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
  color: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, color }) => (
  <div className={`p-6 rounded-lg shadow-md ${color} mx-2`} style={{ height: '400px' }}>
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <p className="text-gray-100">{description}</p>
    <img src={image} alt={title} className="mt-4" />
  </div>
);

const CardSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);

  const cards: CardProps[] = [
    {
      title: 'bluAccount',
      description: 'Buka rekening semudah itu!',
      image: '/bluAccount.png',
      color: 'bg-blue-500 text-white',
    },
    {
      title: 'bluSaving',
      description: 'Nabung sekaligus buat pos keluargan. Suku bunga 3% p.a.',
      image: '/bluSaving.png',
      color: 'bg-purple-500 text-white',
    },
    {
      title: 'bluGether',
      description: 'Patungan online bareng teman dengan suku bunga tabungan 3% p.a.',
      image: '/bluGether.png',
      color: 'bg-orange-500 text-white',
    },
    {
      title: 'bluDeposit',
      description: 'Mulai nabung jangka panjang dengan suku bunga hingga 4%',
      image: '/bluDeposit.png',
      color: 'bg-green-500 text-white',
    },
    {
      title: 'bluInvest',
      description: 'Satu aplikasi untuk investasi dan nabung.',
      image: '/bluInvest.png',
      color: 'bg-indigo-500 text-white',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        const cardWidth = 256 + 16; // Fixed card width + margin
        setVisibleCards(Math.floor(sliderRef.current.clientWidth / cardWidth));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, cards.length - visibleCards));
  };

  return (
    <div className="relative w-full overflow-hidden" ref={sliderRef}>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${(100 / visibleCards) * currentSlide}%)` }}
      >
        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0" style={{ width: '272px' }}>
            <Card
              title={card.title}
              description={card.description}
              image={card.image}
              color={card.color}
            />
          </div>
        ))}
      </div>
      {currentSlide > 0 && (
        <button
          onClick={handlePrevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {currentSlide < cards.length - visibleCards && (
        <button
          onClick={handleNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default CardSlider;
