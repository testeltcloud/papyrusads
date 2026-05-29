import { AppImage } from "@/components/ui/AppImage";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-[calc(100svh-64px)] flex-col items-center justify-center overflow-hidden bg-canvas px-4 py-20 md:min-h-[calc(100svh-72px)] md:px-8 md:py-24"
    >
      {/* Ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand/[0.06] dark:bg-brand/[0.12] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full bg-mint/[0.08] dark:bg-mint/[0.06] blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-10 lg:px-10">

        {/* ── Text column ── */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-1 lg:max-w-[520px]">
          <h1 className="text-[1.9rem] xs:text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] xl:text-[4rem] font-bold leading-[1.1] tracking-tight text-ink">
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

          <p className="mt-6 text-base sm:text-lg font-medium text-body">
            Sem complicações. Sem enrolação.
          </p>

          <p className="mt-3 max-w-[420px] text-[0.95rem] sm:text-[1.05rem] leading-relaxed text-body">
            Veja os dados que realmente importam, entenda seus
            resultados e tome decisões com mais segurança.
          </p>

          <DownloadButtons className="mt-8 w-full sm:w-auto" />
        </div>

        {/* ── Phone column with card ── */}
        <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:w-[46%] lg:max-w-[500px] xl:max-w-[540px] shrink-0">
          <div className="relative w-full aspect-square overflow-hidden rounded-[2.5rem] bg-[#f4f5f7] dark:bg-surface-2 shadow-soft">
            <div className="absolute inset-x-0 top-[6%] flex justify-center px-6">
              <AppImage
                asset={images.heroApp}
                priority
                sizes="(min-width: 1280px) 540px, (min-width: 1024px) 46vw, (min-width: 640px) 360px, 300px"
                className="w-[82%] h-auto drop-shadow-2xl"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-brand/85 via-brand/35 to-transparent z-20 pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
