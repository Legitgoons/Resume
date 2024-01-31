import ColorPeriod from '../ColorPeriod';

interface ExperienceDetailProps {
  title: string;
  children: React.ReactNode;
}

export default function ExperienceDetail({
  title,
  children,
}: ExperienceDetailProps) {
  return (
    <section className="flex w-full flex-col items-start justify-between gap-y-3 ">
      <h4 className="p1b">
        {title}
        <ColorPeriod />
      </h4>
      <ul className="p3r flex flex-col gap-y-2">{children}</ul>
    </section>
  );
}
