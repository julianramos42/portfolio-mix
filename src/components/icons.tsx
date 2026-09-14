import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function GithubIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden className={className} {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export function LinkedinIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden className={className} {...props}>
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zM4.943 13.394V6.187H2.542v7.207h2.401zm-1.2-8.192a1.392 1.392 0 1 0 0-2.784 1.392 1.392 0 0 0 0 2.784zM13.66 13.394v-3.95c0-2.116-1.13-3.1-2.638-3.1-1.217 0-1.762.67-2.067 1.139V6.187H6.554c.03.68 0 7.207 0 7.207h2.402V9.606c0-.216.015-.432.08-.586.173-.432.568-.879 1.231-.879.869 0 1.216.663 1.216 1.635v3.618h2.177z" />
    </svg>
  );
}

export function WhatsappIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden className={className} {...props}>
      <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61-.17-.07-.3-.1-.42.1-.13.19-.49.61-.6.73-.11.13-.22.14-.41.05-.19-.09-.8-.3-1.52-.94-.56-.52-.94-1.17-1.05-1.37-.11-.19-.01-.3.08-.39.08-.08.19-.22.28-.33.09-.12.19-.19.31-.06.13-.03.23-.01-.32-.05-.09-.42-1.01-.58-1.39-.15-.37-.31-.32-.42-.33h-.36c-.13 0-.34.05-.51.24-.18.19-.68.67-.68 1.62 0 .96.7 1.88.8 2.01.09.13 1.37 2.1 3.33 2.94.47.2.83.32 1.11.41.47.15.9.13 1.23.08.38-.06 1.1-.45 1.26-.88.15-.43.15-.8.11-.88-.04-.08-.17-.13-.36-.23zM8 1.5c-3.61 0-6.51 2.94-6.51 6.56 0 1.16.3 2.29.87 3.29L1.5 14.5l3.26-.85c.96.51 2.03.78 3.14.78h.01c3.6 0 6.51-2.94 6.51-6.56A6.47 6.47 0 0 0 13.92 3.6 6.47 6.47 0 0 0 8 1.5zM8 13.6c-.98 0-1.94-.26-2.78-.75l-.2-.12-1.95.52.52-1.9-.13-.21a5.44 5.44 0 0 1-.84-2.99c0-2.96 2.41-5.38 5.38-5.38 1.43 0 2.78.56 3.79 1.57a5.33 5.33 0 0 1 1.57 3.81c0 2.96-2.42 5.38-5.52 5.38z" />
    </svg>
  );
}

export function PlayIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} {...props}>
      <path d="M8 5.14v14L19 12 8 5.14z" />
    </svg>
  );
}

export function RecordIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} {...props}>
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

export function ChevronLeftIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className} {...props}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className} {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function ChevronDownIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function CodeIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className} {...props}>
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}

export function VideoIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className} {...props}>
      <path d="m22 8-6 4 6 4V8Z" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}
