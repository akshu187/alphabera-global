import { useState, useEffect, useRef } from 'react';
import { ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
}

export default function ParallaxSection({ children, speed = 0.5 }: ParallaxSectionProps) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const elementOffset = ref.current.getBoundingClientRect().top;
        const scrolled = window.scrollY;
        const parallaxOffset = elementOffset * speed;
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} style={{ transform: `translateY(${offset * speed}px)` }} className="transition-transform duration-100">
      {children}
    </div>
  );
}
