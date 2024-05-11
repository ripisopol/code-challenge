import Image from "next/image";
import Link from 'next/link'
import Hero from '../components/Hero'
import Services from './Services'
import TataKelolaPerusahaan from './TataKelolaPerusahaan'


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
<TataKelolaPerusahaan/>
      {/* <section className='bg-pink-50  min-h-screen'>
        <div>

        </div>
      </section> */}

      <Services />
      <section className="bg-pink-50 min-h-screen">
        <div>
sad
        </div>
      </section>






    </main>
  );
}
