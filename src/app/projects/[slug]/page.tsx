import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioShell } from "../../portfolio-shell";
import { projects } from "../../portfolio-data";
import { ModuleFolderGallery } from "../module-folder-gallery";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project ? `${project.title} | Aryan Dalwadi` : "Project | Aryan Dalwadi",
    description: project?.overview,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PortfolioShell>
      <section className="section">
        <Link
          href="/projects"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#030712]"
        >
          <span aria-hidden="true">←</span>
          Back to Projects
        </Link>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ProjectImagePanel project={project} />
          <ProjectSummaryPanel project={project} />
        </div>

        <ProjectGallery project={project} />
      </section>
    </PortfolioShell>
  );
}

function ProjectImagePanel({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div className="grid min-h-52 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-5">
      {project.image ? (
        <Image
          alt={`${project.title} logo`}
          className="max-h-44 max-w-full object-contain"
          height={project.imageHeight ?? 220}
          src={project.image}
          width={project.imageWidth ?? 360}
        />
      ) : (
        <div className="grid size-32 place-items-center rounded-3xl bg-white/90 text-5xl font-black text-sky-600">
          {project.title.charAt(0)}
        </div>
      )}
    </div>
  );
}

function ProjectSummaryPanel({ project }: { project: (typeof projects)[number] }) {
  const summaryItems = [
    project.overview,
    project.problem,
    project.solution,
    ...project.features,
  ];

  return (
    <div className="rounded-xl bg-white p-5 shadow-[0_16px_60px_rgba(15,23,42,0.06)]">
      <h1 className="content-title">{project.title}</h1>

      <ul className="mt-4 space-y-2.5">
        {summaryItems.map((item) => (
          <li key={item} className="body-copy flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#364153]" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <p className="text-sm font-semibold text-[#030712]">Tech Stack:</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectGallery({ project }: { project: (typeof projects)[number] }) {
  const modules =
    project.galleryModules ??
    (project.galleryImages?.length
      ? [{ name: "Images", images: project.galleryImages }]
      : null);

  if (modules?.length) {
    return (
      <div className="mt-8">
        <ModuleFolderGallery modules={modules} projectTitle={project.title} />
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-xl border-2 border-sky-500 bg-sky-100 p-8">
      <div className="grid gap-8 md:grid-cols-3">
        <MockupPhone title={project.title} label="Dashboard" />
        <MockupPhone title={project.title} label="Workflow" />
        <MockupPhone title={project.title} label="Details" />
      </div>
    </div>
  );
}

function MockupPhone({ title, label }: { title: string; label: string }) {
  return (
    <div className="mx-auto w-full max-w-52 rounded-[2rem] bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.14)]">
      <div className="rounded-[1.5rem] bg-slate-50 p-4">
        <div className="mb-4 flex items-center justify-between text-[10px] font-bold text-[#030712]">
          <span>09:30 PM</span>
          <span>•••</span>
        </div>
        <div className="grid size-12 place-items-center rounded-2xl bg-sky-100 text-xl font-black text-sky-600">
          {title.charAt(0)}
        </div>
        <h3 className="mt-5 text-lg font-semibold text-[#030712]">{label}</h3>
        <p className="mt-2 text-xs leading-5 text-[#364153]">
          {title} project interface preview for portfolio presentation.
        </p>
        <div className="mt-5 space-y-3">
          <div className="h-3 rounded-full bg-slate-200" />
          <div className="h-3 w-3/4 rounded-full bg-slate-200" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-16 rounded-xl bg-sky-100" />
            <div className="h-16 rounded-xl bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
