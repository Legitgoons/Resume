import { ExperienceResponse } from '@/app/type/experience';

import BulletSentence from '../BulletSentence';

import ExperienceDetail from './ExperienceDetail';
import ExperienceTitle from './ExperienceTitle';

interface ExperienceProps {
  expData: ExperienceResponse[];
}

export default async function Experience({ expData }: ExperienceProps) {
  return (
    <div className="flex flex-col gap-y-8">
      {expData.map(({ title, period, role, details }) => (
        <article key={title} className="flex flex-col flex-wrap">
          <ExperienceTitle title={title}>
            <ul>
              <li>{period}</li>
              <li>{role}</li>
            </ul>
          </ExperienceTitle>
          <section className="flex w-full flex-col gap-y-4">
            <ExperienceDetail title="Detail">
              {details.map((detail) => (
                <BulletSentence key={detail}>{detail}</BulletSentence>
              ))}
            </ExperienceDetail>
          </section>
        </article>
      ))}
    </div>
  );
}
