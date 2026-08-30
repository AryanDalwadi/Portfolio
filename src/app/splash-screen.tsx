"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { profile } from "./portfolio-data";

const SPLASH_DURATION_MS = 4500;
const FADE_DURATION_MS = 500;

function subscribe() {
  return () => {};
}

function getHasSeenSplash() {
  return sessionStorage.getItem("splashSeen") === "true";
}

function getServerHasSeenSplash() {
  return false;
}

export function SplashScreen({ children }: { children: ReactNode }) {
  const isClient = useSyncExternalStore(subscribe, () => true, () => false);
  const hasSeenSplash = useSyncExternalStore(
    subscribe,
    getHasSeenSplash,
    getServerHasSeenSplash,
  );

  const [splashComplete, setSplashComplete] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const shouldShowContent = !isClient || hasSeenSplash || splashComplete;
  const showOverlay = isClient && !hasSeenSplash && !splashComplete;

  useEffect(() => {
    if (!showOverlay) {
      return;
    }

    document.body.style.overflow = "hidden";

    const fadeTimer = window.setTimeout(() => {
      setIsFading(true);
    }, SPLASH_DURATION_MS - FADE_DURATION_MS);

    const hideTimer = window.setTimeout(() => {
      sessionStorage.setItem("splashSeen", "true");
      setSplashComplete(true);
      document.body.style.overflow = "";
    }, SPLASH_DURATION_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, [showOverlay]);

  return (
    <>
      {showOverlay ? (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#eef4f8] transition-opacity duration-500 ${
            isFading ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
          role="presentation"
        >
          <div className="flex flex-col items-center px-6 text-center">
            <div className="relative size-24 animate-pulse">
              <Image
                alt=""
                aria-hidden="true"
                className="object-contain"
                fill
                priority
                sizes="96px"
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
        </div>
      ) : null}

      <div className={shouldShowContent ? undefined : "hidden"}>{children}</div>
    </>
  );
}
