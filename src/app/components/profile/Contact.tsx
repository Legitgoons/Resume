import Image from 'next/image';
import Link from 'next/link';

import BulletSentence from '../BulletSentence';

import Layout from './Layout';

import Github from '@/../public/assets/img/githubIcon.svg';

export default function Contact() {
  return (
    <Layout title="Contact">
      <BulletSentence>📱 010-2039-5193</BulletSentence>
      <BulletSentence>📧 cksxkr5193@naver.com</BulletSentence>
      <BulletSentence>
        <Image src={Github} alt="Github" className="mx-1 size-4 sm:size-5" />
        <Link href="https://github.com/Legitgoons">
          &nbsp;https://github.com/Legitgoons
        </Link>
      </BulletSentence>
      <BulletSentence>
        🌐
        <Link href="https://cksxkr5193.tistory.com/">
          &nbsp;https://cksxkr5193.tistory.com/
        </Link>
      </BulletSentence>
    </Layout>
  );
}
