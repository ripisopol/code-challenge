
import Hero from '@/components/Hero';
import dynamic from 'next/dynamic';

const Struktur = dynamic(() => import('./components/Struktur'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const Team = dynamic(() => import('./components/Team'), {
  loading: () => <p>Loading...</p>,
});
const Pimpinan = dynamic(() => import('./components/Pimpinan'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});


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
          imageWidth={500}
          imageHeight={500}
        />
      </section>
        <section className="container mx-auto py-8">
          <Struktur images={images} />
        </section>
        <Team/>
        <Pimpinan />
    </main>
  );
}
