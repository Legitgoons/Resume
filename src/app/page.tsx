import { projectData } from '@/app/data/project';

import Intro from './components/intro/Intro';
import Title from './components/intro/Title';
import ItemTitle from './components/ItemTitle';
import Contact from './components/profile/Contact';
import Education from './components/profile/Education';
import Project from './components/project/Project';

export default function Home() {
  return (
    <main className="my-12 flex w-4/5 max-w-3xl flex-col gap-y-12 break-keep md:w-2/3 lg:w-1/2 2xl:w-2/5">
      <Title />
      <Intro />
      <Education />
      <Contact />
      <ItemTitle>Project</ItemTitle>
      <Project projectData={projectData} />
    </main>
  );
}
