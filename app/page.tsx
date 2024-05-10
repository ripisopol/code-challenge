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
          title={
            <h1 className="font-bold mb-8 text-cyan-600 text-6xl dark:text-white">Ada <br /> Karenamu</h1>
          }
          description={<>

            Lahir digital. <br /> Bank yang selalu ada tanpa jarak. Semudah itu, senyaman itu. <br /> Kami hadir buat kamu. Kami ya kamu.</>}
          button={
            <>
              <Link href="/about" className="mb-20 flex justify-center rounded-full border border-cyan-600 bg-white text-cyan-600 p-4 dark:bg-gray-900 dark:text-white dark:border dark:border-white">Kenalan, yuk!</Link>
            </>
          }
          imageUrl="/hero.png"
          imageWidth={500}
          imageHeight={500}
        />
      </section>

      <section className='bg-cyan-50 dark:bg-gray-900  min-h-screen'>
        <div>

        </div>
      </section>

      <Services />
      <section className="bg-white">
      </section>






    </main>
  );
}
