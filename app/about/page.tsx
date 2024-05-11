import Image from "next/image";
import Link from 'next/link'
import Hero from '../../components/Hero'
import Services from '../Services'
import CustomerReview from '../CustomerReview'


export default function About() {
  return (
    <main className="">
      <section>
        <Hero
          title={<> Tentang <br /> BE digital </>}
          description="Kami adalah bank yang lahir seutuhnya dalam dunia fantasi."
          imageUrl="/heroAbout.webp"
          imageWidth={700}
          imageHeight={700}
        />
      </section>

      <section className='bg-cyan-50   min-h-screen'>
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
