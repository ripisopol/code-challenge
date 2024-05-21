import Image from 'next/image';
import Link from 'next/link';


interface HeroProps {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
    button?: string;
    imageUrl: string;
    imageWidth: number;
    imageHeight: number;
}

const Hero: React.FC<HeroProps> = ({ title, description, button, imageUrl, imageWidth, imageHeight }) => {
    return (
        <section className="min-h-full text-white bg-pink-600 body-font  pt-12 justify-around">
                <div className="container mx-auto px-5 pt-12 md:flex md:flex-row md:items-center" >
                    <div className="md:w-1/2 md:pr-4">
                        <div className="flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="font-bold mb-8 text-white text-5xl md:text-6xl ">{title}</h1>
                            <p className="mb-8 leading-relaxed">{description}</p>
                            {button && (
                                <Link href='/about' className="mb-20 flex justify-center rounded-full border border-white bg-pink-600 text-white px-8 py-2 hover:underline">
                                    {button}
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="mt-0 md:w-1/2 md:pl-42 md:mt-8" >
                        <Image className="object-cover object-center rounded" alt="hero" src={imageUrl} width={imageWidth} height={imageHeight} loading="eager" priority={true} />
                    </div>
                </div>

        </section>
    )
}

export default Hero;
