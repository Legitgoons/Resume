import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import Progressbar from './components/Progressbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '가치를 만드는 FE 개발자 이의찬입니다',
  description: '신입 프론트엔드 개발자 이의찬의 웹 포트폴리오 사이트입니다.',
  generator: 'Next.js',
  applicationName: 'Frontend-Portfolio',
  keywords: [
    'Frontend',
    'Frontend developer',
    '프론트엔드',
    '프론트엔드 채용',
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
  ],
  category: 'Portfolio',
  metadataBase: new URL('https://web-portfolio-legitgoons.vercel.app'),
  authors: { name: '이의찬', url: 'https://github.com/Legitgoons' },
  creator: '이의찬',
  publisher: '이의찬',
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    title: '가치를 만드는 FE 개발자 이의찬입니다',
    description: '신입 프론트엔드 개발자 이의찬의 웹 포트폴리오 사이트입니다.',
    url: 'https://web-portfolio-legitgoons.vercel.app',
    siteName: 'Frontend-Portfolio',
    images: [
      {
        url: 'https://i.ibb.co/TL6q9vW/Kakao-Talk-20230522-210754586.png',
        width: 583,
        height: 750,
        alt: 'Profile picture',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '4QMxDQMnImnqhcdYU6QIylP5NVD32ikrmzWzb4dZumc',
    other: {
      'naver-site-verification': '4bbc96fa91d151689912e4998ffe04ffba5c4813',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={inter.className}>
        <Progressbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
