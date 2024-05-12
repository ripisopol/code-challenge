import Hero from './components/Hero'
import Services from './Services'
import Overview from './Overview'
import Testimonial from './Testimonial'


export default function Home() {
  return (
    <main className="">
      <section>
        <Hero
          title={<> Ada <br /> Karenamu </>}
          description="Lahir digital. Bank yang selalu ada tanpa jarak. Semudah itu, senyaman itu. Kami hadir buat kamu. Kami ya kamu. Iya.. kamu.."
          button="Kenalan, yuk!"
          imageUrl="/hero.webp"
          imageWidth={700}
          imageHeight={700}
        />
      </section>
      <Overview />
      <Services />
      <Testimonial />
    </main>
  );
}
