import Hero from '@/components/Hero'
import dynamic from 'next/dynamic';

const Services = dynamic(() => import('./components/Services'), {
  loading: () => <p>Loading...</p>, 
});
const Overview = dynamic(() => import('./components/Overview'), {
  loading: () => <p>Loading...</p>,
});
const Testimonial = dynamic(() => import('./components/Testimonial'), {
  loading: () => <p>Loading...</p>, // Placeholder content or loading indicator
  ssr: false, // Disable server-side rendering for client-only components
});
  



export default function Home() {
  return (
    <main className="">
      <section>
        <Hero
          title={<> Ada <br /> Karenamu </>}
          description="Lahir digital. Bank yang selalu ada tanpa jarak. Semudah itu, senyaman itu. Kami hadir buat kamu. Kami ya kamu. Iya.. kamu.."
          button="Kenalan, yuk!"
          imageUrl="/hero.webp"
          imageWidth={500}
          imageHeight={500}
        />
      </section>
      
      <Overview />
      <Services />
      <Testimonial />

    </main>
  );
}
