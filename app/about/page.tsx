import Hero from '../../components/Hero'
import dynamic from 'next/dynamic';

const VisiMisi = dynamic(() => import('./components/VisiMisi'), {
  loading: () => <p>Loading...</p>, 
});
const ReadMore = dynamic(() => import('./components/ReadMore'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const Milestone = dynamic(() => import('./components/Milestone'), {
  loading: () => <p>Loading...</p>,
});

export default function About() {
  return (
    <main className="">
      <section>
        <Hero
          title={<> Tentang <br /> BE digital </>}
          description="Kami adalah bank yang lahir seutuhnya dalam dunia fantasi."
          imageUrl="/heroAbout.webp"
          imageWidth={500}
          imageHeight={500}
        />
      </section>

      <ReadMore />
      <VisiMisi />
      <Milestone />





    </main>
  );
}
