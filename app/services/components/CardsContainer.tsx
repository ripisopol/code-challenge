import React from 'react';
import dynamic from 'next/dynamic'

const FadeUpOnScroll = dynamic(() => import('@/components/FadeUpOnScroll'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

const CardsContainer: React.FC = () => {
  return (
    <FadeUpOnScroll>

    <section className="flex justify-center my-10 md:my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:p-0 p-4">
        
        <Card
          title="Bikin Happy"
          description="Nabung di blu bebas biaya admin, bunga kompetitif, dan urus segalanya serba mudah. Jadi bikin semangat buat nabung terus ga sih?"
        />
        <Card
          title="Tanpa Jarak"
          description="Apa pun transaksinya, blu selalu ada di genggaman tanganmu"
        />
        <Card
          title="Selalu Sigap"
          description="Kamu butuh bantuan soal blu? Tenang, ada tim haloblu yang selalu sigap bantu kamu!"
        />
      </div>
    </section>
    </FadeUpOnScroll>

  );
};

export default CardsContainer;
