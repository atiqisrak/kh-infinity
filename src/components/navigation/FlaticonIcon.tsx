interface FlaticonIconProps {
  name: string;
  className?: string;
}

/** Flaticon Uicons — class format: fi fi-rr-{name} */
export default function FlaticonIcon({ name, className = "" }: FlaticonIconProps) {
  return <i className={`fi fi-rr-${name} ${className}`.trim()} aria-hidden />;
}
