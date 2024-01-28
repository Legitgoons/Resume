import Link from 'next/link';

import { SentenceItem } from '@/app/type/project';

import BulletSentence from '../BulletSentence';

interface ProjectSentenceListProps {
  sentences: SentenceItem[];
}

export default function ProjectSentenceList({
  sentences,
}: ProjectSentenceListProps) {
  return (
    <>
      {sentences.map((sentence) => {
        if (typeof sentence === 'string') {
          return <BulletSentence key={sentence}>{sentence}</BulletSentence>;
        }
        return (
          <BulletSentence key={sentence.link.href}>
            <span>
              {sentence.text}
              <Link href={sentence.link.href}>{sentence.link.text}</Link>
              {sentence.endText}
            </span>
          </BulletSentence>
        );
      })}
    </>
  );
}
