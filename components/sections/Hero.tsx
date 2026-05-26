import { AppImage } from "@/components/ui/AppImage";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/*
        Text takes the flexible track (1fr), the phone a fixed track so the two
        columns stay adjacent. On desktop the phone keeps a wide footprint but
        its display height is capped (`lg:h-[520px]` + overflow-hidden), so the
        base is cropped and the hero stays short & wide instead of tall.
      */}
      <div className="container-page grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1fr_600px] lg:gap-12 lg:py-16 xl:grid-cols-[1fr_700px]">
        <div className="lg:max-w-[720px] lg:justify-self-center">
          <h1 className="text-[2.75rem] font-medium leading-[1.04] tracking-tight text-ink sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem]">
            Você no{" "}
            <span className="inline-block rounded-xl bg-mint px-3 pb-1.5 pt-0.5 text-brand">
              controle
            </span>{" "}
            dos seus anúncios.
          </h1>

          <p className="mt-6 text-2xl font-medium text-body">
            Sem complicações. Sem enrolação.
          </p>

          <p className="mt-4 max-w-2xl text-[1.3rem] leading-relaxed text-body">
            Veja os dados que realmente importam, entenda seus resultados e tome
            decisões com mais segurança.
          </p>

          <DownloadButtons className="mt-8" size="lg" />
        </div>

        <div className="relative mx-auto w-[300px] sm:w-[440px] md:w-[520px] lg:h-[700px] lg:w-full lg:overflow-hidden border-mint rounded-3xl">
          <AppImage
            asset={images.heroApp}
            priority
            sizes="(min-width: 1280px) 700px, (min-width: 1024px) 600px, (min-width: 640px) 520px, 85vw"
            className="relative z-10 h-auto w-full"
          />
          {/* Blue gradient softens the cropped base */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden h-[38%] bg-gradient-to-b from-transparent via-[#4a9dcb]/70 to-[#2a7bb5] lg:block"
          />
        </div>
      </div>
    </section>
  );
}
