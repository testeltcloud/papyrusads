import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { nav } from "@/lib/site";

export function Header() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 mx-auto w-full max-w-7xl px-4 md:px-8">
      <div className="flex h-16 md:h-[72px] items-center justify-between gap-6 rounded-full bg-[#f4f5f7] px-6 shadow-sm border border-line/20 dark:bg-[#0D1929]/95 dark:border-[#1a2d45]/60">
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
          <DownloadButtons variant="header" />
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
