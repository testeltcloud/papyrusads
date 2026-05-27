import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { nav } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/30 bg-white/50 backdrop-blur-xl dark:bg-[#0D1929]/95 dark:border-[#1a2d45]/60">
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

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <DownloadButtons variant="header" />
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
