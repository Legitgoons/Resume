import { Analytics } from '@vercel/analytics/react';

import { connectDB } from '@/app/util/data';

import Progressbar from './components/app/Progressbar';
import ThemeButton from './components/app/ThemeButton';
import Intro from './components/intro/Intro';
import Title from './components/intro/Title';
import Experience from './components/others/Experience';
import Others from './components/others/Others';
import Contact from './components/profile/Contact';
import OtherProject from './components/project/OtherProject';
import Project from './components/project/Project';
import ThemeProvider from './components/provider/ThemeProvider';
import ItemTitle from './components/shared/ItemTitle';
import { ContactResponse } from './type/contact';
import { OthersResponse, ExperienceResponse } from './type/others';
import { ProjectDefaultResponse, ProjectResponse } from './type/project';

const db = (await connectDB).db('Portfolio');
const contact = await db
  .collection<ContactResponse>('Contact')
  .find()
  .toArray();
const exp = await db.collection<ExperienceResponse>('Exp').find().toArray();
const others = await db.collection<OthersResponse>('Others').find().toArray();
const projects = await db
  .collection<ProjectResponse>('Projects')
  .find()
  .toArray();
const otherProjects = await db
  .collection<ProjectDefaultResponse>('otherProjects')
  .find()
  .toArray();

export default function Home() {
  return (
    <ThemeProvider enableSystem>
      <Progressbar />
      <ThemeButton />
      <main className="my-12 flex w-4/5 max-w-3xl flex-col gap-y-12 break-keep lg:w-2/3 2xl:w-1/2">
        <Title />
        <Intro />
        <Contact contactData={contact} />
        <hr />
        <ItemTitle>Projects</ItemTitle>
        <div className="flex flex-col gap-y-12">
          <Project projectData={projects} />
          <hr />
          <ItemTitle>Other Projects</ItemTitle>
        </div>
        <OtherProject projectData={otherProjects} />
        <hr />
        <ItemTitle>Experience</ItemTitle>
        <Experience expData={exp} />
        <ItemTitle>Others</ItemTitle>
        <Others othersData={others} />
      </main>
      <Analytics />
    </ThemeProvider>
  );
}
