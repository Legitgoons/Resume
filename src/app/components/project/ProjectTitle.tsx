import ColorPeriod from '../ColorPeriod';

interface ProjectTitleProps {
  title: string;
  children: React.ReactNode;
}

export default function ProjectTitle({ title, children }: ProjectTitleProps) {
  return (
    <div className="mb-4 flex h-max w-full flex-col items-start gap-y-3 md:sticky md:top-10 md:w-1/3">
      <h3 className="h3b">
        {title}
        <ColorPeriod />
      </h3>
      <ul className="p3b flex flex-col gap-y-1">{children}</ul>
    </div>
  );
}
