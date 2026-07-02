import type { ReactNode } from "react";

export type NavIconName =
  | "home"
  | "user"
  | "code"
  | "folder"
  | "briefcase"
  | "graduation"
  | "file"
  | "mail";

export type NavItem = {
  label: string;
  href: string;
  icon: NavIconName;
};

const paths: Record<NavIconName, ReactNode> = {
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 10v9h14v-9" />
      <path d="M9 19v-6h6v6" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.8-4 4.5-6 8-6s6.2 2 8 6" />
    </>
  ),
  code: (
    <>
      <path d="m8 9-4 3 4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m14 5-4 14" />
    </>
  ),
  folder: (
    <>
      <path d="M3 7h7l2 2h9v10H3z" />
      <path d="M3 7v12" />
    </>
  ),
  briefcase: (
    <>
      <path d="M9 7V5h6v2" />
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M3 12h18" />
    </>
  ),
  graduation: (
    <>
      <path d="m3 8 9-4 9 4-9 4z" />
      <path d="M7 10v5c2 2 8 2 10 0v-5" />
      <path d="M21 8v7" />
    </>
  ),
  file: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
};

export function NavIcon({ name }: { name: NavIconName }) {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}
