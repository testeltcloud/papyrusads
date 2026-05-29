import { AppImage } from "@/components/ui/AppImage";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { images } from "@/lib/images";

export function AboutCTA() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-14">
        {/* About copy */}
        <div className="max-w-xl">
          <h2 className="text-[1.9rem] font-medium tracking-tight sm:text-[2.1rem]">
            Conheça mais do Papyrus Ads
          </h2>
          <p className="mt-5 leading-relaxed text-body">
            Somos especialistas em performance digital e criamos o Papyrus Ads
            para resolver um problema real: a dificuldade que empresários têm em
            entender os resultados dos seus próprios anúncios.
          </p>
          <p className="mt-4 leading-relaxed text-body">
            Nosso propósito é dar{" "}
            <strong className="font-semibold text-ink">
              autonomia, clareza e tranquilidade
            </strong>{" "}
            para quem toma decisões todos os dias — sem precisar falar “a língua
            de agência”.
          </p>
        </div>

        {/* Download box */}
        <div className="rounded-[28px] text-white overflow-hidden" style={{ backgroundColor: '#105c8b' }}>
          <div className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:gap-4 md:p-10">
            <div className="flex-1">
              <h3 className="text-[1.6rem] font-semibold leading-snug text-white">
                Baixe agora o app e veja como é simples entender seus
                resultados.
              </h3>
              <DownloadButtons className="mt-6" variant="white" />
            </div>
            <AppImage
              asset={images.phoneAssas}
              sizes="(min-width: 640px) 280px, 70vw"
              className="mx-auto h-auto w-44 shrink-0 sm:mx-0 sm:w-[270px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
