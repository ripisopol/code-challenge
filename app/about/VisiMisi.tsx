import type React from 'react';
import Image from "next/image";

const VisiMisi: React.FC = () => {
  return (
    <section className=" bg-pink-50 mx-auto md:p-24 p-8">
      <div className="bg-pink-600 container rounded-lg shadow-lg overflow-hidden md:flex md:flex-row md:items-center justify-center md:space-x-6 md:space-y-0 max-w-full mx-auto p-4 md:p-14">
        <div className="p-6 md:w-1/2 md:order-2 text-center text-white">
          <h2 className="text-5xl font-bold mb-8">Visi</h2>
          <p className=" md:text-xl mb-8">Menjadi bank digital pilihan utama masyarakat</p>
          <h2 className="text-5xl font-bold mb-8">Misi</h2>
          <p className="md:text-xl mb-8">• Memahami beragam kebutuhan nasabah dan memberikan layanan finansial yang tepat demi tercapainya kepuasan optimal bagi nasabah, dengan memanfaatkan teknologi tepat guna </p>
          <p className="md:text-xl mb-8">• Memberikan nilai tambah bagi para pemangku kepentingan</p>

        </div>
        <div className="md:w-1/2 md:relative md:order-1 items-center">
          <Image className="w-3xl h-3xl object-cover" src="/bg-visi.webp" alt="" width={400} height={400 } />
        </div>
      </div>
    </section>

  );
};

export default VisiMisi;
