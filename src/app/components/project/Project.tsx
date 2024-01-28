import Image from 'next/image';
import Link from 'next/link';

import { Project } from '@/app/type/project';

import BulletSentence from '../BulletSentence';

import DetailHeading from './DetailHeading';
import ProjectDetail from './ProjectDetail';
import ProjectSentenceList from './ProjectSentenceList';
import ProjectTitle from './ProjectTitle';

interface ProjectProps {
  projectData: Project[];
}

export default function Project({ projectData }: ProjectProps) {
  return (
    <div className="flex flex-col gap-y-8">
      {projectData.map(
        ({ title, period, role, titleLinks, details, reviews, blog }) => (
          <article className="flex flex-col flex-wrap md:flex-row" key={title}>
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
              {details.map((detail) => (
                <ProjectDetail key={detail.title} title={detail.title}>
                  <ProjectSentenceList sentences={detail.sentences} />
                </ProjectDetail>
              ))}
              {reviews.map((review) => (
                <ProjectDetail key={review.title} title={review.title}>
                  {review.details.map((detail) => (
                    <div key={detail.heading}>
                      <DetailHeading>{detail.heading}</DetailHeading>
                      <div className="flex flex-col gap-y-2">
                        <ProjectSentenceList sentences={detail.sentences} />
                      </div>
                    </div>
                  ))}
                </ProjectDetail>
              ))}
              {blog && (
                <ProjectDetail title={blog.title}>
                  {blog.links.map((link) => (
                    <BulletSentence key={link.href}>
                      <Link href={link.href}>{link.text}</Link>
                    </BulletSentence>
                  ))}
                </ProjectDetail>
              )}
            </section>
          </article>
        )
      )}
    </div>
  );
}
