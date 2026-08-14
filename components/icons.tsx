import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function MegaphoneIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 11v3" />
      <path d="M7 10v5" />
      <path d="M7 15l11 4V5L7 10H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3z" />
      <path d="M14.5 17.5a3 3 0 0 1-5.5 1" />
    </Base>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Base>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z" />
    </Base>
  );
}

export function DeviceIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </Base>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7 14l4-4 3 3 5-6" />
    </Base>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8" />
      <path d="M17.8 14.5c2 .9 3.2 3 3.2 5.5" />
    </Base>
  );
}

export function PenIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </Base>
  );
}

export function LayoutIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </Base>
  );
}

export function VideoIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="m22 8-6 4 6 4V8z" />
    </Base>
  );
}

export function WorkflowIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M10 6.5h4a2 2 0 0 1 2 2V14" />
      <path d="M14 17.5h-4a2 2 0 0 1-2-2V10" />
    </Base>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Base strokeWidth={2.2} {...props}>
      <path d="M5 13l4 4L19 7" />
    </Base>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Base strokeWidth={2} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Base>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Base strokeWidth={2} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Base>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <Base strokeWidth={2} {...props}>
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </Base>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Base strokeWidth={2} {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Base>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Base strokeWidth={2} {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </Base>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 20.5s-7.5-4.7-9.3-9.2C1.4 8 3.4 4.9 6.6 4.9c2 0 3.7 1.2 4.6 2.9.4.8.8.8 1.2 0 .9-1.7 2.6-2.9 4.6-2.9 3.2 0 5.2 3.1 3.9 6.4-1.8 4.5-8.9 9.2-8.9 9.2z" />
    </Base>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3 4.5 6v5c0 4.7 3.2 8.6 7.5 10 4.3-1.4 7.5-5.3 7.5-10V6L12 3z" />
      <path d="m9 12 2 2 4-4" />
    </Base>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m5.6 5.6 2.8 2.8" />
      <path d="m15.6 15.6 2.8 2.8" />
      <path d="m5.6 18.4 2.8-2.8" />
      <path d="m15.6 8.4 2.8-2.8" />
    </Base>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </Base>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <Base strokeWidth={2} {...props}>
      <path d="m15 6-6 6 6 6" />
    </Base>
  );
}

export const serviceIcons = {
  'digital-marketing': MegaphoneIcon,
  'email-marketing': MailIcon,
  'website-development': GlobeIcon,
  'mobile-app-development': DeviceIcon,
  'data-analytics': ChartIcon,
  'church-crm': UsersIcon,
  'graphic-design': PenIcon,
  'web-design': LayoutIcon,
  'video-editing': VideoIcon,
  'system-automation': WorkflowIcon,
} as const;

export type ServiceSlug = keyof typeof serviceIcons;
