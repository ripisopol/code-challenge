import React from 'react';
import Image from 'next/image'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FadeUpOnScroll from '@/components/FadeUpOnScroll'

interface CardProps {
  title: string;
  description: string;
  image: string;
  color: string;
}

interface ArrowProps {
  onClick?: () => void;
  className?: string;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick, className }) => (
  <div
    className={`custom-arrow next ${className}`}
    onClick={onClick}
    role="button"
    tabIndex={0}
  >
    →
  </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick, className }) => (
  <div
    className={`custom-arrow prev bg-black ${className}`}
    onClick={onClick}
    role="button"
    tabIndex={0}
  >
    ←
  </div>
);

const Card: React.FC<CardProps> = ({ title, description, image, color }) => (
  <div className={`p-6 border rounded-lg shadow-md ${color} mx-2 flex flex-col justify-between`} style={{ height: '260px' }}>
    <div>
      <h2 className="md:text-xl font-bold mb-4">{title}</h2>
      <p className="text-xs md:text-md">{description}</p>
    </div>
    <div className="flex justify-center h-auto w-auto mt-12">
      <Image src={image} alt={title} width={250} height={250} />
    </div>
  </div>
);

const CardSlider: React.FC = () => {
  const cards: CardProps[] = [
        {
          title: 'kirbyAccount',
          description: 'Buka rekening semudah itu!',
          image: '/kirbyAccount.png',
          color: 'bg-blue-500 text-white ',
        },
        {
          title: 'kirbySaving',
          description: 'Nabung sekaligus buat pos keluargan. Suku bunga 3% p.a.',
          image: '/kirbySaving.png',
          color: 'bg-purple-500 text-white',
        },
        {
          title: 'kirbyGether',
          description: 'Patungan online bareng teman dengan suku bunga tabungan 3% p.a.',
          image: '/kirbyGether.png',
          color: 'bg-orange-500 text-white',
        },
        {
          title: 'kirbyDeposit',
          description: 'Mulai nabung jangka panjang dengan suku bunga hingga 4%',
          image: '/kirbyDeposit.png',
          color: 'bg-green-500 text-white',
        },
        {
          title: 'kirbyVirtual Card',
          description: 'Satu kartu virtual untuk berbagai kebutuhan ✨',
          image: '/kirbyVirtualCard.png',
          color: 'bg-indigo-500 text-white',
        },
        {
          title: 'kirbyBisnis',
          description: 'Rekening bisnis untuk sobatkirby yang punya usaha',
          image: '/kirbyBisnis.png',
          color: 'bg-blue-500 text-white',
        },
        {
          title: 'kirbyInvest',
          description: 'Mulai investasimu, bareng kirby!',
          image: '/kirbyInvest.png',
          color: 'bg-blue-500 text-white',
        },
        {
          title: 'kirbyExtraCash',
          description: 'Dapatkan pinjaman hingga Rp 10 juta',
          image: '/kirbyExtraCash.png',
          color: 'bg-pink-900 text-white',
        },
        {
          title: 'kirbyInsurance',
          description: 'Instant everything. Incredible prices. Big heart.',
          image: '/kirbyInsurance.png',
          color: 'bg-cyan-500 text-white',
        },
        {
          title: 'Bayar/Beli',
          description: 'Berbagai transaksi cukup lewat satu aplikasi',
          image: '/bayarBeli.png',
          color: 'bg-white text-black',
        },
        {
          title: 'QRIS',
          description: 'Bayar ini itu tinggal scan! Fitur buat sobat cashless dan cardless',
          image: '/QRIS.png',
          color: 'bg-white text-black',
        },
        {
          title: 'Tarik Tunai Tanpa Kartu',
          description: 'Tarik tunai aman pakai kode transaksi',
          image: '/tarikTunai.png',
          color: 'bg-white text-black',
        },
        {
          title: 'Top Up E-Money',
          description: 'Apapun E-Money nya, Top Up bisa pakai kirby',
          image: '/topUp.png',
          color: 'bg-white text-black',
        },
        {
          title: 'Transfer',
          description: 'Transfer pakai kirby, siap-siap pesta kirbyRewards',
          image: '/transfer.png',
          color: 'bg-white text-black',
        },
        {
          title: 'Riwayat Transaksi',
          description: 'Cek setiap detail transaksi kamu di aplikasi blu',
          image: '/riwayatTransaksi.png',
          color: 'bg-white text-black',
        },
        {
          title: 'Tracker',
          description: 'Pantau cashflow kamu setiap bulannya',
          image: '/tracker.png',
          color: 'bg-white text-black',
        },
      
  ];

  const settings = {
    nextArrow: <NextArrow className="bg-black"/>,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index}>
          <FadeUpOnScroll>
            <Card
              title={card.title}
              description={card.description}
              image={card.image}
              color={card.color}
            />

          </FadeUpOnScroll>
        </div>
      ))}
    </Slider>
  );
};
export default CardSlider;