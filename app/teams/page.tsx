import Image from "next/image";
import Pimpinan from './Pimpinan';
import Hero from '../components/Hero'
import Services from '../Services'
import ImageSwitcher from './ImageSwitcher'


export default function Teams() {
  const images = [
    '/struktur1.webp',
    '/struktur2.webp',
    '/struktur3.webp',
    '/struktur4.webp',
  ];
  return (
    <main className="">
      <section>
        <Hero
          title={<> Kenal <br /> lebih dekat </>}
          description={<>Mengungkap Kekuatan Kolaboratif<br />yang Mendorong Keberhasilan dan Inovasi.</>}
          imageUrl="/heroTeams.webp"
          imageWidth={700}
          imageHeight={700}
        />
      </section>
      <div className="container mx-auto py-8">
      <ImageSwitcher images={images} />
    </div>
     <Pimpinan/>

      <Services />
      <section className="bg-cyan-50 min-h-screen">
        <div>
sad
        </div>
      </section>






    </main>
  );
}
