import { ExperienceResponse } from '@/app/type/others';

import BulletSentence from '../shared/BulletSentence';

import OthersDetail from './OthersDetail';
import OthersTitle from './OthersTitle';

interface ExperienceProps {
  expData: ExperienceResponse[];
}

export default async function Experience({ expData }: ExperienceProps) {
  return (
    <div className="flex flex-col gap-y-8">
      {expData.map(({ title, period, summary, role, details }) => (
        <article key={title} className="flex flex-col flex-wrap">
          <OthersTitle title={title}>
            <ul>
              <li>{period}</li>
              <li>{role}</li>
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
