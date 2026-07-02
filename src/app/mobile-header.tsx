"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavIcon, type NavItem } from "./nav-icon";
import { profile } from "./portfolio-data";
import { ProfileAvatar } from "./profile-avatar";

export function MobileHeader({ navItems }: { navItems: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 mb-8 rounded-[20px] bg-white/90 p-3 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur lg:hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ProfileAvatar variant="mobile" />
          <div className="min-w-0">
            <p className="truncate text-[15px] font-bold leading-5">{profile.name}</p>
            <p className="truncate text-[13px] font-medium leading-5 text-slate-500">
              {profile.title}
            </p>
          </div>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="grid size-10 place-items-center rounded-lg bg-slate-100 text-slate-900 transition hover:bg-sky-100"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <nav className="mt-4 grid gap-1.5 border-t border-slate-100 pt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`group flex h-11 items-center gap-3 rounded-md px-3 font-[Switzer,Inter,ui-sans-serif,system-ui,sans-serif] text-[14px] font-medium leading-5 tracking-[0] transition ${
                  isActive
                    ? "bg-slate-100 text-[#030712]"
                    : "text-[#030712] hover:bg-slate-100"
                }`}
              >
                <span
                  className={`grid size-7 place-items-center rounded border transition ${
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
      ) : null}
    </header>
  );
}
