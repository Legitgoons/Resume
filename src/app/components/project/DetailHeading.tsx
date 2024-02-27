interface DetailHeadingProps {
  children: React.ReactNode;
}

export default function DetailHeading({ children }: DetailHeadingProps) {
  return <h5 className="p3b my-2">{children}</h5>;
}
