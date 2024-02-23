import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import Progressbar from './components/Progressbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '가치를 만드는 FE 개발자 이의찬입니다',
  description: '신입 프론트엔드 개발자 이의찬의 웹 포트폴리오 사이트입니다.',
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
      </body>
    </html>
  );
}
