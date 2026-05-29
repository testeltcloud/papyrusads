import { links } from "@/lib/site";
import { AppleIcon, PlayStoreIcon } from "@/components/icons";

type Props = {
  stacked?: boolean;
  size?: "md" | "lg";
  block?: boolean;
  variant?: "default" | "header";
  className?: string;
};

export function DownloadButtons({
  stacked = false,
  size = "md",
  block = false,
  className = "",
}: Props) {
  const isLg = size === "lg";
  const pad     = isLg ? "px-4 sm:px-6 py-3" : "px-3 sm:px-5 py-2.5";
  const iconSz  = isLg ? "w-5 h-5" : "w-4 h-4";
  const textSz  = isLg ? "text-[13px] sm:text-[15px]" : "text-[12px] sm:text-[13px]";
  const stretch = block ? "w-full justify-center" : "";

  const rowCls = stacked ? "flex-col" : "flex-row";
  const itemFlex = stacked ? "" : "flex-1 justify-center";

  return (
    <div className={`flex ${rowCls} gap-3 ${className}`}>
      <a
        href={links.appStore}
        aria-label="Baixar o Papyrus Ads na App Store"
        className={`inline-flex items-center gap-2 rounded-full font-semibold text-white shadow-sm
          bg-brand hover:bg-brand-dark transition-all duration-200 active:scale-[0.97] hover:shadow-md
          ${pad} ${textSz} ${itemFlex}`}
      >
        <AppleIcon className={`${iconSz} shrink-0`} />
        <span className="whitespace-nowrap">Download para iOS</span>
      </a>

      <a
        href={links.playStore}
        aria-label="Baixar o Papyrus Ads no Google Play"
        className={`inline-flex items-center gap-2 rounded-full font-semibold text-white shadow-sm
          bg-green hover:bg-green-dark transition-all duration-200 active:scale-[0.97] hover:shadow-md
          ${pad} ${textSz} ${itemFlex}`}
      >
        <PlayStoreIcon className={`${iconSz} shrink-0`} />
        <span className="whitespace-nowrap">Download para Android</span>
      </a>
    </div>
  );
}
