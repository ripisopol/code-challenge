import React from 'react'
import FadeUpOnScroll from '../../../components/FadeUpOnScroll'


const Team = () => {
    return (
        <section className="bg-pink-50 px-4 py-8 md:p-24">
            <FadeUpOnScroll>
                <div>
                    <h1 className="text-6xl text-center text-pink-600 font-bold mb-4">Tim Kami</h1>
                    <p className="md:text-2xl text-justify leading-loose tracking-widest">Kekuatan terbesar yang BE Digital miliki adalah para karyawan dengan keahlian maupun latar belakang yang inklusif, yang kami sebut dengan ‘kirbyForce’. Kata force yang bermakna kekuatan menjadi kunci kolaborasi kami dalam bekerja dengan berfokus pada strengths yang berbeda-beda untuk saling melengkapi demi mencapai hasil yang terbaik.</p>
                </div>
                
            </FadeUpOnScroll>
        </section>
    )
}

export default Team