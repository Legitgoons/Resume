import { connectDB } from '@/app/util/data';

import Experience from './components/Experience/Experience';
import Intro from './components/intro/Intro';
import Title from './components/intro/Title';
import ItemTitle from './components/ItemTitle';
import Contact from './components/profile/Contact';
import Education from './components/profile/Education';
import Others from './components/project/Others';
import Project from './components/project/Project';
import { OtherProjectData } from './data/otherProject';
import { projectData } from './data/project';
import { ExperienceResponse } from './type/experience';

const db = (await connectDB).db('Portfolio');
const exp = await db.collection<ExperienceResponse>('Exp').find().toArray();

export default function Home() {
  return (
    <main className="my-12 flex w-4/5 max-w-3xl flex-col gap-y-12 break-keep md:w-2/3 lg:w-1/2 2xl:w-2/5">
      <Title />
      <Intro />
      <Education />
      <Contact />
      <ItemTitle>Project</ItemTitle>
      <div className="flex flex-col">
        <Project projectData={projectData} />
        <ItemTitle>Others</ItemTitle>
      </div>
      <Others projectData={OtherProjectData} />
      <ItemTitle>Experience</ItemTitle>
      <Experience expData={exp} />
    </main>
  );
}
