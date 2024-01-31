import Image from 'next/image';
import Link from 'next/link';

import { ProjectDefault } from '@/app/type/project';

import ProjectDetail from './ProjectDetail';
import ProjectSentenceList from './ProjectSentenceList';
import ProjectTitle from './ProjectTitle';

interface ProjectProps {
  projectData: ProjectDefault[];
}

export default function Others({ projectData }: ProjectProps) {
  return (
    <div className="flex flex-col gap-y-8">
      {projectData.map(({ title, period, titleLinks, details }) => (
        <article className="flex flex-col flex-wrap md:flex-row" key={title}>
          <ProjectTitle title={title}>
            <li>{period}</li>
            {titleLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="flex">
                  {link.imgSrc && link.imgAlt && (
                    <Image
                      src={link.imgSrc}
                      alt={link.imgAlt}
                      width={16}
                      height={16}
                      className="mx-1 size-3 sm:size-4"
                    />
                  )}
                  {link.text}
                </Link>
              </li>
            ))}
          </ProjectTitle>
          <section className="flex w-full flex-col gap-y-4 md:w-2/3">
            {details.map((detail) => (
              <ProjectDetail key={detail.title} title={detail.title}>
                <ProjectSentenceList sentences={detail.sentences} />
              </ProjectDetail>
            ))}
          </section>
        </article>
      ))}
    </div>
  );
}
