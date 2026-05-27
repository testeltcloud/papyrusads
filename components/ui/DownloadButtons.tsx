import Image from "next/image";
import { links } from "@/lib/site";

type Props = {
  /** Stack the two buttons vertically on all screen sizes. */
  stacked?: boolean;
  /** Larger badge for hero / primary placements. */
  size?: "md" | "lg";
  /** Stretch each badge to fill its flex track. */
  block?: boolean;
  /** Kept for backward compatibility — no longer changes visual style. */
  variant?: "default" | "header";
  className?: string;
};

export function DownloadButtons({
  stacked = false,
  size = "md",
  block = false,
  className = "",
}: Props) {
  const iconPx  = size === "lg" ? 32 : 26;
  const pad     = size === "lg" ? "px-5 py-3.5" : "px-4 py-2.5";
  const sub     = size === "lg" ? "text-[10px]" : "text-[9px]";
  const title   = size === "lg" ? "text-[15px]" : "text-[13px]";
  const stretch = block ? "w-full justify-center" : "";

  const badge = (
    href: string,
    label: string,
    src: string,
    subline: string,
    titleText: string,
    colorCls: string,
    hoverCls: string
  ) => (
    <a
      href={href}
      aria-label={label}
      className={`
        inline-flex items-center gap-3 rounded-2xl
        ${colorCls} text-white shadow-sm
        transition-all duration-200
        ${hoverCls} hover:shadow-md
        active:scale-[0.97]
        ${pad} ${stretch}
      `}
    >
      <Image
        src={src}
        alt=""
        width={iconPx}
        height={iconPx}
        className="shrink-0 rounded-[6px]"
      />
      <div className="flex flex-col leading-tight text-left">
        <span className={`${sub} font-normal uppercase tracking-widest text-white/70`}>
          {subline}
        </span>
        <span className={`${title} font-semibold tracking-tight`}>{titleText}</span>
      </div>
    </a>
  );

  return (
    <div
      className={`flex ${stacked ? "flex-col" : "flex-col md:flex-row"} gap-3 ${className}`}
    >
      {badge(links.appStore,  "Baixar o Papyrus Ads na App Store",   "/images/loja/appstore.png", "Disponível na",     "App Store",   "bg-brand",  "hover:bg-brand-dark")}
      {badge(links.playStore, "Baixar o Papyrus Ads no Google Play", "/images/loja/google.png",   "Disponível no", "Google Play", "bg-green",  "hover:bg-green-dark")}
    </div>
  );
}
