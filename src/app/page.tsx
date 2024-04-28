import { Analytics } from '@vercel/analytics/react';

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
import {
  contact,
  exp,
  otherProjects,
  others,
  projects,
  study,
} from './util/fetchData';

export default function Home() {
  return (
    <ThemeProvider enableSystem>
      <Progressbar />
      <ThemeButton />
      <main className="my-12 flex w-4/5 max-w-3xl flex-col gap-y-8 break-keep lg:w-2/3 2xl:w-1/2">
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
        <ItemTitle>Study</ItemTitle>
        <Others othersData={study} />
        <ItemTitle>Experience</ItemTitle>
        <Experience expData={exp} />
        <ItemTitle>Others</ItemTitle>
        <Others othersData={others} />
      </main>
      <Analytics />
    </ThemeProvider>
  );
}
