import Link from 'next/link';

import { LinkSentence } from '@/app/type/project';

import BulletSentence from '../BulletSentence';

interface ProjectSentenceListProps {
  sentences: LinkSentence[];
}

export default function ProjectSentenceList({
  sentences,
}: ProjectSentenceListProps) {
  return (
    <>
      {sentences.map((sentence) => {
        if (typeof sentence.link.href === 'undefined') {
          return (
            <BulletSentence key={sentence.text}>{sentence.text}</BulletSentence>
          );
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
