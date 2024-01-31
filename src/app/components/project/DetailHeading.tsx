interface DetailHeadingProps {
  children: React.ReactNode;
}

export default function DetailHeading({ children }: DetailHeadingProps) {
  return <h5 className="p2b mb-4">{children}</h5>;
}
