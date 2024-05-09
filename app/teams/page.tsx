import Image from "next/image";
import Link from 'next/link'
import Hero from '../components/Hero'


export default function Teams() {
  return (
    <main className="">
      <section>
        <Hero
          title={
            <h1 className="font-bold mb-8 text-gray-900 text-6xl dark:text-white">Ada <br /> Karenamu</h1>
          }
          description={<>Lahir digital. <br /> Bank yang selalu ada tanpa jarak. Semudah itu, senyaman itu. <br /> Kami hadir buat kamu. Kami ya kamu.</>}
          button={
            <>
              <Link href="/About" className="mb-20 flex justify-center rounded-full bg-white text-gray-900 p-4 dark:bg-gray-900 dark:text-white"> </Link>
            </>
          }
          imageUrl="/heroTeams.png"
          imageWidth={500}
          imageHeight={500}
        />
      </section>

      <section className='bg-gray-900 dark:bg-white  min-h-screen'>
        <div>

        </div>
      </section>

      <section className='bg-white dark:bg-gray-900  min-h-screen'>
        <div>

        </div>
      </section>

      <section className='bg-gray-900 dark:bg-white min-h-screen'>
        <div>

        </div>
      </section>

    </main>
  );
}
