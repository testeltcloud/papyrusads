import { AppImage } from "@/components/ui/AppImage";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-10 px-[5%] py-12 md:py-16 lg:grid-cols-2 lg:gap-[5%] lg:py-[88px]">
        <div className="max-w-xl">
          <h1 className="text-[2.4rem] font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]">
            Você no{" "}
            <span className="inline-block rounded-lg bg-mint px-3 pb-1 pt-0.5 text-brand">
              controle
            </span>{" "}
            dos seus anúncios.
          </h1>

          <p className="mt-5 text-lg font-medium text-body">
            Sem complicações. Sem enrolação.
          </p>

          <p className="mt-3 max-w-md text-[1.05rem] leading-relaxed text-body">
            Veja os dados que realmente importam, entenda seus resultados e tome
            decisões com mais segurança.
          </p>

          <DownloadButtons className="mt-8" size="lg" />
        </div>

        <div className="relative flex items-end justify-center lg:justify-end">
          <div className="relative w-full max-w-[520px] lg:max-w-[600px]">
            <AppImage
              asset={images.ctaPhone}
              priority
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 300px, 60vw"
              className="relative z-10 mx-auto h-auto w-[220px] sm:w-[280px] md:w-[320px] lg:w-[360px]"
            />
            {/* Blue gradient overlay — sits on top of the bottom portion */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[50%] rounded-b-[32px] bg-gradient-to-b from-transparent via-[#4a9dcb]/70 to-[#2a7bb5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
