interface ExperienceDetailProps {
  children: React.ReactNode;
}

export default function ExperienceDetail({ children }: ExperienceDetailProps) {
  return (
    <section className="flex w-full flex-col items-start justify-between gap-y-3 ">
      <ul className="p3r flex flex-col gap-y-2">{children}</ul>
    </section>
  );
}
