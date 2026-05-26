import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { nav } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-6 md:h-[72px]">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.95rem] font-medium text-body transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <DownloadButtons />
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
