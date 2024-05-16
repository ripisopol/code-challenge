import type React from 'react';
import Image from "next/image";
import FadeUpOnScroll from '../../../components/FadeUpOnScroll'

const VisiMisi: React.FC = () => {
  return (
    <section className=" bg-pink-50 mx-auto md:p-24">
      <FadeUpOnScroll>
      <div className="bg-pink-600 container rounded-lg shadow-lg overflow-hidden md:flex md:flex-row md:items-center justify-center md:space-x-6 md:space-y-0 max-w-full mx-auto p-4 md:p-14">
        <div className="p-6 md:w-1/2 md:order-2 text-start text-white">
          <h2 className="text-5xl font-bold mb-8">Visi</h2>
          <p className=" md:text-xl mb-8">Menjadi bank digital pilihan utama masyarakat</p>
          <h2 className="text-5xl font-bold mb-8">Misi</h2>
          <p className="md:text-xl mb-8">• Memahami beragam kebutuhan nasabah dan memberikan layanan finansial yang tepat demi tercapainya kepuasan optimal bagi nasabah, dengan memanfaatkan teknologi tepat guna </p>
          <p className="md:text-xl mb-8">• Memberikan nilai tambah bagi para pemangku kepentingan</p>

        </div>
        <div className="md:w-1/2 md:relative md:order-1 items-center">
          <Image className="w-5xl h-5xl  object-cover" src="/bg-visi.webp" alt="" width={400} height={400 } />
        </div>
      </div>
      </FadeUpOnScroll>
      
    </section>

  );
};

export default VisiMisi;
