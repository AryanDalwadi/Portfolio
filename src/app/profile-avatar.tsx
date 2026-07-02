import Image from "next/image";
import { profile } from "./portfolio-data";

type ProfileAvatarProps = {
  variant?: "sidebar" | "mobile" | "hero" | "contact";
};

const variantClasses = {
  sidebar:
    "relative size-11 shrink-0 overflow-hidden rounded-full ring-4 ring-slate-50",
  mobile:
    "relative size-10 shrink-0 overflow-hidden rounded-full ring-4 ring-slate-50",
  hero: "relative size-32 shrink-0 overflow-hidden rounded-3xl",
  contact: "relative mx-auto h-52 w-44 overflow-hidden rounded-xl",
};

export function ProfileAvatar({ variant = "sidebar" }: ProfileAvatarProps) {
  const className = variantClasses[variant];

  if (profile.photo) {
    return (
      <div className={className}>
        <Image
          alt={profile.name}
          className="object-cover object-top"
          fill
          sizes={
            variant === "contact"
              ? "176px"
              : variant === "hero"
                ? "128px"
                : variant === "mobile"
                  ? "40px"
                  : "44px"
          }
          src={profile.photo}
        />
      </div>
    );
  }

  const fallbackClasses = {
    sidebar:
      "grid size-11 shrink-0 place-items-center rounded-full bg-sky-100 text-base font-bold text-sky-700 ring-4 ring-slate-50",
    mobile:
      "grid size-10 shrink-0 place-items-center rounded-full bg-sky-100 text-sm font-bold text-sky-700 ring-4 ring-slate-50",
    hero: "grid size-32 shrink-0 place-items-center rounded-3xl bg-gradient-to-br from-sky-100 to-slate-100 text-6xl font-black text-sky-700",
    contact:
      "mx-auto grid h-52 w-44 place-items-center rounded-xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-6xl font-bold text-sky-200",
  };

  return (
    <div className={fallbackClasses[variant]}>{profile.name.charAt(0)}</div>
  );
}
