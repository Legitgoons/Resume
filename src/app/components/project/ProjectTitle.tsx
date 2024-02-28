import ColorPeriod from '../ColorPeriod';

interface ProjectTitleProps {
  title: string;
  children: React.ReactNode;
  isSticky?: boolean;
}

export default function ProjectTitle({
  title,
  children,
  isSticky = true,
}: ProjectTitleProps) {
  const Sticky = isSticky ? 'md:sticky md:top-10' : '';

  return (
    <div
      className={`mb-4 flex h-max w-full flex-col items-start gap-y-3 ${Sticky} md:w-1/3`}
    >
      <h3 className="h3b">
        {title}
        <ColorPeriod />
      </h3>
      <ul className="p3b flex flex-col gap-y-1">{children}</ul>
    </div>
  );
}
