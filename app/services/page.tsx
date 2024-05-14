"use client"
import Hero from '../../components/Hero'
import dynamic from 'next/dynamic';
import CardsContainer from './components/CardsContainer';
import CardSlider from './components/CardSlider';
import FAQ from './components/FAQ';

// const Services = dynamic(() => import('./components/Services'), {
//   loading: () => <p>Loading...</p>, 
// });
// const Overview = dynamic(() => import('./components/Overview'), {
//   loading: () => <p>Loading...</p>,
// });
// const Testimonial = dynamic(() => import('./components/Testimonial'), {
//   loading: () => <p>Loading...</p>, // Placeholder content or loading indicator
//   ssr: false, // Disable server-side rendering for client-only components
// });

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
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Emang ada fitur apa aja di blu?</h1>
        <CardSlider />
      </div>
      <FAQ />
    </main>
  );
}
