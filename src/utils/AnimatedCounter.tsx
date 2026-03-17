import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({ from, to, duration, suffix = '', prefix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let currentValue = from;
          const increment = (to - from) / (duration / 16);
          
          const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= to) {
              setCount(to);
              clearInterval(interval);
            } else {
              setCount(Math.floor(currentValue));
            }
          }, 16);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [from, to, duration]);

  return <span ref={elementRef}>{prefix}{count.toLocaleString()}{suffix}</span>;
}
