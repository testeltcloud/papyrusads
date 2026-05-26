import { AppImage } from "@/components/ui/AppImage";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { ConnectionIllustration } from "@/components/ConnectionIllustration";
import { images } from "@/lib/images";

const card =
  "rounded-card bg-surface p-6 md:p-8 flex flex-col";

export function Features() {
  return (
    <section id="funcionalidades" className="py-16 md:py-24">
      <div className="container-page">
        {/* Section heading + intro, side by side on desktop */}
        <div className="grid gap-4 lg:grid-cols-2 lg:items-end lg:gap-12">
          <h2 className="text-[2.25rem] font-medium leading-tight tracking-tight sm:text-5xl">
            O que o Papyrus Ads faz por você
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-body">
            Todas as funcionalidades que você precisa para acompanhar seus
            anúncios com clareza, segurança e sem complicações.
          </p>
        </div>

        {/* Bento grid: 5/7 on top, 4/4/4 below */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {/* Conexão */}
          <article className={`${card} lg:col-span-5`}>
            <h3 className="text-[1.6rem] font-medium leading-snug text-ink">
              Conexão com Google, Meta Ads e TikTok Ads
            </h3>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-body">
              Importe automaticamente os dados das principais plataformas de
              tráfego pago com segurança e confiabilidade.
            </p>
            <div className="mt-8 flex flex-1 items-center justify-center">
              <ConnectionIllustration />
            </div>
          </article>

          {/* Dashboard */}
          <article className={`${card} lg:col-span-7`}>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
              <div className="lg:max-w-[15rem]">
                <h3 className="text-[1.6rem] font-medium leading-snug text-ink">
                  Dashboard simples e visual
                </h3>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-body">
                  Entenda em poucos segundos como suas campanhas estão
                  performando. Ideal para consultar à noite, no sofá, ou no
                  intervalo entre reuniões.
                </p>
              </div>
              <div className="flex-1">
                <AppImage
                  asset={images.featureDashboard}
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 88vw"
                  className="ml-auto h-auto w-full max-w-[380px]"
                />
              </div>
            </div>
          </article>

          {/* Indicadores */}
          <article className={`${card} lg:col-span-4`}>
            <h3 className="text-[1.6rem] font-medium leading-snug text-ink">
              Indicadores claros e direto ao ponto
            </h3>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-body">
              Veja o que realmente importa: investimento, vendas, ROAS, CPA e
              muito mais — sem precisar de tradução da agência.
            </p>
            <div className="mt-6 flex flex-1 items-end">
              <AppImage
                asset={images.featureIndicators}
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 88vw"
                className="h-auto w-full max-w-[320px]"
              />
            </div>
          </article>

          {/* Glossário */}
          <article className={`${card} overflow-hidden lg:col-span-4`}>
            <h3 className="text-[1.6rem] font-medium leading-snug text-ink">Glossário integrado</h3>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-body">
              Não sabe o que é CAC ou ROAS? O app te explica. Com definições
              simples e exemplos, você aprende enquanto usa.
            </p>
            <div className="mt-6 flex flex-1 items-end justify-center">
              <AppImage
                asset={images.featureGlossary}
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 88vw"
                className="h-auto w-full max-w-[300px]"
              />
            </div>
          </article>

          {/* 15 dias grátis */}
          <article className={`${card} lg:col-span-4`}>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-[1.6rem] font-medium leading-snug text-ink">
                15 dias grátis para testar
              </h3>
              <AppImage
                asset={images.featureGift}
                sizes="120px"
                className="h-auto w-24 shrink-0"
              />
            </div>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-body">
              Experimente agora, sem cartão de crédito. Veja na prática como é
              simples ter autonomia.
            </p>
            <DownloadButtons className="mt-auto pt-6" />
          </article>
        </div>
      </div>
    </section>
  );
}
