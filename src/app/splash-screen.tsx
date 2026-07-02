"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { profile } from "./portfolio-data";

const SPLASH_DURATION_MS = 4500;
const FADE_DURATION_MS = 500;

type SplashPhase = "checking" | "splash" | "done";

export function SplashScreen({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<SplashPhase>("checking");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("splashSeen");

    if (hasSeenSplash) {
      setPhase("done");
      return;
    }

    setPhase("splash");
    document.body.style.overflow = "hidden";

    const fadeTimer = window.setTimeout(() => {
      setIsFading(true);
    }, SPLASH_DURATION_MS - FADE_DURATION_MS);

    const hideTimer = window.setTimeout(() => {
      sessionStorage.setItem("splashSeen", "true");
      setPhase("done");
      document.body.style.overflow = "";
    }, SPLASH_DURATION_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  function dismissSplash() {
    setIsFading(true);
    window.setTimeout(() => {
      sessionStorage.setItem("splashSeen", "true");
      setPhase("done");
      document.body.style.overflow = "";
    }, FADE_DURATION_MS);
  }

  const showOverlay = phase === "checking" || phase === "splash";

  return (
    <>
      {showOverlay ? (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#eef4f8] transition-opacity duration-500 ${
            isFading ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
          role="presentation"
        >
          {phase === "splash" ? (
            <>
              <div className="flex flex-col items-center px-6 text-center">
                <div className="relative size-24 animate-pulse">
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="object-contain"
                    fill
                    priority
                    src="/apple-touch-icon.png"
                  />
                </div>

                <h1 className="mt-6 text-2xl font-bold text-[#030712]">
                  {profile.name}
                </h1>
                <p className="mt-2 text-base font-medium text-[#364153]">
                  {profile.title}
                </p>
                <p className="mt-1 text-sm text-sky-600">{profile.subtitle}</p>

                <div className="mt-8 h-1.5 w-48 overflow-hidden rounded-full bg-sky-100">
                  <div className="splash-progress h-full rounded-full bg-sky-500" />
                </div>
              </div>

            
            </>
          ) : null}
        </div>
      ) : null}

      <div className={phase === "done" ? undefined : "hidden"}>{children}</div>
    </>
  );
}
