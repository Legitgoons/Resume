export default function ColorPeriod({
  isBlink = false,
}: {
  isBlink?: boolean;
}) {
  return (
    <span className={`${isBlink ? 'animate-blink' : ''} text-blue-400`}>.</span>
  );
}
