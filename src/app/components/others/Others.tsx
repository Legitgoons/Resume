import Link from 'next/link';

import { OthersResponse } from '@/app/type/others';

import BulletSentence from '../shared/BulletSentence';

import OthersDetail from './OthersDetail';
import OthersTitle from './OthersTitle';

interface OthersProps {
  othersData: OthersResponse[];
}

export default async function Experience({ othersData }: OthersProps) {
  return (
    <div className="flex flex-col gap-y-8">
      {othersData.map(({ title, period, link, summary, details }) => (
        <article key={title} className="flex flex-col flex-wrap">
          <OthersTitle title={title}>
            <ul>
              <li>{period}</li>
              {link && <Link href={link.href}>{link.text}</Link>}
            </ul>
          </OthersTitle>
          <section className="flex w-full flex-col gap-y-4">
            <OthersDetail>
              <li className="p3b">{summary}</li>
              {details.map((detail) => (
                <BulletSentence key={detail}>{detail}</BulletSentence>
              ))}
            </OthersDetail>
          </section>
        </article>
      ))}
    </div>
  );
}
