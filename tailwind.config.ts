import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        Blue: '#2093fe',
        Tertiary: '#EEF1F4',
        White: '#FFFFFF',
      },
      fontFamily: {
        suit: ['SUIT', 'sans-serif'],
      },
      fontSize: {
        16: '1rem',
        20: '1.25rem',
        24: '1.5rem',
        28: '1.75rem',
        32: '2rem',
        40: '2.5rem',
        80: '5rem',
      },
      lineHeight: {
        120: '120%',
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        heavy: '900',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
