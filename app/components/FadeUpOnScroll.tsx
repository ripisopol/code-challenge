"use client"
import React, { useEffect, useRef, useState } from 'react';

interface FadeUpOnScrollProps {
  children: React.ReactNode;
  thresholds?: number[]; // Thresholds for each item
}

const FadeUpOnScroll = ({ children, thresholds = [] }: FadeUpOnScrollProps) => {
  const childRefs = useRef<(HTMLDivElement | null)[]>([]);
  const childElements = useRef<HTMLDivElement[]>([]);
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
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Create an IntersectionObserver for each child element
    childElements.current.forEach((element, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !visibleIndexes.includes(index)) {
              setTimeout(() => {
                setVisibleIndexes((prevIndexes) => [...prevIndexes, index]);
              }, 100 * (index + 1)); // Adjust delay as needed
            }
          });
        },
        { threshold: thresholds[index] || 0.2 } // Use the provided threshold or default to 0.2
      );
      observer.observe(element);
      observers.push(observer);
    });

    // Update observer when new children are added
    const handleChildListMutation = (mutationsList: MutationRecord[]) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement && node instanceof HTMLDivElement) {
              const index = childElements.current.length;
              const observer = new IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting && !visibleIndexes.includes(index)) {
                      setTimeout(() => {
                        setVisibleIndexes((prevIndexes) => [...prevIndexes, index]);
                      }, 200 * (index + 1)); // Adjust delay as needed
                    }
                  });
                },
                { threshold: thresholds[index] || 0.2 } // Use the provided threshold or default to 0.2
              );
              observer.observe(node);
              childElements.current.push(node);
              observers.push(observer);
            }
          });
        }
      });
    };

    const observerConfig = { childList: true };
    const observerTarget = document.querySelector('.fade-up-on-scroll-container');

    if (observerTarget) {
      const childListObserver = new MutationObserver(handleChildListMutation);
      childListObserver.observe(observerTarget, observerConfig);
    }

    // Reset animation when scrolling to the top
    if (scrollTop === 0) {
      setVisibleIndexes([]);
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [visibleIndexes, scrollTop, thresholds]);

  return (
    <div className="fade-up-on-scroll-container">
      {React.Children.map(children, (child, index) => {
        childRefs.current[index] = React.isValidElement(child) ? child : null;

        return (
          <div
            key={index.toString()}
            ref={(el: HTMLDivElement | null) => {
              if (el instanceof HTMLDivElement) {
                childElements.current[index] = el;
              }
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
