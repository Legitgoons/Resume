interface BulletSentenceProps {
  children: React.ReactNode;
}

export default function BulletSentence({ children }: BulletSentenceProps) {
  return (
    <li className="flex">
      <span className="mr-2 text-Blue">•</span>
      {children}
    </li>
  );
}
