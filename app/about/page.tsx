import Hero from '../components/Hero'
import VisiMisi from './VisiMisi'
import ReadMore from './ReadMore'
import Milestone from "./Milestone";

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

      <ReadMore />
        <VisiMisi/>
      <Milestone />





    </main>
  );
}
