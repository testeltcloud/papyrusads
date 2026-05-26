import { AppImage } from "@/components/ui/AppImage";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* soft brand glow behind the phone mockup */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 hidden h-[520px] w-[520px] rounded-full bg-mint/20 blur-3xl lg:block"
      />

      <div className="container-page relative grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-10 lg:py-[88px]">
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

        <div className="relative lg:justify-self-end">
          <AppImage
            asset={images.heroApp}
            priority
            sizes="(min-width: 1024px) 560px, (min-width: 640px) 420px, 80vw"
            className="mx-auto h-auto w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
