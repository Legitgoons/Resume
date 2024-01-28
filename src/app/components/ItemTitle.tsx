import ColorPeriod from './ColorPeriod';

interface ItemTitleProps {
  children: React.ReactNode;
}

export default function ItemTitle({ children }: ItemTitleProps) {
  return (
    <h2 className="h1b">
      {children}
      <ColorPeriod />
    </h2>
  );
}
