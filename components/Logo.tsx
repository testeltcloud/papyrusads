import Link from "next/link";
import { AppImage } from "@/components/ui/AppImage";
import { images } from "@/lib/images";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="#home" aria-label="Papyrus Ads — ir para o início" className={`inline-flex items-center ${className}`}>
      <AppImage
        asset={images.logo}
        className="h-8 w-auto"
        sizes="150px"
        priority
      />
    </Link>
  );
}
