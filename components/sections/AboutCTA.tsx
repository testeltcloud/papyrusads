import Image from "next/image";
import { AppImage } from "@/components/ui/AppImage";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { images } from "@/lib/images";
import { links } from "@/lib/site";

export function AboutCTA() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-14">
        {/* About copy */}
        <div data-reveal="left" className="max-w-xl">
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
            para quem toma decisões todos os dias — sem precisar falar &ldquo;a língua
            de agência&rdquo;.
          </p>
        </div>

        {/* Download box — mobile: imagem estática */}
        <div data-reveal="right" data-delay="2" className="sm:hidden relative rounded-[28px] overflow-hidden">
          <Image
            src="/images/adc/background.png"
            alt="Baixe o Papyrus Ads"
            width={1400}
            height={1044}
            className="w-full h-auto"
          />
          <div className="absolute bottom-[8%] left-[5%] flex flex-col gap-2 w-[52%]">
            <a href={links.appStore} aria-label="Baixar na App Store" className="block w-[88%]">
              <Image
                src="/images/adc/ButtonCima.png"
                alt="Download para iOS"
                width={620}
                height={160}
                className="w-full h-auto"
              />
            </a>
            <a href={links.playStore} aria-label="Baixar no Google Play">
              <Image
                src="/images/adc/ButtonBaixo.png"
                alt="Download para Android"
                width={720}
                height={160}
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>

        {/* Download box — desktop: componente dinâmico */}
        <div data-reveal="right" data-delay="2" className="hidden sm:block rounded-[28px] text-white overflow-hidden" style={{ backgroundColor: '#105c8b' }}>
          <div className="flex flex-row items-start gap-6 p-8 md:p-10">
            <div className="flex-1 min-w-0 pt-1">
              <h3 className="text-[1.5rem] font-light leading-snug text-white">
                Baixe agora o app e veja como é simples entender seus
                resultados.
              </h3>
              <DownloadButtons className="mt-3" variant="white" stacked shape="rect" />
            </div>
            <AppImage
              asset={images.phoneAssas}
              sizes="280px"
              className="h-auto w-[270px] shrink-0 -mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
