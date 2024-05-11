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
        <section className="min-h-full text-cyan-600 bg-white body-font dark:bg-gray-900 dark:text-white pt-12">
            <div className="container mx-auto px-5 pt-12 md:flex md:flex-row md:items-center">
                <div className="md:w-1/2 md:pr-16">
                    <div className="flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="font-bold mb-8 text-cyan-600 text-6xl dark:text-white">{title}</h1>
                        <p className="mb-8 leading-relaxed">{description}</p>
                        {button && (
                            <Link href="/about" className="mb-20 flex justify-center rounded-full border border-cyan-600 bg-white text-cyan-600 p-4 dark:bg-gray-900 dark:text-white dark:border dark:border-white">
                                {button}
                            </Link>
                        )}
                    </div>
                </div>
                <div className="md:w-1/2 md:pl-16 md:mt-8">
                    <Image className="object-cover object-center rounded" alt="hero" src={imageUrl} width={imageWidth} height={imageHeight} priority={true} />
                </div>
            </div>
        </section>
    )
}

export default Hero;
