"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { MenuIcon, CloseIcon } from "@/components/icons";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { nav } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  // Lock background scroll and allow Escape to close while the sheet is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="grid h-11 w-11 place-items-center rounded-xl text-navy transition-colors hover:bg-surface"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className="fixed inset-0 z-[60] flex flex-col bg-white"
        >
          <div className="container-page flex h-16 items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="grid h-11 w-11 place-items-center rounded-xl text-navy transition-colors hover:bg-surface"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>

          <nav className="container-page mt-2 flex flex-col gap-1" aria-label="Principal">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-lg font-medium text-ink transition-colors hover:bg-surface"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="container-page mt-auto pb-[max(2rem,env(safe-area-inset-bottom))] pt-6">
            <DownloadButtons stacked block size="lg" />
          </div>
        </div>
      )}
    </div>
  );
}
