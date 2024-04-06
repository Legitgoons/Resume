'use client';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import DarkIcon from '@/../public/assets/img/dark-icon.svg';
import LightIcon from '@/../public/assets/img/light-icon.svg';

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const themeChange = (nowTheme: string | undefined) => {
    if (nowTheme === 'dark') {
      return 'light';
    }
    return 'dark';
  };

  const themeButtonHandler = () => {
    setTheme(themeChange(currentTheme));
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={themeButtonHandler}
      type="button"
      aria-label="themeButton"
      className="my-4 flex size-8 items-center justify-center rounded-lg border-2 border-slate-700 bg-white md:fixed md:right-16 md:top-5"
    >
      {currentTheme === 'dark' ? <LightIcon /> : <DarkIcon />}
    </button>
  );
}
