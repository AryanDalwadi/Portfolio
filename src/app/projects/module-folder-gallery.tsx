"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryModule = {
  name: string;
  images: string[];
};

type ModuleFolderGalleryProps = {
  projectTitle: string;
  modules: GalleryModule[];
};

export function ModuleFolderGallery({
  projectTitle,
  modules,
}: ModuleFolderGalleryProps) {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openedModule = modules.find((module) => module.name === activeModule);

  return (
    <>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-[0_16px_60px_rgba(15,23,42,0.06)]">
        {openedModule ? (
          <ModuleScreensView
            module={openedModule}
            onBack={() => setActiveModule(null)}
            onOpenImage={setActiveImage}
            projectTitle={projectTitle}
          />
        ) : (
          <FolderHomeView modules={modules} onOpenModule={setActiveModule} />
        )}
      </div>

      {activeImage ? (
        <ImageLightbox
          alt={`${projectTitle} screenshot`}
          onClose={() => setActiveImage(null)}
          src={activeImage}
        />
      ) : null}
    </>
  );
}

function FolderHomeView({
  modules,
  onOpenModule,
}: {
  modules: GalleryModule[];
  onOpenModule: (name: string) => void;
}) {
  return (
    <div>
      <div className="mb-6">
        <p className="section-kicker">Project Modules</p>
        <p className="body-copy mt-2">
          Click a folder to view images from that CRM module.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {modules.map((module) => (
          <button
            key={module.name}
            type="button"
            onClick={() => onOpenModule(module.name)}
            className="group rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-sky-300 hover:shadow-[0_12px_40px_rgba(14,165,233,0.12)]"
          >
            <div className="mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-2xl bg-slate-100 p-2.5 transition group-hover:bg-sky-50">
              <div className="grid h-full grid-cols-2 gap-2.5">
                {module.images.slice(0, 4).map((image) => (
                  <div
                    key={image}
                    className="overflow-hidden rounded-lg border border-slate-200 bg-white"
                  >
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="size-full object-cover object-top"
                      height={88}
                      src={image}
                      width={88}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="content-title">{module.name}</p>
              <p className="body-copy mt-1 text-slate-500">
                {module.images.length} screens
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function ModuleScreensView({
  module,
  onBack,
  onOpenImage,
  projectTitle,
}: {
  module: GalleryModule;
  onBack: () => void;
  onOpenImage: (src: string) => void;
  projectTitle: string;
}) {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <button
            type="button"
            onClick={onBack}
            className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-sky-700 transition hover:text-sky-900"
          >
            <span aria-hidden="true">←</span>
            Back to modules
          </button>
          <p className="section-kicker">{projectTitle}</p>
          <h2 className="content-title mt-1">{module.name}</h2>
        </div>
        <p className="body-copy rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sky-700">
          {module.images.length} screens
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {module.images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => onOpenImage(image)}
            className="group overflow-hidden rounded-xl border-2 border-sky-500 bg-white text-left transition hover:shadow-[0_16px_50px_rgba(14,165,233,0.15)]"
          >
            <Image
              alt={`${module.name} screenshot ${index + 1}`}
              className="h-auto w-full object-contain transition group-hover:scale-[1.01]"
              height={580}
              src={image}
              width={1100}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function ImageLightbox({
  alt,
  onClose,
  src,
}: {
  alt: string;
  onClose: () => void;
  src: string;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border-2 border-sky-500 bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-slate-900/80 text-lg text-white transition hover:bg-slate-900"
          aria-label="Close screenshot"
        >
          ×
        </button>
        <Image
          alt={alt}
          className="h-auto max-h-[90vh] w-full object-contain"
          height={900}
          src={src}
          width={1400}
        />
      </div>
    </div>
  );
}
