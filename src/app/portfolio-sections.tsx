import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ExperienceAccordion } from "./experience-accordion";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  techGroups,
} from "./portfolio-data";
import { ProfileAvatar } from "./profile-avatar";

const services = [
  {
    title: "Frontend Development",
    text: "Building fast, responsive React.js interfaces with reusable components and clean state management.",
    icon: "frontend",
  },
  {
    title: "Backend APIs",
    text: "Designing scalable Node.js and Express.js REST APIs with validation, error handling, and secure patterns.",
    icon: "backend",
  },
  {
    title: "Database Optimization",
    text: "Creating efficient MSSQL and MySQL schemas, stored procedures, and optimized queries for critical workflows.",
    icon: "database",
  },
  {
    title: "SaaS Architecture",
    text: "Developing multi-tenant platforms with role-based access, isolated tenant data, and modular business flows.",
    icon: "saas",
  },
  {
    title: "API Integrations",
    text: "Integrating Google Maps, WhatsApp APIs, Firebase, webhooks, and third-party services into production apps.",
    icon: "integration",
  },
  {
    title: "Real-Time Systems",
    text: "Implementing live tracking, push notifications, Redis synchronization, and automated communication workflows.",
    icon: "realtime",
  },
];

function parseProjectEntry(entry: string) {
  const separatorIndex = entry.indexOf(": ");
  if (separatorIndex === -1) {
    return { title: entry, description: "" };
  }

  return {
    title: entry.slice(0, separatorIndex),
    description: entry.slice(separatorIndex + 2),
  };
}

