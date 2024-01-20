import Intro from './components/intro/Intro';
import Title from './components/intro/Title';
import Contact from './components/profile/Contact';
import Education from './components/profile/Education';

export default function Home() {
  return (
    <main className="flex w-4/5 flex-col gap-y-10 break-keep md:w-2/3 lg:w-1/2 xl:w-2/5">
      <Title />
      <Intro />
      <Education />
      <Contact />
    </main>
  );
}
