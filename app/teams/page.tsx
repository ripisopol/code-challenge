import Image from "next/image";
import Link from 'next/link'
import Hero from '../components/Hero'
import Services from '../Services'
import CustomerReview from '../CustomerReview'


export default function Teams() {
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
