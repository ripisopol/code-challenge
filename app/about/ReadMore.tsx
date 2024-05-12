"use client"
import React, { useState } from 'react';

const ReadMore = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="text-justify">
      <div className="text-gray-900 bg-white body-font p-8 md:p-24 md:text-2xl tracking-wider leading-loose">
        <div className="text-start mb-10">
          <span className="md:hidden inline-block w-20 h-1 rounded-full bg-pink-600" />
        </div>
        <div
          className={`${expanded ? '' : 'max-h-full overflow-hidden'}`} // Set max height when collapsed
        >
          <p>
            Kami hadir untuk kamu, para <i>digital savvy</i> yang menginginkan cara baru dalam urusan perbankan. Lewat platform yang akan terus dikembangkan sesuai kemajuan teknologi, BE Digital akan selalu berusaha untuk bisa menjadi <strong>jawaban atas kebutuhan finansial kamu.</strong>{!expanded && <strong>...</strong>}
          </p>
          {expanded && (
            <>
              <p className="my-4">
                Layaknya teman, BCA Digital ingin tumbuh bersama dengan para nasabah. Kami ada untuk menyebarkan good vibes dan memberikan semangat dalam memulai langkahmu mewujudkan mimpi jadi kenyataan.
              </p>
              <p className="mb-4">
                Katanya tak kenal maka tak sayang. Biar lebih akrab, berikut sekilas sejarah tentang kami. Sebelumnya PT Bank Digital BCA (BCA Digital) itu adalah PT Bank Royal Indonesia (Royal Bank) yang diakuisisi oleh PT Bank Central Asia Tbk (BCA) pada akhir tahun 2019. Dengan identitas baru ini, BCA Digital berkomitmen untuk terus meracik ide baru untuk inovasi layanan dan produk perbankan yang selalu bikin kamu berkata, &quot;untung ada BCA Digital!&quot;
              </p>
              <p className="mb-4">
                Dan tanpa melupakan hal terpenting, BCA Digital akan selalu meninggalkan dampak positif dalam setiap jejak langkah kami demi menciptakan dunia yang sustain dan lebih baik.
              </p>
              <p className="mb-4">
                Sesuai Surat Keputusan Deputi Komisioner Pengawas Perbankan I Otoritas Jasa Keuangan Nomor KEP-92/PB.1/2020 tertanggal 19 Mei 2020 Tentang Penetapan Penggunaan Izin Usaha Atas Nama PT Bank Royal Indonesia menjadi Izin Usaha Atas Nama PT Bank Digital BCA
              </p>
            </>
          )}
        </div>
        {!expanded && (
          <button type="button" onClick={toggleExpanded} className="mt-4 text-pink-600 hover:text-pink-700 ">
            Read More
          </button>
        )}
        {expanded && (
          <button type="button" onClick={toggleExpanded} className="mt-4 text-pink-600 hover:text-pink-700 ">
            Read Less
          </button>
        )}
      </div>
    </div>
  );
};

export default ReadMore;
