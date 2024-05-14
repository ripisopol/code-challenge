import React from 'react';
import Image from 'next/image';
import FadeUpOnScroll from '../../components/FadeUpOnScroll'

const TataKelolaPerusahaan = () => {
 return (
   <section className="flex flex-col items-center justify-center py-32">
    <FadeUpOnScroll>
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
       <div className="text-center font-medium md:text-left p-4">
         <p className="text-pink-600 md:text-3xl md:ml-8">
           BE Digital adalah Bank yang baru dari BE Grup yang bikin harimu lebih hidup. Kami adalah Bank Digital yang beroperasi tanpa cabang (branchless).
         </p>
       </div>
     </div>
    </FadeUpOnScroll>
     
   </section>
 );
};

export default TataKelolaPerusahaan;