import Image from 'next/image';
import Link from 'next/link';

import { ProjectResponse } from '@/app/type/project';

import ProjectDetail from './ProjectDetail';
import ProjectSentenceList from './ProjectSentenceList';
import ProjectTitle from './ProjectTitle';

interface ProjectProps {
  projectData: ProjectResponse[];
}

export default function Project({ projectData }: ProjectProps) {
  return (
    <div className=" flex flex-col gap-y-12">
      {projectData.map(
        ({ title, period, role, titleLinks, skills, details }) => (
          <article
            className="flex flex-col flex-wrap md:relative md:flex-row"
            key={title}
          >
            <ProjectTitle title={title}>
              <li>{period}</li>
              <li>{role}</li>
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
              <ProjectDetail title="Skills">
                <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2">
                  {skills.map((skill) => (
                    <Image
                      key={skill.imgAlt}
                      src={skill.imgSrc}
                      alt={skill.imgAlt}
                      width={100}
                      height={20}
                      className="h-6 w-20 md:h-7 md:w-24"
                    />
                  ))}
                </div>
              </ProjectDetail>
              {details.map((detail) => (
                <ProjectDetail key={detail.title} title={detail.title}>
                  <ProjectSentenceList sentences={detail.sentences} />
                </ProjectDetail>
              ))}
            </section>
          </article>
        )
      )}
    </div>
  );
}
