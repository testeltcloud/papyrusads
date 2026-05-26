import Image from "next/image";
import { platformLogos, logoMark } from "@/lib/images";

/*
  Rebuilds the "Conexão" hub illustration from the design: a dashed orbit with
  four platform tiles at the corners and the Papyrus hexagon in the center.
  Built in JSX (not a flat image) so it stays crisp and scales responsively.
*/
const tiles = [
  { ...platformLogos.googleAds, pos: "left-0 top-[6%]" },
  { ...platformLogos.analytics, pos: "right-0 top-[6%]" },
  { ...platformLogos.meta, pos: "left-0 bottom-[6%]" },
  { ...platformLogos.tiktok, pos: "right-0 bottom-[6%]" },
];

export function ConnectionIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[280px]">
      {/* dashed orbit */}
      <div className="absolute inset-[15%] rounded-full border-2 border-dashed border-brand/25" />

      {/* center hexagon mark */}
      <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2">
        <Image
          src={logoMark.src}
          alt=""
          width={48}
          height={48}
          className="h-full w-full object-contain"
        />
      </div>

      {/* platform tiles */}
      {tiles.map((t) => (
        <div
          key={t.alt}
          className={`absolute ${t.pos} grid h-[58px] w-[58px] place-items-center rounded-2xl bg-white shadow-card`}
        >
          <Image
            src={t.src}
            alt={t.alt}
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
        </div>
      ))}
    </div>
  );
}
