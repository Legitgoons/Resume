'use client';

import { useEffect, useState } from 'react';

export default function Progressbar() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = `${totalScroll / windowHeight}`;
    setScroll(Number(scrollPercent));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full md:h-3">
      <div
        style={{ width: `${scroll * 100}%` }}
        className="h-full bg-Blue transition-all duration-100 ease-in-out"
      />
    </div>
  );
}
