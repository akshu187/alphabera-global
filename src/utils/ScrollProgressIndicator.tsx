import { useState, useEffect } from 'react';

export default function ScrollProgressIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-brand-400 to-brand-500 z-50 transition-all duration-300"
      style={{ width: `${progress}%` }}
    />
  );
}
