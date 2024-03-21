'use client';

import { useEffect, useState } from 'react';

const calculateScroll = () => {
  const totalScroll = document.documentElement.scrollTop;
  const windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = totalScroll / windowHeight;
  return scrollPercent;
};

export default function Progressbar() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(calculateScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full md:h-2">
      <div
        style={{ width: `${scroll * 100}%` }}
        className="h-full bg-Blue transition-all ease-in-out"
      />
    </div>
  );
}
