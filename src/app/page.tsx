import Intro from './components/intro/Intro';
import Title from './components/intro/Title';

export default function Home() {
  return (
    <main className="w-4/5 gap-y-4 md:w-2/3 lg:w-3/5">
      <Title />
      <Intro />
    </main>
  );
}
