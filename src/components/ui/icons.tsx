interface IconProps {
  className?: string;
}

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconListening({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 6h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H10l-4.5 4v-4H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function IconCompass({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M15.2 8.8 13 13l-4.2 2.2L11 11l4.2-2.2Z" />
    </svg>
  );
}

export function IconRelationship({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="9" cy="12" r="5.25" />
      <circle cx="15" cy="12" r="5.25" />
    </svg>
  );
}

export function IconCalendar({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.75" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
  );
}

export function IconLightbulb({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M9.25 18.5h5.5M10 21h4M12 3a6 6 0 0 0-3.4 10.94c.5.36.78.94.78 1.56v.5h5.24v-.5c0-.62.28-1.2.78-1.56A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

export function IconGallery({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="14" rx="1.5" />
      <circle cx="8.5" cy="9.5" r="1.4" />
      <path d="M21 15.5 16.2 10.7 12 15l-3-3-6 5" />
    </svg>
  );
}
