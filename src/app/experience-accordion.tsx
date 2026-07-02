"use client";

import { useState } from "react";
import { experience } from "./portfolio-data";

export function ExperienceAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="mt-8 space-y-4">
      {experience.map((item, index) => {
        const isActive = index === activeIndex;
        const [company, location = "Ahmedabad, India"] = item.company.split(", ");

        return (
          <div
            key={`${item.company}-${item.role}`}
            className="overflow-hidden rounded-xl bg-white shadow-[0_10px_40px_rgba(15,23,42,0.04)]"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(isActive ? null : index)}
              aria-expanded={isActive}
              className={`w-full border-b border-[#D1D5DC99] p-5 text-left transition ${
                isActive ? "bg-sky-50/60" : "bg-white hover:bg-slate-50"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="content-title">{item.role}</h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.08em] text-[#364153]">
                    {company} <span className="mx-2">•</span> {location}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase text-[#364153]">
                    <CalendarIcon />
                    {item.duration}
                  </p>
                  <ChevronIcon isOpen={isActive} />
                </div>
              </div>
            </button>

            {isActive ? (
              <div className="grid border-b border-[#D1D5DC99] bg-white lg:grid-cols-[1.2fr_0.8fr]">
                <div className="p-6 lg:border-r lg:border-[#D1D5DC99]">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#364153]">
                    About
                  </p>
                  <ul className="mt-4 space-y-3">
                    <li className="body-copy flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#364153]" />
                      {item.details}
                    </li>
                    <li className="body-copy flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#364153]" />
                      {item.impact}
                    </li>
                    {item.projects?.map((project) => (
                      <li key={project} className="body-copy flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#364153]" />
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#364153]">
                    Skills
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {item.technologies.split(", ").map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#364153] px-4 py-2 text-xs font-medium uppercase text-[#364153]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function CalendarIcon() {
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
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M3.5 10h17" />
    </svg>
  );
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`size-5 text-[#364153] transition-transform ${
        isOpen ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
