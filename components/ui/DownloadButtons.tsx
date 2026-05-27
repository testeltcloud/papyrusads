import { AppleIcon, PlayStoreIcon } from "@/components/icons";
import { links } from "@/lib/site";

type Props = {
  /** Stack the two buttons vertically instead of side by side. */
  stacked?: boolean;
  /** Larger padding for hero / primary placements. */
  size?: "md" | "lg";
  /** Make each button stretch to fill its track (useful on mobile). */
  block?: boolean;
   /** Header variant changes order and makes both brand color */
  variant?: "default" | "header";
  className?: string;
};

const sizes = {
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-[52px] px-6 text-base md:h-12",
} as const;

export function DownloadButtons({
  stacked = false,
  size = "md",
  block = false,
  variant = "default",
  className = "",
}: Props) {
  const sizeClass = sizes[size];
  const stretch = block ? "w-full" : "";

  const iosBtn = (
    <a
      key="ios"
      href={links.appStore}
      aria-label="Baixar o Papyrus Ads na App Store"
      className={`btn ${sizeClass} ${stretch} bg-brand text-white hover:bg-brand-dark`}
    >
      <AppleIcon className="h-[18px] w-[18px]" />
      Download para iOS
    </a>
  );

  const androidBtn = (
    <a
      key="android"
      href={links.playStore}
      aria-label="Baixar o Papyrus Ads no Google Play"
      className={`btn ${sizeClass} ${stretch} ${
        variant === "header"
          ? "bg-brand hover:bg-brand-dark"
          : "bg-green hover:bg-green-dark"
      } text-white`}
    >
      <PlayStoreIcon className="h-[18px] w-[18px]" />
      Download para Android
    </a>
  );

  return (
    <div
      className={`flex ${stacked ? "flex-col" : "flex-col md:flex-row"} gap-3 ${className}`}
    >
      {variant === "header" ? [androidBtn, iosBtn] : [iosBtn, androidBtn]}
    </div>
  );
}
