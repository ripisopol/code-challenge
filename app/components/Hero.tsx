import type React from 'react';
import Image from 'next/image';

interface HeroProps {
    title: React.ReactNode;
    description: React.ReactNode;
    button?: React.ReactNode;
    imageUrl: string;
    imageWidth: number;
    imageHeight: number;
}

const Hero: React.FC<HeroProps> = ({ title, description, button, imageUrl, imageWidth, imageHeight }) => {
    return (
        <section className=" min-h-full text-gray-900 bg-white body-font dark:bg-gray-900 dark:text-white pt-12">
            <div className="container mx-auto flex px-5 pt-12 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    {title}
                    <p className="mb-8 leading-relaxed">{description}</p>
                    {button && (
                        <div >
                            {button}
                        </div>
                    )}
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image className="object-cover object-center rounded" alt="hero" src={imageUrl} width={imageWidth} height={imageHeight} priority={true}/>
                </div>
            </div>
        </section>
    )
}

export default Hero;