export function HeroSection() {
  return (
    <section className="scroll-mt-8 pb-8 pt-3 md:pb-10 md:pt-5">
      <SectionKicker>Meet {profile.name}</SectionKicker>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h1 className="display-title mt-2 max-w-3xl">
            Full Stack Developer building scalable React and Node.js products.
          </h1>
          <p className="body-copy mt-4 max-w-2xl text-[18px] leading-7">
            I have {profile.experience} years of experience building web
            applications with React.js, Node.js, Express.js, and MSSQL, with a
            focus on REST APIs, real-time systems, SaaS architecture, and secure
            integrations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/projects">
              View Projects
            </Link>
            <a className="btn-secondary" href="/Aryan-Dalwadi-Resume.pdf" download>
              Download Resume
            </a>
            <Link className="btn-secondary" href="#contact">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-5">
            <div className="flex justify-center md:justify-start">
              <div className="md:hidden">
                <ProfileAvatar variant="contact" />
              </div>
              <div className="hidden md:block">
                <ProfileAvatar variant="hero" />
              </div>
            </div>
            <div className="w-full min-w-0">
              <span className="inline-block rotate-[-7deg] rounded-lg bg-sky-500 px-4 py-2 text-sm font-bold text-white">
                Hello there!!!
              </span>
              <p className="body-copy mt-5">
                I&apos;m a Full Stack Developer with 3 years of experience
                working with React.js and Node.js. I enjoy building fast,
                user-friendly web applications, solving real-world problems, and
                continuously learning new technologies to improve my skills.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-x-8 gap-y-5 md:grid-cols-2">
            <HeroContactItem
              href={`mailto:${profile.email}`}
              icon="mail"
              value={profile.email}
            />
            <HeroContactItem
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              icon="phone"
              value={profile.phone}
            />
            <HeroContactItem icon="location" value={profile.location} />
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <HeroStat
              icon="rocket"
              title="80+ API Modules Built"
              text="RESTful API modules delivered with validation, error handling, and standardized responses."
            />
            <HeroStat
              icon="globe"
              title="3 Years of Experience"
              text="Delivered scalable full stack solutions across CRM, logistics, logistic, billing, and healthcare platforms."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="section">
      <SectionKicker>Services</SectionKicker>
      <h2 className="display-title mt-2">What I Do</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-xl bg-white p-7 shadow-[0_16px_60px_rgba(15,23,42,0.06)]"
          >
            <div className="grid size-12 place-items-center text-slate-900">
              <ServiceIcon name={service.icon} />
            </div>
            <h3 className="content-title mt-12">
              {service.title}
            </h3>
            <p className="body-copy mt-3">
              {service.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WhyMeSection() {
  const currentRole = experience[0];
  const [company, location = "Ahmedabad, India"] =
    currentRole.company.split(", ");
  const orgResponsibilities =
    "responsibilities" in currentRole && currentRole.responsibilities
      ? currentRole.responsibilities
      : [currentRole.details, currentRole.impact];
  const projectEntries = currentRole.projects ?? [];

  return (
    <section className="section">
      <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <SectionKicker>Why Me</SectionKicker>
          <h2 className="display-title mt-4 max-w-sm">
            Roles &amp; Responsibilities
          </h2>
          <p className="body-copy mt-5 max-w-md">
            Full Stack Developer at {company}, building and scaling SaaS-based
            web products with React.js, Node.js, Express.js, and MSSQL.
          </p>

          <div className="mt-6 rounded-xl bg-white p-5 shadow-[0_16px_60px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-sky-600">
              {currentRole.role}
            </p>
            <h3 className="content-title mt-2">{company}</h3>
            <p className="body-copy mt-1">{location}</p>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.08em] text-[#364153]">
              {currentRole.duration}
            </p>
          </div>

          <ul className="mt-6 space-y-3">
            {orgResponsibilities.map((item) => (
              <li key={item} className="body-copy flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-500" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-700"
            href="/experience"
          >
            View full experience
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#364153]">
            Project Responsibilities
          </p>
          {projectEntries.map((entry) => {
            const { title, description } = parseProjectEntry(entry);

            return (
              <article
                key={title}
                className="rounded-xl bg-white p-6 shadow-[0_16px_60px_rgba(15,23,42,0.06)]"
              >
                <h3 className="content-title">{title}</h3>
                <p className="body-copy mt-3">{description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TechStackSection() {
  return (
    <section className="section">
      <SectionKicker>Tech Stack</SectionKicker>
      <h2 className="section-title">Tools I Work With</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {techGroups.map((group) => (
          <div key={group.title} className="card">
            <h3 className="content-title">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section className="section">
      <SectionKicker>Featured Work</SectionKicker>
      <h2 className="section-title">Featured Projects</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-xl bg-white pb-6 shadow-[0_16px_60px_rgba(15,23,42,0.06)]"
          >
            <ProjectVisual
              image={project.image}
              imageFit={project.imageFit}
              imageHeight={project.imageHeight}
              imageWidth={project.imageWidth}
              title={project.title}
              index={index}
            />
            <div className="px-6 pt-5">
              <h3 className="content-title">{project.title}</h3>
              <p className="body-copy mt-1 line-clamp-2">{project.overview}</p>
              <Link
                href={`/projects/${project.slug}`}
                className="mt-5 inline-flex items-center gap-2 rounded border border-[#D1D5DC99] px-4 py-2 text-sm font-medium text-[#030712] transition hover:bg-slate-50"
              >
                View Shot
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="section">
      <SectionKicker>Career</SectionKicker>
      <h2 className="section-title">Experience Timeline</h2>
      <ExperienceAccordion />
    </section>
  );
}

export function EducationSection() {
  return (
    <section className="section">
      <SectionKicker>Learning</SectionKicker>
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="section-title">Education</h2>
          <div className="mt-6 space-y-4">
            {education.map((item) => (
              <div key={item.degree} className="card">
                <h3 className="content-title">{item.degree}</h3>
                <p className="body-copy mt-2">{item.institution}</p>
                <p className="body-copy mt-1">
                  Graduation Year: {item.year}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="section-title">Certifications</h2>
          <div className="mt-6 space-y-3">
            {certifications.map((item) => (
              <p key={item} className="body-copy card">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ResumeSection() {
  return (
    <section className="section">
      <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] md:p-10">
        <SectionKicker>Resume</SectionKicker>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-5">
          <div>
            <h2 className="section-title">Resume download area</h2>
            <p className="body-copy mt-4 max-w-2xl">
              Download Aryan Dalwadi&apos;s full stack developer resume,
              including experience with React.js, Node.js, Express.js, MSSQL,
              real-time systems, SaaS platforms, and API integrations.
            </p>
          </div>
          <a className="btn-primary" href="/Aryan-Dalwadi-Resume.pdf" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="section pb-6">
      <div className="rounded-[10px] bg-[#001d2e] px-7 py-9 text-white shadow-[0_20px_80px_rgba(15,23,42,0.18)] md:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_200px_minmax(0,1.15fr)] lg:items-center">
          <div>
            <SectionKicker className="text-slate-200 [&_svg]:text-sky-300">
              Contact Me
            </SectionKicker>
            <h2 className="display-title mt-5 text-white">
              Let&apos;s Connect
            </h2>
          </div>

          <ProfileAvatar variant="contact" />

          <div>
            <p className="body-copy max-w-lg text-slate-300">
              I&apos;m always open to new opportunities and collaborations.
              Get in touch to see how I can help bring your vision to life.
            </p>

            <div className="mt-5 divide-y divide-white/10 text-sm font-semibold">
              <ContactLine href={`mailto:${profile.email}`} icon="mail">
                {profile.email}
              </ContactLine>
              <ContactLine href={`tel:${profile.phone.replace(/\s/g, "")}`} icon="phone">
                {profile.phone}
              </ContactLine>
            </div>

            <div className="mt-6 flex gap-3">
              <SocialLink href={profile.linkedin} label="LinkedIn" icon="linkedin" />
              <SocialLink href={profile.github} label="GitHub" icon="github" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroContactItem({
  icon,
  value,
  href,
}: {
  icon: "mail" | "phone" | "location" | "calendar";
  value: string;
  href?: string;
}) {
  return (
    <p className="flex items-center gap-3 text-[#364153]">
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-sky-50 text-sky-600">
        <HeroMiniIcon name={icon} />
      </span>
      {href ? (
        <a
          className="text-[16px] font-medium leading-6 transition hover:text-sky-600"
          href={href}
        >
          {value}
        </a>
      ) : (
        <span className="text-[16px] font-medium leading-6">{value}</span>
      )}
    </p>
  );
}

function HeroStat({
  icon,
  title,
  text,
}: {
  icon: "rocket" | "globe";
  title: string;
  text: string;
}) {
  return (
    <div>
      <span className="grid size-12 place-items-center text-slate-900">
        <HeroMiniIcon name={icon} />
      </span>
      <h3 className="content-title mt-4">
        {title}
      </h3>
      <p className="body-copy mt-2">
        {text}
      </p>
    </div>
  );
}

function HeroMiniIcon({
  name,
}: {
  name: "mail" | "phone" | "location" | "calendar" | "rocket" | "globe";
}) {
  const baseProps = {
    "aria-hidden": true,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: "1.8",
    viewBox: "0 0 24 24",
  };

  if (name === "mail") {
    return (
      <svg className="size-5" {...baseProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg className="size-5" {...baseProps}>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M11 5h2" />
        <path d="M10.5 18.5h3" />
      </svg>
    );
  }

  if (name === "location") {
    return (
      <svg className="size-5" {...baseProps}>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg className="size-5" {...baseProps}>
        <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
        <path d="M8 3v4" />
        <path d="M16 3v4" />
        <path d="M3.5 10h17" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01M12 17.5h.01" />
      </svg>
    );
  }

  if (name === "rocket") {
    return (
      <svg className="size-12" {...baseProps} strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M3 9h18" />
        <path d="m9 14-2 2 2 2" />
        <path d="m15 14 2 2-2 2" />
        <path d="m13 13-2 6" />
      </svg>
    );
  }

  return (
    <svg className="size-12" {...baseProps} strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.2 2.4 3.4 5.5 3.4 9S14.2 18.6 12 21" />
      <path d="M12 3c-2.2 2.4-3.4 5.5-3.4 9S9.8 18.6 12 21" />
      <path d="M5.6 6.5h12.8" />
      <path d="M5.6 17.5h12.8" />
    </svg>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const baseProps = {
    "aria-hidden": true,
    className: "size-12",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: "1.4",
    viewBox: "0 0 24 24",
  };

  if (name === "frontend") {
    return (
      <svg {...baseProps}>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 18v3" />
        <path d="m9 10-2 2 2 2" />
        <path d="m15 10 2 2-2 2" />
      </svg>
    );
  }

  if (name === "backend") {
    return (
      <svg {...baseProps}>
        <rect x="4" y="4" width="16" height="5" rx="1.5" />
        <rect x="4" y="15" width="16" height="5" rx="1.5" />
        <path d="M7 9v6" />
        <path d="M17 9v6" />
        <path d="M8 6.5h.01M8 17.5h.01" />
      </svg>
    );
  }

  if (name === "database") {
    return (
      <svg {...baseProps}>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    );
  }

  if (name === "saas") {
    return (
      <svg {...baseProps}>
        <path d="M12 4 4 8l8 4 8-4-8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 16 8 4 8-4" />
      </svg>
    );
  }

  if (name === "integration") {
    return (
      <svg {...baseProps}>
        <path d="M8 12h8" />
        <path d="M7 7a4 4 0 0 0 0 8" />
        <path d="M17 7a4 4 0 0 1 0 8" />
        <circle cx="5" cy="12" r="2" />
        <circle cx="19" cy="12" r="2" />
      </svg>
    );
  }

  return (
    <svg {...baseProps}>
      <path d="M4 12a8 8 0 0 1 8-8" />
      <path d="M20 12a8 8 0 0 1-8 8" />
      <path d="M12 4v4l3-3" />
      <path d="M12 20v-4l-3 3" />
      <circle cx="12" cy="12" r="2" />
      <path d="M14 12h5" />
      <path d="M5 12h5" />
    </svg>
  );
}

function SectionKicker({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`section-kicker flex items-center gap-3 ${className}`}>
      <SparkleIcon />
      {children}
    </p>
  );
}

function SparkleIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0 text-sky-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 1.5 11.9 7.9 18.5 10l-6.6 2.1L10 18.5l-1.9-6.4L1.5 10l6.6-2.1L10 1.5Z" />
    </svg>
  );
}

function ContactLine({
  href,
  icon,
  children,
}: {
  href: string;
  icon: "mail" | "phone";
  children: ReactNode;
}) {
  return (
    <a className="flex items-center gap-3 py-4 text-slate-100" href={href}>
      <span className="text-slate-300">
        {icon === "mail" ? (
          <svg
            aria-hidden="true"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
          </svg>
        )}
      </span>
      {children}
    </a>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: "linkedin" | "github";
  label: string;
}) {
  return (
    <a
      aria-label={label}
      className="grid size-10 place-items-center rounded-full border border-white/25 text-slate-200 transition hover:border-sky-300 hover:text-sky-300"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {icon === "linkedin" ? (
        <svg aria-hidden="true" className="size-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ) : (
        <svg aria-hidden="true" className="size-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      )}
    </a>
  );
}

function ProjectVisual({
  image,
  imageFit = "contain",
  imageHeight = 150,
  imageWidth = 150,
  title,
  index,
}: {
  image?: string;
  imageFit?: string;
  imageHeight?: number;
  imageWidth?: number;
  title: string;
  index: number;
}) {
  const palettes = [
    "from-slate-950 via-slate-800 to-sky-900",
    "from-sky-50 via-white to-slate-100",
    "from-slate-100 via-white to-sky-50",
    "from-lime-50 via-white to-slate-100",
    "from-slate-100 via-white to-blue-100",
    "from-black via-slate-900 to-sky-950",
  ];

  return (
    <div
      className={`relative grid h-50 overflow-hidden bg-gradient-to-br ${
        palettes[index % palettes.length]
      }`}
    >
      {image ? (
        <div
          className={`grid h-full w-full place-items-center ${
            imageFit === "cover" ? "p-0" : "p-4"
          }`}
        >
          <Image
            alt={`${title} logo`}
            className={`max-h-full max-w-full ${
              imageFit === "cover" ? "h-full w-full object-cover" : "object-contain"
            }`}
            height={imageHeight}
            src={image}
            style={
              imageFit === "cover"
                ? undefined
                : { height: imageHeight, width: imageWidth }
            }
            width={imageWidth}
          />
        </div>
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.28),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(15,23,42,0.18),transparent_35%)]" />
          <div className="relative m-auto grid size-24 place-items-center rounded-3xl bg-white/90 text-4xl font-black text-sky-600 shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
            {title.charAt(0)}
          </div>
          <div className="absolute bottom-5 left-6 right-6 h-2 rounded-full bg-white/40" />
          <div className="absolute bottom-9 left-6 h-2 w-1/2 rounded-full bg-white/60" />
        </>
      )}
    </div>
  );
}

