import Image from 'next/image';

interface HeroProps {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
    button?: React.ReactNode;
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
                        {title}
                        <p className="mb-8 leading-relaxed">{description}</p>
                        {button}
                    </div>
                </div>
                <div className="md:w-1/2 md:pl-16 md:mt-8">
                    <Image className="object-cover object-center rounded" alt="hero" src={imageUrl} width={imageWidth} height={imageHeight} priority={true}/>
                </div>
            </div>
        </section>
    )
}

export default Hero;
