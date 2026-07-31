interface DividerProps {
  className?: string;
}

export default function Divider({ className = "" }: DividerProps) {
  return <hr className={`divider-line border-0 ${className}`} />;
}
