"use client"
import Hero from '../../components/Hero'
import dynamic from 'next/dynamic';


const CardsContainer = dynamic(() => import('./components/CardsContainer'), {
  loading: () => <p>Loading...</p>, 
});
const CardSlider = dynamic(() => import('./components/CardSlider'), {
  loading: () => <p>Loading...</p>,
});
const FAQ = dynamic(() => import('./components/FAQ'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Services() {
  return (
    <main className="">
      <header>
        <Hero
          title={<> Mulai <br /> Langkahmu! </>}
          description="Beban hidup jadi berat dan capai financial goals bareng kirby."
          button="Download kirby"
          imageUrl="/services.webp"
          imageWidth={444}
          imageHeight={444}
        />
      </header>
      <CardsContainer />
      <section className="container mx-auto py-8">
        <h1 className="text-3xl font-bold pl-2 text-center md:text-start mb-8">Emang ada fitur apa aja di kirby?</h1>
        <CardSlider />
      </section>
      <FAQ />
    </main>
  );
}
