import { AppImage } from "@/components/ui/AppImage";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-[520px] md:min-h-[580px] lg:min-h-[calc(82svh-72px)] flex-col items-center justify-center overflow-hidden bg-canvas px-4 py-14 md:px-8 md:py-16"
    >
      {/* Ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand/[0.06] dark:bg-brand/[0.12] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full bg-mint/[0.08] dark:bg-mint/[0.06] blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1380px] flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-8 lg:px-6 xl:px-10">

        {/* ── Text column ── */}
        <div className="flex w-full flex-col items-center text-center lg:items-start lg:text-left lg:flex-1 lg:max-w-[600px] xl:max-w-[680px]">
          <h1 className="text-[2rem] xs:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] xl:text-[4.8rem] font-normal leading-[1.08] tracking-tight text-ink">
            <span className="block whitespace-nowrap">
              Você no{" "}
              <span className="inline-block rounded-[0.4em] bg-mint px-3 py-1 text-ink leading-tight shadow-sm">
                controle
              </span>
            </span>
            <span className="block whitespace-nowrap">
              dos seus anúncios.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl font-medium text-body">
            Sem complicações. Sem enrolação.
          </p>

          <p className="mt-4 max-w-[480px] text-base sm:text-lg leading-relaxed text-body">
            Veja os dados que realmente importam, entenda seus
            resultados e tome decisões com mais segurança.
          </p>

          <DownloadButtons className="mt-10 w-full sm:w-auto" size="lg" />
        </div>

        {/* ── Phone column with card ── */}
        <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:w-[48%] lg:max-w-[580px] xl:max-w-[640px] shrink-0">
          <div className="relative w-full aspect-[4/4.5] overflow-hidden rounded-[2.5rem] bg-transparent dark:bg-surface-2 dark:shadow-soft flex justify-center">
            <div className="absolute top-[10%] sm:top-[12%] lg:top-[15%] w-[85%] sm:w-[80%]">
              <AppImage
                asset={images.heroApp}
                priority
                sizes="(min-width: 1280px) 640px, (min-width: 1024px) 48vw, (min-width: 640px) 420px, 320px"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-brand/90 via-brand/40 to-transparent z-20 pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
