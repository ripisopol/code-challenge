"use client"
import React, { useEffect, useRef, useState } from 'react';

interface FadeUpOnScrollProps {
  children: React.ReactNode;
  thresholds?: number[]; // Thresholds for each item
}

const FadeUpOnScroll = ({ children, thresholds = [] }: FadeUpOnScrollProps) => {
  const childRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.pageYOffset || document.documentElement.scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Create an IntersectionObserver for each child element
    childRefs.current.forEach((element, index) => {
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            // biome-ignore lint/complexity/noForEach: <explanation>
            entries.forEach((entry) => {
              if (entry.isIntersecting && !visibleIndexes.includes(index)) {
                setTimeout(() => {
                  setVisibleIndexes((prevIndexes) => [...prevIndexes, index]);
                }, 100 * (index + 1)); // Adjust delay as needed
              } else if (!entry.isIntersecting && visibleIndexes.includes(index)) {
                setVisibleIndexes((prevIndexes) => prevIndexes.filter((i) => i !== index));
              }
            });
          },
          { threshold: thresholds[index] !== undefined ? thresholds[index] : 0.2 } // Use the provided threshold or default to 0.2
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      // biome-ignore lint/complexity/noForEach: <explanation>
      observers.forEach((observer) => observer.disconnect());
    };
  }, [thresholds, visibleIndexes]); // Include thresholds and visibleIndexes as dependencies

  return (
    <div className="fade-up-on-scroll-container">
      {React.Children.map(children, (child, index) => {
        return (
          <div
            key={index.toString()}
            ref={(el) => {
              childRefs.current[index] = el;
            }}
            className={`transition-opacity duration-1000 ${
              visibleIndexes.includes(index) ? 'opacity-100 animate-fade-up' : 'opacity-0'
            }`}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default FadeUpOnScroll;
