import { AppleIcon, PlayStoreIcon } from "@/components/icons";
import { links } from "@/lib/site";

type Props = {
  /** Stack the two buttons vertically instead of side by side. */
  stacked?: boolean;
  /** Larger padding for hero / primary placements. */
  size?: "md" | "lg";
  /** Make each button stretch to fill its track (useful on mobile). */
  block?: boolean;
  className?: string;
};

const sizes = {
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-12 px-6 text-base",
} as const;

export function DownloadButtons({
  stacked = false,
  size = "md",
  block = false,
  className = "",
}: Props) {
  const sizeClass = sizes[size];
  const stretch = block ? "w-full" : "";

  return (
    <div
      className={`flex ${stacked ? "flex-col" : "flex-col sm:flex-row"} gap-3 ${className}`}
    >
      {/* iOS — brand blue (#115D8C) */}
      <a
        href={links.appStore}
        aria-label="Baixar o Papyrus Ads na App Store"
        className={`btn ${sizeClass} ${stretch} bg-brand text-white hover:bg-brand-dark`}
      >
        <AppleIcon className="h-[18px] w-[18px]" />
        Download para iOS
      </a>
      {/* Android — green (#1BA68C) */}
      <a
        href={links.playStore}
        aria-label="Baixar o Papyrus Ads no Google Play"
        className={`btn ${sizeClass} ${stretch} bg-green text-white hover:bg-green-dark`}
      >
        <PlayStoreIcon className="h-[18px] w-[18px]" />
        Download para Android
      </a>
    </div>
  );
}
