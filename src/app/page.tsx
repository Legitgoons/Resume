import Intro from './components/intro/Intro';
import Title from './components/intro/Title';
import Contact from './components/profile/Contact';
import Education from './components/profile/Education';

export default function Home() {
  return (
    <main className="flex w-4/5 flex-col gap-y-10 md:w-2/3 lg:w-7/12 ">
      <Title />
      <Intro />
      <Education />
      <Contact />
    </main>
  );
}
