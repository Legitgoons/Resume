interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <section className="flex flex-col items-start justify-between gap-y-3 md:flex-row">
      <h2 className="h2b">
        {title}
        <span className="text-blue-400">.</span>
      </h2>
      <ul className="p2r flex w-full flex-col gap-y-2 md:w-2/3">{children}</ul>
    </section>
  );
}
