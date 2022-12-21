import * as React from 'react';

export function NpmIcon({
  className,
  style,
}: {
  className?: string;
  style?: any;
}) {
  return (
    <svg
      style={style}
      className={className ?? 'h-6 w-6'}
      viewBox="0 0 780 250"
      stroke="currentColor"
      fill="currentColor"
    >
      <path d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path>
    </svg>
  );
}
