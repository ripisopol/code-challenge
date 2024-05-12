"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
    name: {
        first: string;
        last: string;
    };
    picture: {
        thumbnail: string;
    };
}

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=6');
                const data = await response.json();
                setTestimonials(data.results as Testimonial[]);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="w-full bg-white px-5 py-16 md:py-24 text-gray-600">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="text-center max-w-xl mx-auto">
                        <h1 className="text-6xl md:text-7xl font-bold mb-5 text-pink-600">
                            What people <br />are saying.
                        </h1>
                        <h3 className="text-xl mb-5 font-light">Read what our customers have to say about us.</h3>
                        <div className="text-center mb-10">
                            <span className="inline-block w-1 h-1 rounded-full bg-pink-600 ml-1" />
                            <span className="inline-block w-4 h-1 rounded-full bg-pink-600 ml-1" />
                            <span className="inline-block w-40 h-1 rounded-full bg-pink-600 ml-1" />
                            <span className="inline-block w-4 h-1 rounded-full bg-pink-600 ml-1" />
                            <span className="inline-block w-1 h-1 rounded-full bg-pink-600 ml-1" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        {testimonials.map((testimonial) => (
                            <div key={`${testimonial.name.first}-${testimonial.name.last}`} className="w-full md:w-1/3 px-3 mb-6">
                                <div className="rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light">
                                    <div className="flex mb-4 items-center">
                                        
                                        <div className="flex-grow">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">
                                                {`${testimonial.name.first} ${testimonial.name.last}`}
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight">
                                            <span className="text-lg leading-none italic font-bold text-pink-400 mr-1">&quot;</span>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.
                                            <span className="text-lg leading-none italic font-bold text-pink-400 ml-1">&quot;</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;