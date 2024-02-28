import Image from 'next/image';
import Link from 'next/link';

import BulletSentence from '../BulletSentence';

import Layout from './Layout';

export default function Contact() {
  return (
    <Layout title="Contact">
      <BulletSentence>📱 010-2039-5193</BulletSentence>
      <BulletSentence>📧 cksxkr5193@naver.com</BulletSentence>
      <BulletSentence>
        <Link href="https://github.com/Legitgoons" className="flex">
          <Image
            src="https://i.ibb.co/zJG1S6x/github.webp"
            alt="Github"
            className="mx-1 size-4 sm:size-5"
            width={16}
            height={16}
          />
          &nbsp;github.com/Legitgoons
        </Link>
      </BulletSentence>
      <BulletSentence>
        🌐
        <Link href="https://cksxkr5193.tistory.com">
          &nbsp;cksxkr5193.tistory.com
        </Link>
      </BulletSentence>
      <BulletSentence>
        📝
        <Link href="https://web-portfolio-legitgoons.vercel.app">
          &nbsp;web-portfolio-legitgoons.vercel.app
        </Link>
      </BulletSentence>
    </Layout>
  );
}
