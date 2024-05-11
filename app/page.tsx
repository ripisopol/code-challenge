import Image from "next/image";
import Link from 'next/link'
import Hero from './components/Hero'
import Services from './Services'
import CustomerReview from './CustomerReview'


export default function Home() {
  return (
    <main className="">
      <section>
        <Hero
          title={<> Ada <br /> Karenamu </>}
          description={<>Lahir digital. <br /> Bank yang selalu ada tanpa jarak. Semudah itu, senyaman itu. <br /> Kami hadir buat kamu. Kami ya kamu.</>}
          button="Kenalan, yuk!"
          imageUrl="/hero.webp"
          imageWidth={700}
          imageHeight={700}
        />
      </section>

      <section className='bg-cyan-50 dark:bg-gray-900  min-h-screen'>
        <div>

        </div>
      </section>

      <Services />
      <section className="bg-cyan-50 min-h-screen">
        <div>
sad
        </div>
      </section>






    </main>
  );
}
