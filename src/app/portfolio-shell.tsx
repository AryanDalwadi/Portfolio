"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { MobileHeader } from "./mobile-header";
import { NavIcon } from "./nav-icon";
import { navItems, profile } from "./portfolio-data";
import { ProfileAvatar } from "./profile-avatar";
import { ContactSection } from "./portfolio-sections";

export function PortfolioShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-[#eef4f8] text-slate-950 lg:grid lg:grid-cols-[16rem_minmax(0,1fr)]">
      <aside className="hidden p-4 lg:block">
        <div className="sticky top-4 flex h-[calc(100vh-2rem)] flex-col rounded-[20px] bg-white p-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <ProfileAvatar variant="sidebar" />
            <div className="min-w-0">
              <p className="truncate text-[15px] font-bold leading-5">{profile.name}</p>
              <p className="truncate text-[13px] font-medium leading-5 text-slate-500">
                {profile.title}
              </p>
            </div>
          </div>

          <nav className="mt-4 space-y-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex h-11 items-center gap-3 rounded-md px-3 font-[Switzer,Inter,ui-sans-serif,system-ui,sans-serif] text-[16px] font-medium leading-5 tracking-[0] transition ${
                    isActive
                      ? "bg-slate-100 text-[#030712]"
                      : "text-[#030712] hover:bg-slate-100"
                  }`}
                >
                  <span
                    className={`grid size-6 place-items-center rounded border transition ${
                      isActive
                        ? "border-sky-200 text-sky-600"
                        : "border-slate-200 text-slate-500 group-hover:border-sky-200 group-hover:text-sky-600"
                    }`}
                  >
                    <NavIcon name={item.icon} />
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-xl bg-sky-50 p-3 text-[12px] font-medium text-slate-700">
            <a
              className="flex items-center gap-2.5 font-semibold transition hover:text-sky-700"
              href={`mailto:${profile.email}`}
            >
              <span className="grid size-4 shrink-0 place-items-center rounded-md bg-white text-sky-600">
                <SidebarContactIcon name="mail" />
              </span>
              <span className="truncate">{profile.email}</span>
            </a>
            <a
              className="mt-2.5 flex items-center gap-2.5 transition hover:text-sky-700"
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
            >
              <span className="grid size-4 shrink-0 place-items-center rounded-md bg-white text-sky-600">
                <SidebarContactIcon name="phone" />
              </span>
              <span>{profile.phone}</span>
            </a>
          </div>
        </div>
      </aside>

      <div className="min-w-0 px-5 py-6 lg:px-10">
        <MobileHeader navItems={navItems} />
        {children}
        <ContactSection />
      </div>
    </main>
  );
}

function SidebarContactIcon({ name }: { name: "mail" | "phone" }) {
  const baseProps = {
    "aria-hidden": true,
    className: "size-4",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: "1.8",
    viewBox: "0 0 24 24",
  };

  if (name === "mail") {
    return (
      <svg {...baseProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg {...baseProps}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 5h2" />
      <path d="M10.5 18.5h3" />
    </svg>
  );
}
