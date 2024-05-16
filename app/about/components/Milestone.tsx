import type React from 'react';
import FadeUpOnScroll from '../../../components/FadeUpOnScroll'


const Milestone: React.FC = () => {
  return (
    <section className="bg-white">
      <FadeUpOnScroll>
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-pink-700 h-full border" style={{ left: '50%' }} />

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12" />
            <div className="z-20 flex items-center order-1 bg-pink-800 shadow-xl w-8 h-8 rounded-full">
              <span className="mx-auto font-semibold text-lg text-white" />
            </div>
            <div className="order-1 bg-pink-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white md:text-xl">1965</h3>
              <p className="md:text-sm text-xs leading-snug tracking-wide text-white text-opacity-100">PT Bank Rakjat Parahyangan menyapa dunia untuk pertama kalinya.</p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12" />
            <div className="z-20 flex items-center order-1 bg-pink-800 shadow-xl w-8 h-8 rounded-full">
              <span className="mx-auto text-white font-semibold text-lg" />
            </div>
            <div className="order-1 bg-pink-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">1982</h3>
              <p className="text-sm text-xs font-medium leading-snug tracking-wide text-white text-opacity-100">Berubah nama menjadi PT Bank Pasar Rakyat Parahyangan.</p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12" />
            <div className="z-20 flex items-center order-1 bg-pink-800 shadow-xl w-8 h-8 rounded-full">
              <span className="mx-auto font-semibold text-lg text-white" />
            </div>
            <div className="order-1 bg-pink-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">1990</h3>
              <p className="text-sm text-xs leading-snug tracking-wide text-white text-opacity-100">Hadir dengan identitas baru, PT Bank Royal Indonesia</p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12" />
            <div className="z-20 flex items-center order-1 bg-pink-800 shadow-xl w-8 h-8 rounded-full">
              <span className="mx-auto text-white font-semibold text-lg" />
            </div>
            <div className="order-1 bg-pink-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">2019</h3>
              <p className="text-sm text-xs font-medium leading-snug tracking-wide text-white text-opacity-100">Resmi diakuisisi PT Bank Emok Tbk</p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12" />
            <div className="z-20 flex items-center order-1 bg-pink-800 shadow-xl w-8 h-8 rounded-full">
              <span className="mx-auto font-semibold text-lg text-white" />
            </div>
            <div className="order-1 bg-pink-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">2020</h3>
              <p className="text-sm text-xs leading-snug tracking-wide text-white text-opacity-100">Terlahir kembali sebagai PT Bank Digital BE. Bank digital yang diracik dengan resep baru, spesial buat kamu untuk mulai langkahmu!</p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12" />
            <div className="z-20 flex items-center order-1 bg-pink-800 shadow-xl w-8 h-8 rounded-full">
              <span className="mx-auto text-white font-semibold text-lg" />
            </div>
            <div className="order-1 bg-pink-600 rounded-lg shadow-xl w-5/12 px-2 md:px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xs text-center md:text-xl">Bersambung</h3>
              <p className="text-sm text-xs font-medium leading-snug tracking-wide text-center text-white text-opacity-100">Tunggu tanggal mainnya buat dapetin pengalaman perbankan baru</p>
            </div>
          </div>
        </div>
      </div>
      </FadeUpOnScroll>
      
    </section>

  );
};

export default Milestone;
