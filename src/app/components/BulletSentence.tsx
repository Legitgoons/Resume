export default function BulletSentence({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li className="flex">
      <span className="mr-2 text-Blue">•</span>
      {children}
    </li>
  );
}
