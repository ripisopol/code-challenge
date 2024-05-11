import React from 'react';
import Image from 'next/image';

const TataKelolaPerusahaan = () => {
 return (
   <section className="flex flex-col items-center justify-center py-16">
     <div className="max-w-6xl flex flex-col md:flex-row items-center justify-center">
       <div className="hidden md:block mb-8 md:mb-0 md:mr-8">
         <Image
           src="/Overview.webp"
           alt="Icon"
           width={500}
           height={500}
           className="rounded-lg"
         />
       </div>
       <div className="text-center md:text-left p-4">
         <h2 className="text-4xl md:text-6xl font-semibold text-pink-600">Overview</h2>
         <p className="text-gray-600 text-xl mt-4">
           BE Digital adalah Bank yang baru dari BE Grup yang bikin harimu lebih hidup. Kami adalah Bank Digital yang beroperasi tanpa cabang (branchless).
         </p>
       </div>
     </div>
   </section>
 );
};

export default TataKelolaPerusahaan;