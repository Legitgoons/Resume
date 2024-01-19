export default function BulletSentence({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li>
      <span className="mr-1 text-Blue">•</span>
      {children}
    </li>
  );
}
